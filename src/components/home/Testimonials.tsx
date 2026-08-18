import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { reviews, averageRating, reviewCount } from "@/data/reviews";

export function Testimonials() {
  const shown = [...reviews].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)).slice(0, 6);

  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-paper sm:text-5xl">The Gym Fam</h2>
            <div className="mt-3 flex items-center gap-2">
              <StarRating rating={averageRating} size={16} />
              <span className="font-condensed text-sm text-paper-dim">
                {averageRating.toFixed(1)} · {reviewCount} Yelp reviews
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r) => (
            <div key={r.name} className="flex flex-col gap-3 bg-ink p-6">
              <StarRating rating={r.rating} />
              <p className="text-sm leading-relaxed text-paper-dim">&ldquo;{r.text}&rdquo;</p>
              <p className="font-condensed mt-auto text-xs uppercase tracking-wide text-paper/50">
                {r.name} · {r.location}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
