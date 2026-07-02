const fallbackSiteUrl = "https://teya.mohyi.com";
const fallbackWhatsappNumber = "33612345678";
const fallbackInstagramUrl = "https://www.instagram.com/teyabeauty";
const fallbackFacebookUrl = "https://www.facebook.com/teyabeauty";

const normalizePhoneNumber = (input: string) => input.replace(/\D/g, "");

const whatsappNumber = normalizePhoneNumber(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackWhatsappNumber
);

export const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
export const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? fallbackInstagramUrl;
export const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ?? fallbackFacebookUrl;
export const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "06 12 34 56 78";
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@teyabeauty.fr";
export const contactAddressLine1 =
  process.env.NEXT_PUBLIC_CONTACT_ADDRESS_LINE1 ?? "12 rue des Oliviers";
export const contactAddressLine2 =
  process.env.NEXT_PUBLIC_CONTACT_ADDRESS_LINE2 ?? "34000 Montpellier";

const whatsappMessage = encodeURIComponent(
  "Bonjour TEYA Beauty, je souhaite obtenir des informations et prendre contact."
);

export const contactLinks = {
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
  telHref: `tel:${normalizePhoneNumber(contactPhone)}`,
  mailtoHref: `mailto:${contactEmail}`,
  instagramHref: instagramUrl,
  facebookHref: facebookUrl,
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${contactAddressLine1}, ${contactAddressLine2}`
  )}`,
};

export const siteCopy = {
  name: "TEYA Beauty",
  title: "TEYA Beauty | Manucure & nail art à Montpellier",
  shortTitle: "TEYA Beauty",
  description:
    "TEYA Beauty sublime vos ongles avec une manucure élégante, un nail art raffiné et un univers chaleureux pensé comme une parenthèse premium à Montpellier.",
  announcement: "Bienvenue chez TEYA Beauty - l'art de sublimer vos ongles.",
  heroTitle: "L’art de sublimer vos ongles.",
  heroSubtitle: "Manucure & nail art",
  socialHandle: "@teyabeauty",
};

export const navigationItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Prestations", href: "#prestations" },
  { label: "À propos", href: "#apropos" },
] as const;

export const serviceCards = [
  {
    title: "Manucure soignée",
    description:
      "Des mains douces, des ongles parfaits, un soin tout en élégance.",
    icon: "sun",
  },
  {
    title: "Nail art créatif",
    description:
      "Des designs uniques et raffinés, adaptés à votre style.",
    icon: "flower",
  },
  {
    title: "Tenue & qualité",
    description:
      "Des produits professionnels pour une tenue longue durée.",
    icon: "sparkle",
  },
] as const;

export const aboutCopy = {
  eyebrow: "À propos",
  title: "TEYA Beauty",
  body: [
    "Chez TEYA Beauty, chaque détail compte.",
    "Nous vous accueillons dans un espace chaleureux et raffiné, dédié à la beauté de vos mains et à votre bien-être.",
  ],
};

export const footerLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Prestations", href: "#prestations" },
  { label: "À propos", href: "#apropos" },
] as const;
