export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  featured?: boolean;
  /** True once a real photo file has been dropped into /public/images/gallery */
  ready: boolean;
};

// Real gym photos. All get the charcoal/ember duotone treatment (see
// DuotoneFilter.tsx), which also helps unify the mix of source qualities.
export const galleryImages: GalleryImage[] = [
  {
    id: "group-photo",
    src: "/images/gallery/group-photo.jpg",
    alt: "The Iron Therapy Gym team, together after class",
    featured: true,
    ready: true,
  },
  {
    id: "coaching-session",
    src: "/images/gallery/coaching-session.jpg",
    alt: "A member squatting with coaching support on the floor at Iron Therapy Gym",
    featured: true,
    ready: true,
  },
  {
    id: "group-mirror-selfie",
    src: "/images/gallery/group-mirror-selfie.jpg",
    alt: "Members and a coach at Iron Therapy Gym",
    ready: true,
  },
  {
    id: "training-floor",
    src: "/images/gallery/training-floor.jpg",
    alt: "The training floor at Iron Therapy Gym — racks, dumbbells, and a 'Train Hard' sign",
    ready: true,
  },
];
