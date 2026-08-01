"""
RAG Pipeline Audit - Diagnostic Script
=======================================
Tests loading + chunking stages locally (no API calls).
Run: python -m backend.rag.audit_pipeline
"""
import os
import re
import sys
import glob
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Force UTF-8 stdout on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

KB_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "knowledge_base")


def audit_loading():
    """Step 1: Verify loading - file discovery, encoding, metadata."""
    print("=" * 70)
    print("STEP 1 - LOADING AUDIT")
    print("=" * 70)

    md_files = sorted(glob.glob(os.path.join(KB_DIR, "*.md")))
    print(f"\n[Loading] Knowledge base dir: {os.path.abspath(KB_DIR)}")
    print(f"[Loading] .md files found on disk: {len(md_files)}")
    for f in md_files:
        print(f"  - {os.path.basename(f)} ({os.path.getsize(f)} bytes)")

    if not md_files:
        print("[ERROR] No .md files found! Check KB_DIR path.")
        return []

    documents = []
    for filepath in md_files:
        try:
            loader = TextLoader(filepath, encoding="utf-8")
            docs = loader.load()
            for doc in docs:
                doc.metadata["source"] = os.path.basename(filepath)
            documents.extend(docs)
            print(f"[Loading] [OK] Loaded {os.path.basename(filepath)} - "
                  f"{len(docs)} doc(s), {len(docs[0].page_content)} chars")
        except Exception as e:
            print(f"[Loading] [FAIL] Could not load {os.path.basename(filepath)}: {e}")

    print(f"\n[Loading] Total documents loaded: {len(documents)}")
    print(f"[Loading] Expected (= file count): {len(md_files)}")

    if len(documents) == len(md_files):
        print("[Loading] [OK] PASS - all files loaded correctly")
    else:
        print("[Loading] [FAIL] document count mismatch!")

    # Check metadata
    print("\n[Loading] Metadata check:")
    for doc in documents:
        src = doc.metadata.get("source", "MISSING")
        print(f"  - source={src}")
        # Check for garbled chars (non-UTF8 artifacts)
        garbled = len(re.findall(r'[\ufffd\x00-\x08\x0b\x0c\x0e-\x1f]', doc.page_content))
        if garbled:
            print(f"    [WARN] Found {garbled} garbled/control characters - encoding issue!")
        else:
            print(f"    [OK] No encoding issues detected")

    return documents


def audit_chunking_old(documents):
    """Step 2a: Run chunking with CURRENT (old) separators."""
    print("\n" + "=" * 70)
    print("STEP 2a - CHUNKING AUDIT (current separators)")
    print("=" * 70)

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=600,
        chunk_overlap=100,
        separators=["\n\n", "\n", " ", ""]
    )
    chunks = splitter.split_documents(documents)
    _print_chunk_report(chunks, "OLD")
    return chunks


def audit_chunking_new(documents):
    """Step 2b: Run chunking with HEADING-AWARE separators."""
    print("\n" + "=" * 70)
    print("STEP 2b - CHUNKING AUDIT (heading-aware separators)")
    print("=" * 70)

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=600,
        chunk_overlap=100,
        separators=["\n## ", "\n### ", "\n\n", "\n", " ", ""]
    )
    chunks = splitter.split_documents(documents)
    _print_chunk_report(chunks, "NEW")
    return chunks


def _print_chunk_report(chunks, label):
    print(f"\n[Chunking-{label}] Total chunks: {len(chunks)}")

    # Group by source
    by_source = {}
    for c in chunks:
        src = c.metadata.get("source", "unknown")
        by_source.setdefault(src, []).append(c)

    for src, src_chunks in by_source.items():
        print(f"\n  Source: {src} - {len(src_chunks)} chunks")
        for i, chunk in enumerate(src_chunks):
            length = len(chunk.page_content)
            preview = chunk.page_content[:80].replace("\n", "\\n")
            tail = chunk.page_content[-60:].replace("\n", "\\n")
            empty_flag = " [WARN] EMPTY/WHITESPACE" if not chunk.page_content.strip() else ""
            print(f"    [{i:2d}] len={length:4d}{empty_flag}")
            print(f"         first: {preview}...")
            print(f"         last:  ...{tail}")

    # Check for Q&A split issues
    print(f"\n[Chunking-{label}] Q&A split check:")
    qa_split_issues = 0
    for i, chunk in enumerate(chunks):
        content = chunk.page_content
        # A chunk that starts with "A:" but has no preceding "Q:" likely got split
        if content.strip().startswith("A:") and "Q:" not in content[:50]:
            qa_split_issues += 1
            print(f"    [WARN] Chunk {i}: answer orphaned from question")
        # A chunk ending with "Q:" pattern but answer is in next chunk
        if re.search(r'\*\*Q:.*\?\*\*\s*$', content):
            qa_split_issues += 1
            print(f"    [WARN] Chunk {i}: question separated from answer")

    # Check for mid-heading splits
    heading_split_issues = 0
    mid_heading_chunks = []
    for i, chunk in enumerate(chunks):
        lines = chunk.page_content.split("\n")
        headings_found = [l for l in lines[1:] if re.match(r'^#{1,3} ', l)]
        if headings_found:
            heading_split_issues += 1
            mid_heading_chunks.append((i, headings_found))

    if qa_split_issues:
        print(f"    [FAIL] {qa_split_issues} Q&A split issue(s) found")
    else:
        print(f"    [OK] No obvious Q&A split issues")

    if heading_split_issues:
        print(f"    [WARN] {heading_split_issues} chunk(s) contain mid-chunk headings "
              f"(heading-unaware splitting)")
        for idx, headings in mid_heading_chunks:
            for h in headings:
                print(f"      chunk[{idx}]: contains heading '{h}'")
    else:
        print(f"    [OK] No mid-chunk heading issues")

    # Empty chunk check
    empty = [c for c in chunks if not c.page_content.strip()]
    if empty:
        print(f"    [WARN] {len(empty)} empty/whitespace-only chunk(s) found")
    else:
        print(f"    [OK] No empty chunks")


def main():
    print("RAG PIPELINE AUDIT - DIAGNOSTIC REPORT")
    print("=" * 70)
    print()

    docs = audit_loading()
    if not docs:
        print("\n[ABORT] No documents loaded, cannot continue audit.")
        return

    old_chunks = audit_chunking_old(docs)
    new_chunks = audit_chunking_new(docs)

    print("\n" + "=" * 70)
    print("COMPARISON SUMMARY")
    print("=" * 70)
    print(f"  Old separators: {len(old_chunks)} chunks")
    print(f"  New separators: {len(new_chunks)} chunks")
    print()


if __name__ == "__main__":
    main()
