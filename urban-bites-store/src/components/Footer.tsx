import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#f5e9dc] text-[#453b36]">
      <div className="container-page section-pad pb-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-7 text-[#6a5d55]">
              Premium dry fruits, gourmet chocolates and healthy seeds — selected with care and packed for freshness.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-rosebrand hover:text-white"><i className="fa-brands fa-instagram" /></a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-rosebrand hover:text-white"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-rosebrand hover:text-white"><i className="fa-brands fa-whatsapp" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link to="/" className="hover:text-rosebrand">Home</Link>
              <Link to="/products" className="hover:text-rosebrand">All Products</Link>
              <Link to="/products?category=Dry%20Fruits" className="hover:text-rosebrand">Dry Fruits</Link>
              <Link to="/products?category=Chocolate" className="hover:text-rosebrand">Chocolate</Link>
              <Link to="/products?category=Seeds" className="hover:text-rosebrand">Seeds</Link>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold">Categories</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <span>Premium Dry Fruits</span>
              <span>Gourmet Chocolate</span>
              <span>Healthy Seeds</span>
              <span>Gift Boxes</span>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-[#6a5d55]">
              <a href="mailto:hello@urbanbites.in" className="flex gap-3 hover:text-rosebrand"><i className="ri-mail-line text-lg text-rosebrand" /> hello@urbanbites.in</a>
              <a href="tel:+919999999999" className="flex gap-3 hover:text-rosebrand"><i className="ri-phone-line text-lg text-rosebrand" /> +91 99999 99999</a>
              <div className="flex gap-3"><i className="ri-map-pin-line text-lg text-rosebrand" /> India-wide delivery</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e3d3c5]">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-[#75665d] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Urban Bites. All rights reserved.</span>
          <span>Made with care for better snacking.</span>
        </div>
      </div>
    </footer>
  );
}