import hero from "../_assets/hero.jpg";
import about from "../_assets/about.jpg";
import speaking from "../_assets/speaking.jpg";
import ventureTech from "../_assets/venture-tech.jpg";
import ventureEnergy from "../_assets/venture-energy.jpg";
import ventureLogistics from "../_assets/venture-logistics.jpg";
import ventureRealestate from "../_assets/venture-realestate.jpg";
import ventureFinance from "../_assets/venture-finance.jpg";

export const IMAGES = {
  hero,
  about,
  speaking,
  "venture-tech": ventureTech,
  "venture-energy": ventureEnergy,
  "venture-logistics": ventureLogistics,
  "venture-realestate": ventureRealestate,
  "venture-finance": ventureFinance,
} as const;

export type ImageKey = keyof typeof IMAGES;
