import { MapPin, Clock, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { BarbellIcon } from "@/components/ui/GymIcons";

export function HoursLocation() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-steel py-20 sm:py-28">
      <BarbellIcon className="pointer-events-none absolute -right-8 -bottom-6 w-64 rotate-6 text-paper/[0.05] sm:w-80" />
      <Container className="relative grid gap-10 sm:grid-cols-3">
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
