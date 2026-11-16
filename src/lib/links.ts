// Single source of truth for outbound links. Change a link here and every
// button on the site updates.
export const LINKS = {
  community: "https://bit.ly/CoachwithDrMary",
  consultation: "https://selar.com/9606812642",
  africanRecipes: "https://selar.com/71175r894e",
  youtube: "https://youtube.com/@TheWell-beingMatters",
  personalInstagram: "https://instagram.com/nutritionwithdrmary",
  // TODO(client): paste the real Constant Contact signup link, either here or
  // via the NEXT_PUBLIC_CONSTANT_CONTACT_URL env var in Vercel.
  newsletter: process.env.NEXT_PUBLIC_CONSTANT_CONTACT_URL || "https://bit.ly/CoachwithDrMary",
  // TODO(client): course waitlist link (course launches in January).
  courseWaitlist: process.env.NEXT_PUBLIC_COURSE_WAITLIST_URL || "https://bit.ly/CoachwithDrMary",
  // TODO(client): purchase link for "Nourish & Thrive™ Recipe Collection".
  recipeCollection: process.env.NEXT_PUBLIC_RECIPE_COLLECTION_URL || "https://selar.com/71175r894e",
} as const;

// Public Google Sheet that drives the podcast page.
export const PODCAST_SHEET = {
  id: process.env.PODCAST_SHEET_ID || "1dMlYspzqv_B-JyLQrD78BxYbOtPdiLTzph_gEBMDRlk",
  gid: process.env.PODCAST_SHEET_GID || "0",
};
