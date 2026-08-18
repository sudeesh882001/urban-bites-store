import { Link } from "react-router-dom";
import { products } from "../mocks/products";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";

const categories = [
  { name: "Dry Fruits", icon: "ri-seedling-line", query: "dry fruits, nuts" },
  { name: "Chocolate", icon: "ri-cake-3-line", query: "chocolate dessert" },
  { name: "Seeds", icon: "ri-leaf-line", query: "seeds healthy food" }
];

export default function Home() {
  return (
    <>
      <Seo />
      <main>
        <section className="relative flex min-h-[720px] items-center overflow-hidden bg-[#382b24]">
          <img src="https://loremflickr.com/1800/1100/dryfruit,chocolate,food?lock=88" alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-[#1d1613]/65" />
          <div className="container-page relative z-10 flex justify-center pt-24">
            <div className="max-w-3xl text-center text-white">
              <img src="/urbanbiteslogo.png" alt="Urban Bites" className="mx-auto mb-5 h-24 w-24 rounded-2xl object-contain bg-white/95 p-1" />
              <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-[#ffb3d1]">Goodness in every bite</p>
              <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-6xl">Premium Dry Fruits, Chocolate & Seeds</h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">Thoughtfully selected, beautifully packed and delivered fresh to your doorstep.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/products" className="rounded-full bg-rosebrand px-7 py-3.5 font-bold text-white transition hover:bg-roseDeep">Shop Now <i className="ri-arrow-right-line ml-1" /></Link>
                <Link to="/products?category=Dry%20Fruits" className="rounded-full border border-white/60 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#2b2523]">Explore Dry Fruits</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-page">
            <SectionTitle eyebrow="Shop by category" title="Something delicious for every mood" centered />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {categories.map((category) => (
                <Link key={category.name} to={`/products?category=${encodeURIComponent(category.name)}`} className="group relative overflow-hidden rounded-card bg-[#f1e4d6]">
                  <img src={`https://loremflickr.com/900/700/${encodeURIComponent(category.query)}?lock=${category.name.length * 7}`} alt={category.name} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-2xl text-rosebrand"><i className={category.icon} /></div>
                    <h3 className="font-heading text-2xl font-bold">{category.name}</h3>
                    <p className="mt-1 text-sm text-white/80">Explore collection <i className="ri-arrow-right-line" /></p>
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