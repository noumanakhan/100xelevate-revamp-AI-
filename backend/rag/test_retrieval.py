"""
RAG Pipeline Audit - Retrieval Test Script
===========================================
Runs test questions against the vector store and reports top-4 results
with similarity scores to verify retrieval accuracy.

Run: python -m backend.rag.test_retrieval
"""
import os
import sys
from backend.config import settings

# Force UTF-8 stdout on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")


# Test questions derived from actual knowledge base content
TEST_QUESTIONS = [
    {
        "question": "What is GEO and how is it different from SEO?",
        "expected_source": "services_faq.md",
        "expected_section": "Frequently Asked Questions (FAQ)",
    },
    {
        "question": "How long does a Next.js migration take?",
        "expected_source": "services_faq.md",
        "expected_section": "Frequently Asked Questions (FAQ)",
    },
    {
        "question": "Can you build custom AI chatbots?",
        "expected_source": "services_faq.md",
        "expected_section": "Frequently Asked Questions (FAQ)",
    },
    {
        "question": "How can I schedule a consultation?",
        "expected_source": "services_faq.md",
        "expected_section": "Frequently Asked Questions (FAQ)",
    },
    {
        "question": "What are the payment terms?",
        "expected_source": "website_policies.md",
        "expected_section": "Terms of Service",
    },
    {
        "question": "What is the privacy policy on data?",
        "expected_source": "website_policies.md",
        "expected_section": "Privacy Policy",
    },
    {
        "question": "What is the SLA response time?",
        "expected_source": "website_policies.md",
        "expected_section": "Support & Service Level Agreement (SLA)",
    },
    {
        "question": "What programmatic SEO services do you offer?",
        "expected_source": "services_faq.md",
        "expected_section": "2. Programmatic SEO & Scale Solutions",
    },
    {
        "question": "How do you handle data retention?",
        "expected_source": "website_policies.md",
        "expected_section": "Privacy Policy",
    },
    {
        "question": "What are 100xElevate's support hours?",
        "expected_source": "website_policies.md",
        "expected_section": "Support & Service Level Agreement (SLA)",
    },
]


def get_vector_store():
    """Load the vector store (PGVector or FAISS fallback)."""
    from langchain_google_genai import GoogleGenerativeAIEmbeddings

    embeddings = GoogleGenerativeAIEmbeddings(
        model=settings.EMBEDDING_MODEL,
        google_api_key=settings.GEMINI_API_KEY,
    )

    # Try PGVector first
    try:
        from langchain_postgres.vectorstores import PGVector
        vs = PGVector(
            connection=settings.DATABASE_URL,
            collection_name=settings.PG_COLLECTION_NAME,
            embeddings=embeddings,
        )
        # Quick test
        vs.similarity_search("test", k=1)
        print("[Retrieval] Using PGVector backend")
        return vs
    except Exception:
        pass

    # FAISS fallback
    faiss_path = os.path.join(
        os.path.dirname(__file__), "..", "vectorstore", "faiss_index"
    )
    if os.path.exists(faiss_path):
        from langchain_community.vectorstores import FAISS
        vs = FAISS.load_local(
            faiss_path, embeddings, allow_dangerous_deserialization=True
        )
        print(f"[Retrieval] Using FAISS backend ({vs.index.ntotal} vectors)")
        return vs

    print("[Retrieval] ERROR: No vector store found!")
    return None


def run_retrieval_test():
    print("=" * 70)
    print("STEP 5 - RETRIEVAL ACCURACY TEST")
    print("=" * 70)

    vs = get_vector_store()
    if not vs:
        print("[Retrieval] Cannot run test — no vector store available.")
        return

    total = len(TEST_QUESTIONS)
    source_hits = 0
    section_hits = 0
    top1_source_hits = 0
    top1_section_hits = 0

    results_log = []

    for i, tq in enumerate(TEST_QUESTIONS):
        q = tq["question"]
        expected_src = tq["expected_source"]
        expected_sec = tq["expected_section"]

        print(f"\n--- Q{i+1}: {q}")
        print(f"    Expected: source={expected_src}, section={expected_sec}")

        results = vs.similarity_search_with_score(q, k=4)

        source_found = False
        section_found = False
        top1_src_match = False
        top1_sec_match = False

        for rank, (doc, score) in enumerate(results):
            src = doc.metadata.get("source", "?")
            sec = doc.metadata.get("section_title", "?")
            preview = doc.page_content[:80].replace("\n", "\\n")

            marker = ""
            if src == expected_src and sec == expected_sec:
                marker = " <-- MATCH"
                source_found = True
                section_found = True
                if rank == 0:
                    top1_src_match = True
                    top1_sec_match = True
            elif src == expected_src:
                marker = " <-- source match"
                source_found = True
                if rank == 0:
                    top1_src_match = True

            print(f"    [{rank+1}] score={score:.4f} | {src} | {sec}")
            print(f"        {preview}...{marker}")

        if source_found:
            source_hits += 1
        if section_found:
            section_hits += 1
        if top1_src_match:
            top1_source_hits += 1
        if top1_sec_match:
            top1_section_hits += 1

        status = "HIT" if section_found else ("PARTIAL" if source_found else "MISS")
        results_log.append((q, status, source_found, section_found))

        if not source_found:
            print(f"    >>> MISS: expected source '{expected_src}' not in top-4!")
        elif not section_found:
            print(f"    >>> PARTIAL: correct source found but wrong section "
                  f"(expected '{expected_sec}')")

    # Summary
    print("\n" + "=" * 70)
    print("RETRIEVAL TEST SUMMARY")
    print("=" * 70)
    print(f"  Total questions:         {total}")
    print(f"  Source in top-4:         {source_hits}/{total} "
          f"({source_hits/total*100:.0f}%)")
    print(f"  Section in top-4:        {section_hits}/{total} "
          f"({section_hits/total*100:.0f}%)")
    print(f"  Source at rank-1:        {top1_source_hits}/{total} "
          f"({top1_source_hits/total*100:.0f}%)")
    print(f"  Section at rank-1:       {top1_section_hits}/{total} "
          f"({top1_section_hits/total*100:.0f}%)")

    print("\n  Per-question breakdown:")
    for q, status, src_ok, sec_ok in results_log:
        icon = "[OK]  " if sec_ok else ("[PART]" if src_ok else "[MISS]")
        print(f"    {icon} {q}")

    overall = "PASS" if section_hits >= total * 0.8 else "NEEDS IMPROVEMENT"
    print(f"\n  Overall: {overall}")


if __name__ == "__main__":
    run_retrieval_test()
