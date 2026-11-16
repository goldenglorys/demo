// Single source of truth for outbound links. Change a link here and every
// button on the site updates.
// The one place to change the community link; every button and the newsletter/waitlist fallbacks use it.
const COMMUNITY = "https://forms.cloud.microsoft/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAELtbXFUMk5EN05QODlKUlFUUExQSVNRUlVOQjJVUi4u&origin=lprLink&route=shorturl";

export const LINKS = {
  community: COMMUNITY,
  consultation: "https://selar.com/9606812642",
  africanRecipes: "https://selar.com/71175r894e",
  youtube: "https://youtube.com/@TheWell-beingMatters",
  instagram: "https://instagram.com/nutritionwithdrmary",
  // TODO(client): paste the real Constant Contact signup link, either here or
  // via the NEXT_PUBLIC_CONSTANT_CONTACT_URL env var in Vercel.
  newsletter: process.env.NEXT_PUBLIC_CONSTANT_CONTACT_URL || COMMUNITY,
  // TODO(client): course waitlist link (course launches in January).
  courseWaitlist: process.env.NEXT_PUBLIC_COURSE_WAITLIST_URL || COMMUNITY,
  // TODO(client): purchase link for "Nourish & Thrive™ Recipe Collection".
  recipeCollection: process.env.NEXT_PUBLIC_RECIPE_COLLECTION_URL || "https://selar.com/71175r894e",
} as const;

// Public Google Sheet that drives the podcast page.
export const PODCAST_SHEET = {
  id: process.env.PODCAST_SHEET_ID || "1dMlYspzqv_B-JyLQrD78BxYbOtPdiLTzph_gEBMDRlk",
  gid: process.env.PODCAST_SHEET_GID || "0",
};
