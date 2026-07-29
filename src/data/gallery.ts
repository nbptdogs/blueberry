/**
 * GALLERY images.
 *
 * To add a real photo:
 *   1. Put the image file in the `public/gallery/` folder.
 *   2. Add an entry below with its filename, a short caption, and descriptive
 *      alt text (what's in the photo, for screen-reader users).
 *   3. Leave `src` empty ("") to show a styled placeholder tile instead.
 *
 * `category` must be one of the keys in `galleryCategories` below.
 */
export const galleryCategories = {
  berries: "Berries",
  season: "Picking Season",
  landscapes: "Landscapes",
  history: "Farm History",
  family: "Family",
  community: "Community",
} as const;

export type GalleryCategory = keyof typeof galleryCategories;

export interface GalleryItem {
  src: string; // e.g. "/gallery/ripe-berries.jpg" — or "" for a placeholder
  alt: string;
  caption: string;
  category: GalleryCategory;
  ratio?: string; // "4 / 3" (default), "1 / 1", "3 / 4", "16 / 9"
}

/** Placeholder set — replace `src` values as real photos arrive. */
export const galleryItems: GalleryItem[] = [
  { src: "/gallery/close.JPG", alt: "Close-up of ripe blueberries on the bush", caption: "Ripe and ready — deep blue with a silvery bloom.", category: "berries", ratio: "4 / 3" },
  { src: "/gallery/sign.jpeg", alt: "You've been looking for a sign.", caption: "You've been looking for a sign..", category: "season", ratio: "3 / 4" },
  { src: "/gallery/Nat.jpeg", alt: "Look at that view!", caption: "That could be you", category: "landscapes", ratio: "16 / 9" },
  { src: "/gallery/vardo.JPG", alt: "Vardo", caption: "Head towards the Vardo", category: "landscapes", ratio: "4 / 3" },
  { src: "/gallery/blubs.jpeg", alt: "Freshly picked blueberries", caption: "A morning's pick, ready to weigh out.", category: "berries", ratio: "1 / 1" },
  { src: "/gallery/fam.jpeg", alt: "Family Affair", caption: "A summer tradition, passed down.", category: "family", ratio: "4 / 3" },
  { src: "/gallery/shirt.jpeg", alt: "Shop! Shop! Shop!", caption: "Blueberry picking not for you? Come shop!", category: "history", ratio: "4 / 3" },
  { src: "/gallery/model.jpeg", alt: "Pic and Pose", caption: "Come for the pictures, stay for the blueberries.", category: "family", ratio: "3 / 4" },
  { src: "/gallery/sunset.jpeg", alt: "You will still dream about this!", caption: "Dreamy", category: "community", ratio: "4 / 3" },
  { src: "/gallery/yellow.jpeg", alt: "Shirt", caption: "Make your friends jealous with your merch!", category: "landscapes", ratio: "16 / 9" },
  { src: "/gallery/bucket.jpeg", alt: "Blueberries in a wooden crate", caption: "Come pick your own!.", category: "berries", ratio: "1 / 1" },
  { src: "/gallery/rename.PNG", alt: "confused", caption: "Why haven't you come pick yet?", category: "season", ratio: "4 / 3" },
];
