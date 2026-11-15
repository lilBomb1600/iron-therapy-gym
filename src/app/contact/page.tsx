import { pageMetadata } from "@/lib/seo/metadata";
import { pageCopy } from "@/lib/seo/copy";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { JsonLd } from "@/components/JsonLd";
import { faqNode, jsonLdGraph } from "@/lib/seo/jsonld";
import { faqs } from "@/data/faq";

export const metadata = pageMetadata(pageCopy.contact);

export default function ContactPage() {
  return (
    <>
      {/* The same Q&A is visible on this page (FAQSection inside ContactPageContent). */}
      <JsonLd data={jsonLdGraph(faqNode(faqs.map((f) => ({ question: f.q, answer: f.a })), "/contact"))} />
      <ContactPageContent />
    </>
  );
}
