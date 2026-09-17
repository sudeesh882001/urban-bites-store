import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { WEIGHT_OPTIONS, getPriceForWeight, type Product, type WeightOption } from "../types";
import ProductImage from "./ProductImage";
import QuantityControl from "./QuantityControl";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>("100g");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const price = getPriceForWeight(product.price, selectedWeight);

  const handleAdd = () => {
    addToCart(product.id, selectedWeight, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="group overflow-hidden rounded-card border border-[#eadfd7] bg-white flex flex-col justify-between">
      <div>
        <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-[#fff8ef]">
          <ProductImage src={product.image} alt={product.name} category={product.category} />
          {product.bestseller && (
            <div className="absolute left-3 top-3 z-20">
              <span className="rounded-full bg-rosebrand px-3 py-1 text-[11px] font-bold text-white shadow-sm">
                Bestseller
              </span>
            </div>
          )}
        </Link>
        <div className="p-4 sm:p-5">
          <Link
            to={`/product/${product.id}`}
            className="block font-heading text-base font-bold leading-snug hover:text-rosebrand"
          >
            {product.name}
          </Link>

          {/* Weight Selection */}
          <div className="mt-3">
            <label className="text-[11px] font-semibold text-[#85776f] uppercase tracking-wider block mb-1">
              Select Weight
            </label>
            <div className="flex flex-wrap gap-1.5">
              {WEIGHT_OPTIONS.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setSelectedWeight(w)}
                  className={`rounded-md px-2.5 py-1 text-xs font-bold transition-all ${
                    selectedWeight === w
                      ? "bg-rosebrand text-white shadow-sm"
                      : "bg-[#f7f0eb] text-[#554943] hover:bg-[#eadfd7]"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Price display without MRP slash */}
          <div className="mt-4 flex items-baseline justify-between">
            <div>
              <span className="text-xs text-[#85776f]">Price: </span>
              <span className="font-heading text-xl font-extrabold text-[#2d2623]">
                ₹{price}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quantity & Add to Cart Controls */}
      <div className="p-4 pt-0 sm:p-5 sm:pt-0 space-y-2.5">
        <div className="flex items-center justify-between gap-2 bg-[#fff8ef] p-2 rounded-lg border border-[#eadfd7]">
          <span className="text-xs font-semibold text-[#6a5e57]">Quantity:</span>
          <QuantityControl
            quantity={quantity}
            onChange={(val) => setQuantity(Math.max(1, val))}
          />
        </div>

        <button
          onClick={handleAdd}
          className={`flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition ${
            added
              ? "bg-[#2d8a5c] text-white"
              : "bg-rosebrand text-white hover:bg-roseDeep"
          }`}
        >
          <i className={added ? "ri-check-line" : "ri-shopping-bag-3-line"} />
          {added ? "Added to Cart" : `Add to Cart • ₹${price * quantity}`}
        </button>
      </div>
    </article>
  );
}