import { Link } from "react-router-dom";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  const handleAdd = () => {
    addToCart(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="group overflow-hidden rounded-card border border-[#eadfd7] bg-white">
      <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-[#fff8ef]">
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {product.bestseller && <span className="rounded-full bg-rosebrand px-3 py-1 text-[11px] font-bold text-white">Bestseller</span>}
          {discount > 0 && <span className="rounded-full bg-amberbrand px-3 py-1 text-[11px] font-bold text-white">{discount}% OFF</span>}
        </div>
      </Link>
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-1 text-xs font-semibold text-amberbrand">
          <i className="ri-star-fill" /> {product.rating} <span className="font-normal text-[#877870]">({product.reviews})</span>
        </div>
        <Link to={`/product/${product.id}`} className="mt-2 block font-heading text-base font-bold leading-snug hover:text-rosebrand">{product.name}</Link>
        <p className="mt-1 text-sm text-[#85776f]">{product.weight}</p>
        <div className="mt-4 flex items-end gap-2">
          <span className="font-heading text-xl font-extrabold text-[#2d2623]">₹{product.price}</span>
          <span className="text-sm text-[#9a8e87] line-through">₹{product.originalPrice}</span>
        </div>
        <button onClick={handleAdd} className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition ${added ? "bg-[#2d8a5c] text-white" : "bg-rosebrand text-white hover:bg-roseDeep"}`}>
          <i className={added ? "ri-check-line" : "ri-shopping-bag-3-line"} /> {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}