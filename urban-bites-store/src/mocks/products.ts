import type { Product } from "../types";

const img = (_query: string) => "";

export const products: Product[] = [
  // =========================
  // DRY FRUITS
  // =========================

  {
    id: "dry-dates",
    name: "Dry Dates",
    category: "Dry Fruits",
    price: 160,
    originalPrice: 160,
    weight: "100 g",
    image: img("dry dates"),
    description:
      "Premium quality dry dates with a naturally sweet taste and chewy texture. A wholesome snack for everyday enjoyment.",
    bestseller: true,
    tags: ["Natural", "Energy Snack", "Premium"],
  },

  {
    id: "california-pistachios",
    name: "California Pistachios",
    category: "Dry Fruits",
    price: 180,
    originalPrice: 180,
    weight: "100 g",
    image: img("California pistachios"),
    description:
      "Premium California pistachios selected for their rich flavour and satisfying crunch.",
    bestseller: true,
    tags: ["California", "Premium", "Crunchy"],
  },

  {
    id: "chilly-cashews",
    name: "Chilly Cashews",
    category: "Dry Fruits",
    price: 160,
    originalPrice: 160,
    weight: "100 g",
    image: img("chilli cashews"),
    description:
      "Crunchy premium cashews coated with a delicious spicy chilli seasoning.",
    bestseller: true,
    tags: ["Spicy", "Crunchy", "Snack"],
  },

  {
    id: "salted-cashews",
    name: "Salted Cashews",
    category: "Dry Fruits",
    price: 160,
    originalPrice: 160,
    weight: "100 g",
    image: img("salted cashews"),
    description:
      "Premium whole cashews lightly salted to bring out their natural buttery flavour.",
    bestseller: true,
    tags: ["Salted", "Premium", "Crunchy"],
  },

  {
    id: "jumbo-cashews",
    name: "Jumbo Cashews",
    category: "Dry Fruits",
    price: 140,
    originalPrice: 140,
    weight: "100 g",
    image: img("jumbo cashews"),
    description:
      "Large, crunchy jumbo cashews with a rich buttery taste.",
    bestseller: true,
    tags: ["Jumbo", "Premium", "Crunchy"],
  },

  {
    id: "california-almonds",
    name: "California Almonds",
    category: "Dry Fruits",
    price: 140,
    originalPrice: 140,
    weight: "100 g",
    image: img("California almonds"),
    description:
      "Premium California almonds with a crisp bite and naturally rich nutty flavour.",
    bestseller: true,
    tags: ["California", "Premium", "Protein"],
  },

  {
    id: "dried-plum",
    name: "Dried Plum",
    category: "Dry Fruits",
    price: 80,
    originalPrice: 80,
    weight: "100 g",
    image: img("dried plum"),
    description:
      "Naturally sweet and chewy dried plums, perfect for a convenient everyday snack.",
    bestseller: false,
    tags: ["Fruity", "Naturally Sweet", "Snack"],
  },

  {
    id: "black-raisins",
    name: "Black Raisins",
    category: "Dry Fruits",
    price: 80,
    originalPrice: 80,
    weight: "100 g",
    image: img("black raisins"),
    description:
      "Naturally sweet black raisins with a soft texture and rich fruity flavour.",
    bestseller: false,
    tags: ["Naturally Sweet", "Fruity", "Snack"],
  },

  {
    id: "walnut",
    name: "Walnut",
    category: "Dry Fruits",
    price: 180,
    originalPrice: 180,
    weight: "100 g",
    image: img("walnuts"),
    description:
      "Fresh walnut halves with a delicate crunch and earthy flavour.",
    bestseller: true,
    tags: ["Premium", "Omega Rich", "Crunchy"],
  },

  {
    id: "walnut-premium",
    name: "Walnut Premium",
    category: "Dry Fruits",
    price: 230,
    originalPrice: 230,
    weight: "100 g",
    image: img("premium walnuts"),
    description:
      "Premium selected walnuts with excellent texture, flavour and quality.",
    bestseller: true,
    tags: ["Premium", "Selected", "Omega Rich"],
  },

  {
    id: "salted-peanuts",
    name: "Salted Peanuts",
    category: "Dry Fruits",
    price: 100,
    originalPrice: 100,
    weight: "100 g",
    image: img("salted peanuts"),
    description:
      "Crunchy roasted peanuts lightly seasoned with salt for a classic snack.",
    bestseller: false,
    tags: ["Salted", "Crunchy", "Snack"],
  },

  // =========================
  // SEEDS
  // =========================

  {
    id: "pistachio-kernels",
    name: "Pistachio Kernels",
    category: "Seeds",
    price: 180,
    originalPrice: 180,
    weight: "100 g",
    image: img("pistachio kernels"),
    description:
      "Premium shelled pistachio kernels with a rich nutty taste.",
    bestseller: false,
    tags: ["Premium", "Kernels", "Crunchy"],
  },

  {
    id: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    category: "Seeds",
    price: 120,
    originalPrice: 120,
    weight: "100 g",
    image: img("pumpkin seeds"),
    description:
      "Nutty pumpkin seeds with a satisfying crunch, perfect for snacks, salads and breakfast bowls.",
    bestseller: true,
    tags: ["Protein", "Crunchy", "Healthy"],
  },

  {
    id: "sunflower-seeds",
    name: "Sunflower Seeds",
    category: "Seeds",
    price: 120,
    originalPrice: 120,
    weight: "100 g",
    image: img("sunflower seeds"),
    description:
      "Crunchy sunflower seeds with a mild nutty flavour.",
    bestseller: false,
    tags: ["Crunchy", "Healthy", "Snack"],
  },

  {
    id: "watermelon-seeds",
    name: "Watermelon Seeds",
    category: "Seeds",
    price: 120,
    originalPrice: 120,
    weight: "100 g",
    image: img("watermelon seeds"),
    description:
      "Premium watermelon seeds, perfect for snacking and adding to healthy recipes.",
    bestseller: false,
    tags: ["Healthy", "Protein", "Snack"],
  },

  {
    id: "flax-seeds",
    name: "Flax Seeds",
    category: "Seeds",
    price: 120,
    originalPrice: 120,
    weight: "100 g",
    image: img("flax seeds"),
    description:
      "Fresh earthy flax seeds suitable for smoothies, baking and everyday recipes.",
    bestseller: false,
    tags: ["Omega 3", "Fiber Rich", "Healthy"],
  },

  {
    id: "chia-seeds",
    name: "Chia Seeds",
    category: "Seeds",
    price: 120,
    originalPrice: 120,
    weight: "100 g",
    image: img("chia seeds"),
    description:
      "Versatile chia seeds that are perfect for smoothies, overnight oats, puddings and baking.",
    bestseller: true,
    tags: ["Fiber Rich", "Omega 3", "Vegan"],
  },

  // =========================
  // ADDITIONAL DRY FRUITS
  // =========================

  {
    id: "medjool-dates",
    name: "Medjool Dates",
    category: "Dry Fruits",
    price: 120,
    originalPrice: 120,
    weight: "100 g",
    image: img("medjool dates"),
    description:
      "Soft, naturally sweet Medjool dates with a rich caramel-like flavour.",
    bestseller: true,
    tags: ["Naturally Sweet", "Energy Snack", "Premium"],
  },

  {
    id: "dried-figs",
    name: "Dried Figs",
    category: "Dry Fruits",
    price: 120,
    originalPrice: 120,
    weight: "100 g",
    image: img("dried figs"),
    description:
      "Tender dried figs with naturally sweet flavour and satisfying texture.",
    bestseller: false,
    tags: ["Fiber Rich", "Naturally Sweet", "Premium"],
  },

  {
    id: "almonds",
    name: "Almonds",
    category: "Dry Fruits",
    price: 140,
    originalPrice: 140,
    weight: "100 g",
    image: img("almonds"),
    description:
      "Premium almonds with a crisp bite and naturally rich flavour.",
    bestseller: true,
    tags: ["Premium", "Protein", "Everyday Snack"],
  },

  {
    id: "cashews",
    name: "Cashews",
    category: "Dry Fruits",
    price: 140,
    originalPrice: 140,
    weight: "100 g",
    image: img("cashew nuts"),
    description:
      "Premium cashews with a creamy, buttery flavour and satisfying crunch.",
    bestseller: true,
    tags: ["Premium", "Crunchy", "Snack"],
  },

  {
    id: "walnuts",
    name: "Walnuts",
    category: "Dry Fruits",
    price: 180,
    originalPrice: 180,
    weight: "100 g",
    image: img("walnuts"),
    description:
      "Quality walnuts with an earthy flavour and delicate crunch.",
    bestseller: true,
    tags: ["Omega Rich", "Crunchy", "Premium"],
  },

  {
    id: "raisins",
    name: "Raisins",
    category: "Dry Fruits",
    price: 80,
    originalPrice: 80,
    weight: "100 g",
    image: img("raisins"),
    description:
      "Naturally sweet raisins with a soft and juicy texture.",
    bestseller: false,
    tags: ["Naturally Sweet", "Fruity", "Snack"],
  },

  {
    id: "mixed-dry-fruits",
    name: "Mixed Dry Fruits Combo",
    category: "Dry Fruits",
    price: 120,
    originalPrice: 120,
    weight: "100 g",
    image: img("mixed dry fruits"),
    description:
      "A delicious assortment of premium dry fruits packed together for everyday snacking and gifting.",
    bestseller: true,
    tags: ["Combo", "Giftable", "Premium"],
  },

  // =========================
  // DATES & PACKAGED PRODUCTS
  // =========================

  {
    id: "kimia-dates",
    name: "Royal Zaad Kimia Dates",
    category: "Dry Fruits",
    price: 30,
    originalPrice: 375,
    weight: "Pack",
    image: img("Kimia dates"),
    description:
      "Original and selected Iranian Kimia dates with a soft texture and naturally rich sweetness.",
    bestseller: true,
    tags: ["Iranian Dates", "Premium", "Naturally Sweet"],
  },

  // =========================
  // SPICES
  // =========================

  {
    id: "cinnamon-polished",
    name: "Cinnamon Polished",
    category: "Seeds",
    price: 110,
    originalPrice: 110,
    weight: "100 g",
    image: img("cinnamon sticks"),
    description:
      "Premium polished cinnamon with a warm aroma and distinctive flavour.",
    bestseller: false,
    tags: ["Spice", "Aromatic", "Kitchen Essential"],
  },

  {
    id: "cumin-seeds",
    name: "Cumin Seeds",
    category: "Seeds",
    price: 80,
    originalPrice: 80,
    weight: "100 g",
    image: img("cumin seeds"),
    description:
      "Aromatic cumin seeds suitable for tempering, curries and everyday cooking.",
    bestseller: false,
    tags: ["Spice", "Aromatic", "Kitchen Essential"],
  },

  {
    id: "star-anise",
    name: "Star Anise",
    category: "Seeds",
    price: 160,
    originalPrice: 160,
    weight: "100 g",
    image: img("star anise"),
    description:
      "Fragrant whole star anise with a distinctive sweet-spicy aroma.",
    bestseller: false,
    tags: ["Spice", "Aromatic", "Whole Spice"],
  },

  {
    id: "spice-box",
    name: "Spice Box",
    category: "Seeds",
    price: 499,
    originalPrice: 700,
    weight: "Box",
    image: img("spice box"),
    description:
      "A curated assortment of whole spices packed together for your everyday kitchen needs.",
    bestseller: true,
    tags: ["Spice Box", "Combo", "Giftable"],
  },

  // =========================
  // CHOCOLATES
  // =========================

  {
    id: "dark-chocolate-70",
    name: "Dark Chocolate Bar 70%",
    category: "Chocolate",
    price: 249,
    originalPrice: 299,
    weight: "100 g",
    image: img("dark chocolate"),
    description:
      "Smooth 70% dark chocolate with balanced cocoa intensity and a clean finish.",
    bestseller: true,
    tags: ["70% Cocoa", "Premium", "Chocolate"],
  },

  {
    id: "hazelnut-praline",
    name: "Hazelnut Praline Chocolate",
    category: "Chocolate",
    price: 329,
    originalPrice: 379,
    weight: "120 g",
    image: img("hazelnut chocolate"),
    description:
      "Silky chocolate layered with fragrant roasted hazelnut praline.",
    bestseller: true,
    tags: ["Praline", "Giftable", "Rich"],
  },

  {
    id: "almond-clusters",
    name: "Almond Chocolate Clusters",
    category: "Chocolate",
    price: 299,
    originalPrice: 349,
    weight: "150 g",
    image: img("almond chocolate clusters"),
    description:
      "Roasted almond pieces folded through creamy chocolate for an irresistible crunch.",
    bestseller: false,
    tags: ["Crunchy", "Almond", "Snack"],
  },

  {
    id: "white-cranberry",
    name: "White Chocolate with Cranberries",
    category: "Chocolate",
    price: 319,
    originalPrice: 369,
    weight: "120 g",
    image: img("white chocolate cranberry"),
    description:
      "Creamy white chocolate with tart cranberries for a sweet and fruity balance.",
    bestseller: false,
    tags: ["Fruity", "Creamy", "Giftable"],
  },

  {
    id: "truffle-box",
    name: "Chocolate Truffle Box (12 pieces)",
    category: "Chocolate",
    price: 699,
    originalPrice: 799,
    weight: "180 g",
    image: img("chocolate truffles"),
    description:
      "A curated box of twelve indulgent chocolate truffles, perfect for gifting and celebrations.",
    bestseller: true,
    tags: ["12 Pieces", "Gift Box", "Premium"],
  },

  {
    id: "salted-caramel",
    name: "Salted Caramel Chocolate",
    category: "Chocolate",
    price: 349,
    originalPrice: 399,
    weight: "120 g",
    image: img("salted caramel chocolate"),
    description:
      "Velvety chocolate with buttery caramel notes and a delicate touch of sea salt.",
    bestseller: true,
    tags: ["Caramel", "Sea Salt", "Rich"],
  },
];

export const getProduct = (id: string) =>
  products.find((product) => product.id === id);