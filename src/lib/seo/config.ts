/**
 * ADAPT ME: the only kit file you edit per project.
 *
 * Map the project's data files (src/data/business.ts, faq.ts, gallery.ts) onto the kit. Copy facts from those files;
 * never type a new fact here. If the data file doesn't have it, leave the field out and ask the owner.
 */
import { business } from "@/data/business";
import { galleryImages } from "@/data/gallery";
import type { BusinessFacts, DayOfWeek, Locale, OgImage, PageEntry, ServiceFact } from "./types";

/**
 * Origin used when NEXT_PUBLIC_SITE_URL isn't set: the *.vercel.app URL while it's a preview.
 * business.ts has no siteUrl, so this is the live preview host.
 * On launch set NEXT_PUBLIC_SITE_URL=https://www.client.com in Vercel instead of editing this.
 */
export const FALLBACK_URL: string = "https://iron-therapy-gym.vercel.app";

/** Languages that have their OWN URL. The site is English only (Spanish coaching is a fact, not a page). */
export const LOCALES: Locale[] = ["en"];
export const DEFAULT_LOCALE: Locale = "en";

/** 1200x630 JPG in public/: a crop of the gym's own coaching-session photo from data/gallery.ts. */
const ogPhoto = galleryImages.find((g) => g.id === "coaching-session");
export const OG_IMAGE: OgImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: ogPhoto?.alt ?? business.name,
};

// "Concord, CA 94520" -> locality, region, postal code (all from business.address.line2).
const [locality, regionZip] = business.address.line2.split(", ");
const [region, postalCode] = regionZip.split(" ");

const ALL_DAYS: DayOfWeek[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// business.hours is "Open 24 Hours, 7 Days a Week": Google's notation for 24 hours is 00:00-23:59 on every day.
const OPEN_24_7 = /24 Hours, 7 Days/i.test(business.hours);

/** "Accepts credit cards", "Accepts Zelle", "Accepts Venmo" in business.amenities -> "credit cards, Zelle, Venmo". */
const paymentAccepted = business.amenities
  .filter((a) => a.startsWith("Accepts "))
  .map((a) => a.replace("Accepts ", ""))
  .join(", ");

export const facts: BusinessFacts = {
  name: business.name,
  type: "ExerciseGym",
  description: business.description,
  telephone: business.phoneHref.replace(/^tel:/, ""),
  // Storefront: the full public address from business.ts.
  address: { street: business.address.line1, locality, region, postalCode },
  serviceArea: [`${locality}, ${region}`],
  image: [OG_IMAGE.url, ...galleryImages.filter((g) => g.ready).map((g) => g.src)],
  hasMap: business.mapsHref,
  sameAs: [business.instagramHref],
  hours: OPEN_24_7 ? [{ days: ALL_DAYS, opens: "00:00", closes: "23:59" }] : undefined,
  languages: [...business.languages],
  founder: business.owner.name,
  paymentAccepted: paymentAccepted || undefined,
};

/** Real services, named the way the gym names them (business.services). One Service node each in the JSON-LD. */
export const services: ServiceFact[] = business.services.map((name) => ({ name }));

/** Every indexable URL. Leave out thank-you, invoice, handoff and preview-only pages. */
export const pages: PageEntry[] = [{ path: "/" }, { path: "/about" }, { path: "/gallery" }, { path: "/contact" }];
