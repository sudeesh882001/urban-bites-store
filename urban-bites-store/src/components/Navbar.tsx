import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `font-semibold transition-colors ${isActive ? "text-rosebrand" : "text-[#4d4440] hover:text-rosebrand"}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#eadfd7]" : "bg-transparent"}`}>
      <div className="container-page">
        <div className="flex h-[76px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-9 md:flex">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/products" className={navClass}>Products</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/cart" className="relative flex h-11 w-11 items-center justify-center rounded-full text-[#3f3835] hover:bg-rosebrand/10 hover:text-rosebrand" aria-label={`Cart with ${itemCount} items`}>
              <i className="ri-shopping-bag-3-line text-[22px]" />
              {itemCount > 0 && <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-rosebrand px-1 text-[10px] font-bold text-white">{itemCount}</span>}
            </Link>
            <button className="flex h-11 w-11 items-center justify-center rounded-full md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <i className={open ? "ri-close-line text-2xl" : "ri-menu-3-line text-2xl"} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#eadfd7] bg-white py-4 md:hidden">
            <div className="flex flex-col gap-1">
              <NavLink onClick={() => setOpen(false)} to="/" className={({isActive}) => `rounded-lg px-3 py-3 font-semibold ${isActive ? "bg-rosebrand/10 text-rosebrand" : ""}`}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/products" className={({isActive}) => `rounded-lg px-3 py-3 font-semibold ${isActive ? "bg-rosebrand/10 text-rosebrand" : ""}`}>Products</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/cart" className="rounded-lg px-3 py-3 font-semibold">Cart ({itemCount})</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}