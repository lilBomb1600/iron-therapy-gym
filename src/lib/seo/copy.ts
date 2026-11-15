/**
 * Per-page titles and meta descriptions (LAUNCH-STANDARD.md section A): 50-60 character titles, 120-160 character
 * descriptions, real facts only (all from src/data/business.ts and gallery.ts).
 * The name already says the trade, so titles go brand first. pageMetadata() adds " | Iron Therapy Gym" when it's missing.
 */
export const HOME_DESCRIPTION =
  "24/7 keycard strength and conditioning gym in Concord, CA, open since 2010: personal and small group training, boot camp, nutrition plans. Call (925) 822-3488.";

export const pageCopy = {
  home: {
    title: "Iron Therapy Gym | 24/7 Strength Training in Concord, CA",
    description: HOME_DESCRIPTION,
    path: "/",
  },
  about: {
    title: "Meet Bob Soula, Head Coach at Iron Therapy Gym in Concord",
    description:
      "Bob Soula has trained people since 2005 and opened Iron Therapy Gym in Concord, CA in 2010: strength training, powerlifting, weight loss, mobility and rehab.",
    path: "/about",
  },
  gallery: {
    title: "Gallery: Inside Iron Therapy Gym, a 24/7 Gym in Concord, CA",
    description:
      "Photos from inside Iron Therapy Gym at 1280 Diamond Way in Concord, CA: the training floor, squat racks and dumbbells, coached sessions and the team.",
    path: "/gallery",
  },
  contact: {
    title: "Join Iron Therapy Gym: Hours, Location & FAQ in Concord, CA",
    description:
      "Join Iron Therapy Gym at 1280 Diamond Way, Ste B in Concord, CA. Open 24/7 with keycard access. Call (925) 822-3488 for 1-on-1 or small group training.",
    path: "/contact",
  },
};
