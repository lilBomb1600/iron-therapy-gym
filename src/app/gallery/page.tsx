import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = { title: "Gallery | Iron Therapy Gym" };

export default function GalleryPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <span className="font-condensed text-sm uppercase tracking-[0.3em] text-ember-light">Inside The Gym</span>
        <h1 className="font-display mt-3 text-5xl tracking-wide text-paper sm:text-6xl">Gallery</h1>
        <p className="mt-4 max-w-lg text-balance text-paper-dim">
          Real sessions, real members, real gym fam — day or night.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-1 sm:grid-cols-3">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`relative aspect-square overflow-hidden bg-steel ${img.featured ? "col-span-2 row-span-2 sm:col-span-1" : ""}`}
            >
              <SmartImage src={img.src} alt={img.alt} ready={img.ready} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
