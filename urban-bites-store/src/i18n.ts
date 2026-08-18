import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        home: "Home",
        products: "Products",
        cart: "Cart",
        shopNow: "Shop Now",
        exploreDryFruits: "Explore Dry Fruits",
        premiumTitle: "Premium Dry Fruits, Chocolate & Seeds",
        premiumSub: "Thoughtfully selected, beautifully packed and delivered fresh to your doorstep.",
        bestsellers: "Bestsellers",
        whyChoose: "Why Choose Urban Bites?",
        addToCart: "Add to Cart",
        viewCart: "View Cart",
        continueShopping: "Continue Shopping"
      }
    }
  }
});

export default i18n;