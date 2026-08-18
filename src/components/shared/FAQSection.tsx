import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/data/faq";

export function FAQSection() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container className="max-w-3xl">
        <h2 className="font-display text-4xl tracking-wide text-paper sm:text-5xl">Questions</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-condensed text-lg text-paper marker:content-none">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-ember-light transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
