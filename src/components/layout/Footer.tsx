import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-10">
      <Container className="flex flex-col items-center gap-3 text-center">
        <p className="font-display text-xl tracking-wide text-paper">
          IRON<span className="text-ember">THERAPY</span>
        </p>
        <p className="font-condensed text-sm text-paper-dim">{business.address.full}</p>
        <p className="font-condensed text-sm uppercase tracking-wide text-ember-light">{business.hours}</p>
        <a
          href={business.instagramHref}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center gap-1.5 font-condensed text-sm text-paper-dim transition-colors hover:text-ember-light"
        >
          <InstagramIcon className="h-4 w-4" />
          {business.instagram}
        </a>
        <p className="mt-4 text-xs text-paper-dim/50">
          © {new Date().getFullYear()} {business.name}. Est. {business.established}.
        </p>
      </Container>
    </footer>
  );
}
