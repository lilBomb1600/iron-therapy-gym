import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

const stats = [...business.owner.stats, { value: "24/7", label: "Keycard Access" }];

export function ScoreboardStats() {
  return (
    <section className="border-y border-line bg-steel">
      <Container className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-4 sm:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center gap-1 px-4 py-8 text-center">
            <span className="font-display text-4xl tracking-wide text-ember-light sm:text-5xl">{s.value}</span>
            <span className="font-condensed text-xs uppercase tracking-[0.2em] text-paper-dim">{s.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
