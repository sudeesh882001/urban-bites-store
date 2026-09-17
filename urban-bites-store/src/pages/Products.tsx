import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../mocks/products";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import type { Category } from "../types";

const categories = ["All", "Nuts & Dry Fruits", "Seeds", "Spices", "Dates"] as const;

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("search") ?? "");
  const category = params.get("category") ?? "All";
  const sort = params.get("sort") ?? "featured";

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (!value || value === "All" || value === "featured") next.delete(key);
    else next.set(key, value);
    setParams(next);
  };

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const q = search.trim().toLowerCase();
      return matchesCategory && (!q || `${p.name} ${p.category} ${p.tags.join(" ")}`.toLowerCase().includes(q));
    });
    if (sort === "bestsellers") list = [...list].sort((a,b) => Number(b.bestseller)-Number(a.bestseller));
    if (sort === "price-low") list = [...list].sort((a,b) => a.price-b.price);
    if (sort === "price-high") list = [...list].sort((a,b) => b.price-a.price);
    return list;
  }, [category, search, sort]);

  return (
    <>
      <Seo title="Shop — Urban Bites" description="Shop premium dry fruits, gourmet chocolate and healthy seeds." />
      <main className="pt-28">
        <section className="container-page pb-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosebrand">The collection</p>
            <h1 className="mt-2 font-heading text-4xl font-extrabold sm:text-5xl">Shop all Goodness</h1>
            <p className="mt-4 text-[#756861]">Browse premium Dry Fruits, Seeds, Spices & Dates from Urban Bites.</p>
          </div>

          <div className="mt-9 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-3 rounded-full border border-[#dfd2c8] bg-white px-5 py-3 focus-within:border-rosebrand lg:max-w-xl">
              <i className="ri-search-line text-xl text-[#8c7d74]" />
              <input value={search} onChange={(e) => { setSearch(e.target.value); updateParam("search", e.target.value); }} placeholder="Search almonds, chocolate, seeds..." className="w-full bg-transparent outline-none text-sm" />
              {search && <button onClick={() => { setSearch(""); updateParam("search",""); }} className="text-[#8c7d74]"><i className="ri-close-line" /></button>}
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-[#6f625b]">Sort</label>
              <select value={sort} onChange={(e) => updateParam("sort", e.target.value)} className="focus-ring rounded-full border border-[#dfd2c8] bg-white px-4 py-3 text-sm font-semibold">
                <option value="featured">Featured</option>
                <option value="bestsellers">Bestsellers</option>
                <option value="price-low">Price Low-High</option>
                <option value="price-high">Price High-Low</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => updateParam("category", cat)} className={`pill ${category === cat ? "border-rosebrand bg-rosebrand text-white" : "border-[#dfd2c8] bg-white text-[#5f534c] hover:border-rosebrand hover:text-rosebrand"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-[#796d66]"><span className="font-bold text-[#2b2523]">{filtered.length}</span> products</p>
            {(category !== "All" || search || sort !== "featured") && <button onClick={() => { setSearch(""); setParams({}); }} className="text-sm font-bold text-rosebrand">Reset filters</button>}
          </div>

          {filtered.length ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="mt-10 rounded-card border border-dashed border-[#dfd2c8] bg-[#fff8ef] px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-[#9a8d84]"><i className="ri-search-eye-line" /></div>
              <h2 className="mt-5 font-heading text-2xl font-bold">No products found</h2>
              <p className="mt-2 text-[#756861]">Try another search or reset your filters.</p>
              <button onClick={() => { setSearch(""); setParams({}); }} className="mt-6 rounded-full bg-rosebrand px-6 py-3 font-bold text-white">View all products</button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}