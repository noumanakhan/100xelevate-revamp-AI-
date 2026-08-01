import os
import json
import glob
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
KB_DIR = os.path.join(BASE_DIR, "knowledge_base")
CONSTANTS_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", "..", "100xelevate", "constants", "services"))
WORK_JSON = os.path.abspath(os.path.join(BASE_DIR, "..", "..", "100xelevate", "content", "work.json"))

def clean_html(text):
    if not text:
        return ""
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'</?strong>', '**', text)
    text = re.sub(r'</?em>', '*', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('&amp;', '&').replace('&bull;', '•').replace('&quot;', '"')
    return text.strip()

def build_company_overview():
    content = """# 100xElevate Agency Overview & Philosophy

## About 100xElevate
100xElevate is an elite Shopify Plus agency and digital growth partner specializing in high-performing eCommerce web engineering, custom theme design, Generative Engine Optimization (GEO), Programmatic SEO, and conversion-focused solutions for global DTC brands and technology companies.

## Core Value Proposition
- **High-Quality Design**: High-impact design systems that make brands impossible to ignore.
- **Senior-Level Expertise**: Senior developers and designers obsessed with speed, clean architecture, and user experience.
- **AI-Driven eCommerce**: Pioneering AI integration (RAG chatbots, GEO knowledge graphs, dynamic content) to keep online stores ahead of competition.
- **Frictionless Checkout**: Eliminating conversion bottlenecks across Shopify, Shopify Plus, and Headless architectures.
- **Data-Driven Growth**: Continuous A/B testing, CRO audits, Klaviyo email marketing retention flows, and Core Web Vitals optimization (100/100 Lighthouse targets).

## Client Proof & Testimonials
- **Cambie**: "We've increased our revenue by 35-40% by working with 100xelevate. They can do things with Shopify that even Shopify thinks are impossible." — *David Foley, Cambie*
- **Andrea Maack**: "100xelevate has led a web refresh for our brand, Andrea Maack. Honestly, one of the most technically talented teams I've worked with across the board." — *Andrea Maack, Founder*
- **Blue Ruby**: "After 4 months, we've got a 49% increase in our sales. I'd never go back to not working with 100xelevate. Our Klaviyo metrics were at their highest ever." — *Jenny Tangjerd, Blue Ruby*

## Contact & Consultation
- **Direct Strategy Booking**: Book strategy calls directly via the 100xElevate online booking portal.
- **Email Support**: support@100xelevate.com
- **Services Covered**: Shopify Plus Development, Headless Next.js Migrations, GEO & Programmatic SEO, Klaviyo Email/SMS Marketing, CRO Audits, A/B Testing.
"""
    with open(os.path.join(KB_DIR, "company_overview.md"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Created company_overview.md")

def build_services_detailed():
    output = ["# 100xElevate Services Catalog & Technical Specifications\n"]
    
    files = glob.glob(os.path.join(CONSTANTS_DIR, "*.ts"))
    for file_path in sorted(files):
        filename = os.path.basename(file_path)
        service_name = filename.replace(".constants.ts", "").replace(".constant.ts", "")
        formatted_name = " ".join([w.capitalize() for w in re.sub(r'([A-Z])', r' \1', service_name).split()])
        
        with open(file_path, "r", encoding="utf-8") as f:
            raw_text = f.read()
            
        output.append(f"\n## Service: {formatted_name}\n")
        
        # Extract title/description objects
        items = re.findall(r'title:\s*"([^"]+)",\s*description:\s*"([^"]+)"', raw_text)
        if items:
            output.append("### Key Features & Offerings:")
            for title, desc in items:
                output.append(f"- **{title}**: {desc}")
            output.append("")

    with open(os.path.join(KB_DIR, "services_detailed.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(output))
    print("Created services_detailed.md")

def build_case_studies():
    if not os.path.exists(WORK_JSON):
        print(f"File not found: {WORK_JSON}")
        return

    with open(WORK_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    output = ["# 100xElevate Case Studies & Portfolio Results\n"]

    for key, project in data.items():
        name = project.get("name", key)
        card_desc = project.get("cardDescription", "")
        output.append(f"\n## Case Study: {name}")
        if card_desc:
            output.append(f"**Overview**: {clean_html(card_desc)}\n")

        sections = project.get("sections", [])
        for sec in sections:
            sec_type = sec.get("type")
            if sec_type == "listHeadingDescription":
                for item in sec.get("sectionItems", []):
                    heading = item.get("heading", "")
                    desc = item.get("description", "")
                    list_items = item.get("listItems", [])
                    if heading:
                        output.append(f"### {heading}")
                    if desc:
                        output.append(f"{clean_html(desc)}\n")
                    if list_items:
                        output.append("#### Deliverables & Highlights:")
                        for li in list_items:
                            output.append(f"- {clean_html(str(li))}")
                        output.append("")
            elif sec_type == "screenshotDetails":
                header = sec.get("header", {})
                if header:
                    h_heading = header.get("heading", "")
                    h_desc = header.get("description", "")
                    if h_heading:
                        output.append(f"### {h_heading}")
                    if h_desc:
                        output.append(f"{clean_html(h_desc)}\n")

    with open(os.path.join(KB_DIR, "case_studies_portfolio.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(output))
    print("Created case_studies_portfolio.md")

def build_expanded_faqs():
    content = """# 100xElevate Frequently Asked Questions (FAQ)

## Shopify & Platform FAQ

**Q: Why migrate to Shopify Plus from Magento, WooCommerce, or BigCommerce?**
A: Shopify Plus eliminates infrastructure maintenance, security patch updates, and server scaling bottlenecks. It offers enterprise features like Checkout Customization, multi-currency local storefronts, B2B wholesale capabilities, automated Launchpad events, and higher API rate limits for seamless ERP/CRM integrations.

**Q: How does 100xElevate optimize Shopify store speed and Core Web Vitals?**
A: We audit Liquid code, eliminate bloated or duplicate third-party apps, optimize image assets to WebP/AVIF formats, implement lazy loading, streamline JavaScript execution, and target 100/100 Lighthouse scores for fast, high-converting browsing experiences.

**Q: Can 100xElevate build custom Shopify Apps or custom checkout extensions?**
A: Yes! We develop custom public and private Shopify Apps using Node.js/Python FastAPI and Remix/Next.js, as well as Shopify Functions and Checkout UI Extensions for custom discount rules, product bundles, and upsells.

## Generative Engine Optimization (GEO) & Search FAQ

**Q: What is Generative Engine Optimization (GEO)?**
A: GEO is the practice of optimizing digital content and brand positioning for AI answer engines such as ChatGPT, Perplexity, Claude, Gemini, and SearchGPT. Unlike traditional SEO which focuses on SERP ranking links, GEO ensures your brand is cited, quoted, and recommended when users ask LLMs for product recommendations or solutions.

**Q: What is Programmatic SEO?**
A: Programmatic SEO involves dynamically generating thousands of high-quality, targeted landing pages for specific local markets, product categories, or search intents using structured database templates, automated schema markup, and Next.js static generation.

## Email Marketing & Retention FAQ

**Q: What email marketing services do you provide?**
A: We specialize in Klaviyo email and SMS marketing. We design custom responsive email templates, build high-converting popups, and architect automated flows including Welcome series, Abandoned Cart recovery, Post-Purchase cross-sells, Win-back campaigns, and VIP customer reward flows.

**Q: What results can we expect from email marketing optimization?**
A: Clients like Blue Ruby saw a 49% increase in overall sales within 4 months, driven by record-high Klaviyo email marketing revenue and flow performance.

## Engagement & Consultation FAQ

**Q: How fast can a standard Shopify store build or migration be completed?**
A: Standard builds and migrations typically take 2 to 4 weeks depending on database complexity, custom layout requirements, and third-party integrations.

**Q: How do we get started with 100xElevate?**
A: You can request a free website/CRO audit, schedule a strategy consultation using our online booking tool, or contact support@100xelevate.com.
"""
    with open(os.path.join(KB_DIR, "services_faq.md"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated services_faq.md")

def build_expanded_policies():
    content = """# 100xElevate Company Policies, Legal Information & SLA

## About 100xElevate
100xElevate is a premier digital growth agency specializing in Search Engine Optimization (SEO), Generative Engine Optimization (GEO), Content Strategy, Web Engineering, Shopify Plus development, and Programmatic SEO solutions for fast-growing technology companies and enterprise eCommerce brands.

## Terms of Service
- **Service Scope**: All services rendered are governed by individual client Statements of Work (SOW) or master service agreements.
- **Client Access & Responsibilities**: Clients provide required permissions for Shopify Admin, Google Search Console, DNS hosting, and marketing tools necessary for performance delivery.
- **Payment & Invoicing**: Standard retainer and project invoices are issued monthly or milestone-based, due within 15 calendar days of receipt.

## Privacy Policy & Data Security
- **Data Protection**: 100xElevate respects client confidentiality and data privacy. We do not sell, trade, or share client or visitor data.
- **Analytics & Telemetry**: Minimal anonymous usage analytics are captured on our digital properties solely for system performance optimization.
- **Data Retention**: Client communications and work logs are stored securely for the duration of active engagements plus 24 months for audit compliance.

## Support & Service Level Agreement (SLA)
- **Support Hours**: Monday through Friday, 9:00 AM – 6:00 PM EST.
- **Response Time SLA**: High-priority support requests receive an initial response within 4 business hours. General support inquiries are handled within 24 business hours.
- **Support Channels**: Contact support via email at support@100xelevate.com or through our online support chat widget.
"""
    with open(os.path.join(KB_DIR, "website_policies.md"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated website_policies.md")

if __name__ == "__main__":
    os.makedirs(KB_DIR, exist_ok=True)
    build_company_overview()
    build_services_detailed()
    build_case_studies()
    build_expanded_faqs()
    build_expanded_policies()
    print("Knowledge base successfully built!")
