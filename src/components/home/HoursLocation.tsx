import { MapPin, Clock, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";

export function HoursLocation() {
  return (
    <section className="border-t border-line bg-steel py-20 sm:py-28">
      <Container className="grid gap-10 sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Clock className="h-7 w-7 text-ember-light" />
          <h3 className="font-display text-2xl tracking-wide text-paper">Hours</h3>
          <p className="font-condensed text-lg text-paper-dim">{business.hours}</p>
        </div>
        <div className="flex flex-col gap-3">
          <MapPin className="h-7 w-7 text-ember-light" />
          <h3 className="font-display text-2xl tracking-wide text-paper">Location</h3>
          <a href={business.mapsHref} target="_blank" rel="noreferrer" className="font-condensed text-lg text-paper-dim hover:text-paper">
            {business.address.line1}
            <br />
            {business.address.line2}
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <Globe className="h-7 w-7 text-ember-light" />
          <h3 className="font-display text-2xl tracking-wide text-paper">Coaching In</h3>
          <p className="font-condensed text-lg text-paper-dim">{business.languages.join(" & ")}</p>
        </div>
      </Container>
    </section>
  );
}
