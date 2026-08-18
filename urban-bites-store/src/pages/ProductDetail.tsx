import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct, products } from "../mocks/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import QuantityControl from "../components/QuantityControl";
import Seo from "../components/Seo";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = useMemo(() => products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0,4), [product]);

  if (!product) return <NotFound />;

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  const handleAdd = () => {
    addToCart(product.id, quantity);
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
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              <div className="absolute left-4 top-4 flex gap-2">
                {product.bestseller && <span className="rounded-full bg-rosebrand px-3 py-1.5 text-xs font-bold text-white">Bestseller</span>}
                {discount > 0 && <span className="rounded-full bg-amberbrand px-3 py-1.5 text-xs font-bold text-white">{discount}% OFF</span>}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosebrand">{product.category}</p>
              <h1 className="mt-2 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">{product.name}</h1>
              <div className="mt-4 flex items-center gap-2">
                <span className="font-bold text-amberbrand"><i className="ri-star-fill" /> {product.rating}</span>
                <span className="text-sm text-[#83766e]">({product.reviews} reviews)</span>
              </div>
              <div className="mt-6 flex items-end gap-3">
                <span className="font-heading text-4xl font-extrabold">₹{product.price}</span>
                <span className="pb-1 text-lg text-[#9b8e86] line-through">₹{product.originalPrice}</span>
                <span className="rounded-full bg-[#fff0f5] px-3 py-1 text-xs font-bold text-rosebrand">{discount}% OFF</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-[#766961]">Pack size: {product.weight}</p>
              <p className="mt-6 leading-8 text-[#655952]">{product.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map(tag => <span key={tag} className="rounded-full bg-[#f5e9dc] px-3 py-1.5 text-xs font-semibold text-[#665950]">{tag}</span>)}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuantityControl quantity={quantity} onChange={(value) => setQuantity(Math.max(1, value))} />
                <button onClick={handleAdd} className={`flex flex-1 items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold text-white ${added ? "bg-[#2d8a5c]" : "bg-rosebrand hover:bg-roseDeep"}`}>
                  <i className={added ? "ri-check-line" : "ri-shopping-bag-3-line"} /> {added ? "Added to Cart" : "Add to Cart"}
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