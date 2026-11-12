import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Fruits by Fareeha",
  tagline: "Chocolate covered strawberries, dates and fruit gift trays.",
  category: "Chocolate covered strawberries",
  schemaType: "FoodEstablishment",
  area: "Brampton, ON",
  siteUrl: "https://fruits-by-fareeha.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#6a5058" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Made to order",
    headline: "Chocolate covered fruit, ready to gift",
    subhead: "Strawberries, dates and custom fruit trays. Send a message to place your order.",
    images: [
      { src: "/images/post-3.jpg", alt: "Custom chocolate covered strawberry tray by Fruits by Fareeha" },
      { src: "/images/post-1.jpg", alt: "Assorted chocolate covered strawberries and dates" },
      { src: "/images/post-8.jpg", alt: "Boxes of chocolate covered fruit" },
    ],
    primaryCta: { label: "Order by Instagram DM", href: "https://ig.me/m/fruitsbyfareeha" },
    secondaryCta: { label: "See the trays", href: "#gallery" },
  },

  highlights: ["Certified food handler", "Chocolate covered strawberries", "Custom fruit trays", "Orders by Instagram DM"],

  about: {
    title: "Welcome to Fruits by Fareeha",
    body: [
      "Fruits by Fareeha makes chocolate covered strawberries, chocolate covered dates and fruit gift trays. Fareeha is a certified food handler, and orders are placed by Instagram DM.",
      "Custom trays are available for celebrations, including mehndi and themed orders. Trays are also sold through Gift Owls, with delivery across the GTA on that marketplace.",
    ],
    image: { src: "/images/post-1.jpg", alt: "Assorted chocolate covered strawberries and dates" },
  },

  menu: {
    label: "Menu",
    title: "What we make",
    variant: "list",
    showPrices: false,
    groups: [
      {
        title: "Chocolate fruit",
        items: [
          { name: "Chocolate covered strawberries" },
          { name: "Chocolate covered dates" },
          { name: "Strawberry bouquets" },
          { name: "Mehndi and event dessert trays" },
          { name: "Custom themed orders" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent trays",
    items: [
      { src: "/images/post-3.jpg", alt: "Custom chocolate covered strawberry tray by Fruits by Fareeha", caption: "A custom tray" },
      { src: "/images/post-1.jpg", alt: "Assorted chocolate covered strawberries and dates", caption: "Strawberries and dates" },
      { src: "/images/post-2.jpg", alt: "A chocolate covered strawberry with a white drizzle", caption: "Chocolate covered strawberry" },
      { src: "/images/post-8.jpg", alt: "Boxes of chocolate covered fruit", caption: "Gift boxes" },
      { src: "/images/post-5.jpg", alt: "Letter strawberries that read Happy 18th to us", caption: "A letter tray" },
      { src: "/images/post-6.jpg", alt: "Pink chocolate covered strawberry tray", caption: "A pink tray" },
      { src: "/images/post-7.jpg", alt: "Eid Mubarak chocolate fruit tray", caption: "An Eid tray" },
      { src: "/images/post-4.jpg", alt: "Green and yellow themed chocolate fruit tray", caption: "A themed tray" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "fruitsbyfareeha",
    embeds: ["https://www.instagram.com/p/DeNvr-2Ba4_/", "https://www.instagram.com/p/DbpLVvUjR0P/"],
  },

  order: {
    label: "How to order",
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. You can also find trays on Gift Owls.",
    dmMessage: "Hi Fruits by Fareeha! I would like to order.\nOccasion:\nDate needed:\nWhat you would like:\nQuantity:",
    headerCtaLabel: "DM to order",
    links: [{ label: "Shop on Gift Owls", href: "https://giftowls.ca/collections/fruits-by-fareeha" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram with the date, occasion and what you would like. Trays are also sold through Gift Owls." },
    { q: "Where are you based?", a: "Fruits by Fareeha is based in Brampton, Ontario. Gift Owls offers delivery across the GTA." },
  ],

  contact: {
    title: "Contact",
    area: "Brampton, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/fruitsbyfareeha/" }],
  },

  seo: {
    title: "Fruits by Fareeha | Chocolate covered strawberries in Brampton",
    description: "Chocolate covered strawberries, dates and fruit gift trays in Brampton. Order by Instagram DM, or shop trays on Gift Owls.",
    keywords: ["chocolate covered strawberries Brampton", "fruit trays GTA", "Fruits by Fareeha"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
