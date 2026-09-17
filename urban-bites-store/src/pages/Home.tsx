import { Link } from "react-router-dom";
import { products } from "../mocks/products";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";
import logo from "../assets/urbanbiteslogo.png";

const categories = [
  { name: "Nuts & Dry Fruits", icon: "ri-seedling-line", bg: "bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fed7aa]", text: "text-[#9a3412]" },
  { name: "Seeds", icon: "ri-leaf-line", bg: "bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0]", text: "text-[#166534]" },
  { name: "Spices", icon: "ri-sparkles-line", bg: "bg-gradient-to-br from-[#fff1f2] via-[#ffe4e6] to-[#fecdd3]", text: "text-[#9f1239]" },
  { name: "Dates", icon: "ri-restaurant-line", bg: "bg-gradient-to-br from-[#fdf8f6] via-[#f2e8e5] to-[#e6d5d0]", text: "text-[#7c2d12]" }
];

export default function Home() {
  return (
    <>
      <Seo />
      <main>
        <section className="relative flex min-h-[540px] items-center overflow-hidden bg-gradient-to-br from-[#2a1d17] via-[#3a2920] to-[#1a120e]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,15,104,0.15)_0,transparent_100%)]" />
          <div className="container-page relative z-10 flex justify-center py-20 pt-28">
            <div className="max-w-3xl text-center text-white">
              <img
                src={logo}
                alt="Urban Bites"
                className="mx-auto mb-5 h-24 w-24 rounded-2xl object-contain bg-white/95 p-1.5 shadow-lg"
              />
              <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-[#ffb3d1]">Taste in every bite</p>
              <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-6xl">Premium Dry Fruits, Seeds & Spices</h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">Thoughtfully selected, beautifully packed and delivered fresh to your doorstep.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/products" className="rounded-full bg-rosebrand px-7 py-3.5 font-bold text-white transition hover:bg-roseDeep shadow-md">Shop Now <i className="ri-arrow-right-line ml-1" /></Link>
                <Link to="/products?category=Dry%20Fruits" className="rounded-full border border-white/60 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#2b2523]">Explore Dry Fruits</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-page">
            <SectionTitle eyebrow="Shop by category" title="Something delicious for every mood" centered />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className={`group relative flex h-60 flex-col justify-between overflow-hidden rounded-card ${category.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-black/5`}
                >
                  <div className="flex justify-between items-start">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 ${category.text} shadow-sm text-2xl`}>
                      <i className={category.icon} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2b2523]/60 group-hover:text-rosebrand">Explore →</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#2b2523]">{category.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-[#2b2523]/70">Browse products in this collection</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fff8ef] section-pad">
          <div className="container-page">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle eyebrow="Customer favorites" title="Bestsellers" text="Our most-loved picks, chosen again and again." />
              <Link to="/products?sort=bestsellers" className="font-bold text-rosebrand hover:text-roseDeep">View all <i className="ri-arrow-right-line" /></Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.filter(p => p.bestseller).slice(0, 6).map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-page">
            <SectionTitle eyebrow="The Urban Bites promise" title="Why choose us?" text="We focus on the details that make everyday snacking feel special." centered />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["ri-leaf-line","100% Natural","Simple ingredients, carefully selected and packed."],
                ["ri-award-line","Premium Quality","Quality-first sourcing with freshness in mind."],
                ["ri-truck-line","Fast Delivery","Reliable delivery across India on every order."],
                ["ri-heart-3-line","Loved by Thousands","Products made to become pantry favorites."]
              ].map(([icon,title,text]) => (
                <div key={title} className="rounded-card border border-[#eadfd7] bg-white p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rosebrand/10 text-2xl text-rosebrand"><i className={icon} /></div>
                  <h3 className="mt-5 font-heading text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#756861]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="container-page">
            <div className="overflow-hidden rounded-card bg-rosebrand px-6 py-10 text-white sm:px-12 sm:py-14">
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-semibold uppercase tracking-[0.18em] text-white/75">Fresh drops & tasty updates</p>
                <h2 className="mt-2 font-heading text-3xl font-extrabold sm:text-4xl">Get 10% off your first order</h2>
                <p className="mt-3 text-white/85">Join the Urban Bites list for new launches, seasonal treats and occasional offers.</p>
                <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining Urban Bites!"); }} className="mx-auto mt-7 flex max-w-lg flex-col gap-2 sm:flex-row">
                  <input required type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-full border-0 bg-white px-5 py-3.5 text-[#2b2523] outline-none" />
                  <button className="rounded-full bg-[#2b2523] px-6 py-3.5 font-bold text-white hover:bg-black">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}