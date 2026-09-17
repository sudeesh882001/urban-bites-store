import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct, products } from "../mocks/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import QuantityControl from "../components/QuantityControl";
import Seo from "../components/Seo";
import NotFound from "./NotFound";
import { WEIGHT_OPTIONS, getPriceForWeight, type WeightOption } from "../types";

import ProductImage from "../components/ProductImage";

export default function ProductDetail() {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>("100g");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = useMemo(() => products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0,4), [product]);

  if (!product) return <NotFound />;

  const price = getPriceForWeight(product.price, selectedWeight);

  const handleAdd = () => {
    addToCart(product.id, selectedWeight, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <>
      <Seo title={`${product.name} — Urban Bites`} description={product.description} />
      <main className="pt-28">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#84776f]">
            <Link to="/" className="hover:text-rosebrand">Home</Link><i className="ri-arrow-right-s-line" />
            <Link to="/products" className="hover:text-rosebrand">Products</Link><i className="ri-arrow-right-s-line" />
            <span className="text-[#3f3733]">{product.name}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-square overflow-hidden rounded-card bg-[#fff8ef]">
              <ProductImage src={product.image} alt={product.name} category={product.category} />
              {product.bestseller && (
                <div className="absolute left-4 top-4 z-20">
                  <span className="rounded-full bg-rosebrand px-3 py-1.5 text-xs font-bold text-white shadow-sm">Bestseller</span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosebrand">{product.category}</p>
              <h1 className="mt-2 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">{product.name}</h1>
              
              {/* Weight Options */}
              <div className="mt-5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#766961]">Select Weight</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {WEIGHT_OPTIONS.map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setSelectedWeight(w)}
                      className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                        selectedWeight === w
                          ? "bg-rosebrand text-white shadow-sm"
                          : "bg-[#f5e9dc] text-[#554943] hover:bg-[#eadfd7]"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-end gap-3">
                <span className="font-heading text-4xl font-extrabold text-[#2d2623]">₹{price}</span>
              </div>
              <p className="mt-6 leading-8 text-[#655952]">{product.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map(tag => <span key={tag} className="rounded-full bg-[#f5e9dc] px-3 py-1.5 text-xs font-semibold text-[#665950]">{tag}</span>)}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuantityControl quantity={quantity} onChange={(value) => setQuantity(Math.max(1, value))} />
                <button onClick={handleAdd} className={`flex flex-1 items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold text-white ${added ? "bg-[#2d8a5c]" : "bg-rosebrand hover:bg-roseDeep"}`}>
                  <i className={added ? "ri-check-line" : "ri-shopping-bag-3-line"} /> {added ? "Added to Cart" : `Add to Cart • ₹${price * quantity}`}
                </button>
              </div>
              {added && <Link to="/cart" className="mt-3 text-center text-sm font-bold text-rosebrand">View Cart →</Link>}
              <div className="mt-7 grid grid-cols-2 gap-3 border-t border-[#eadfd7] pt-6 sm:grid-cols-3">
                <div><i className="ri-truck-line text-xl text-rosebrand" /><p className="mt-1 text-xs font-semibold">Fast delivery</p></div>
                <div><i className="ri-shield-check-line text-xl text-rosebrand" /><p className="mt-1 text-xs font-semibold">Quality packed</p></div>
                <div><i className="ri-hand-heart-line text-xl text-rosebrand" /><p className="mt-1 text-xs font-semibold">COD available</p></div>
              </div>
            </div>
          </div>

          <section className="section-pad">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosebrand">More to love</p>
                <h2 className="mt-2 font-heading text-3xl font-extrabold">You May Also Like</h2>
              </div>
              <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hidden font-bold text-rosebrand sm:block">View category →</Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map(item => <ProductCard key={item.id} product={item} />)}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}