import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../mocks/products";
import { useCart } from "../context/CartContext";
import type { OrderCustomer } from "../types";
import Seo from "../components/Seo";

const initial: OrderCustomer & { website: string } = {
  fullName:"", phone:"", email:"", address:"", city:"", state:"", pincode:"", notes:"", website:""
};

export default function Checkout() {
  const { items, subtotal, delivery, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const cartProducts = items.map(item => ({ ...item, product: products.find(p => p.id === item.productId)! })).filter(item => item.product);

  const update = (key: keyof typeof form, value: string) => {
    setForm(f => ({...f, [key]: value}));
    setErrors(e => ({...e, [key]:""}));
  };

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit Indian mobile number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.state.trim()) e.state = "State is required";
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = "Enter a valid 6-digit pincode";
    if (form.notes.length > 500) e.notes = "Maximum 500 characters";
    return e;
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (form.website) return;
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 1200);
  };

  if (success) {
    return (
      <>
        <Seo title="Order Confirmed — Urban Bites" />
        <main className="pt-28">
          <div className="container-page">
            <div className="mx-auto max-w-2xl py-16 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e5f7ee] text-4xl text-[#2d8a5c]"><i className="ri-check-line" /></div>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-rosebrand">Order placed</p>
              <h1 className="mt-2 font-heading text-4xl font-extrabold sm:text-5xl">Thank you, {form.fullName.split(" ")[0]}!</h1>
              <p className="mx-auto mt-5 max-w-lg leading-7 text-[#756861]">Your Urban Bites order has been confirmed. Our team will prepare it with care and you can expect delivery in <strong>2–5 business days</strong>.</p>
              <div className="mx-auto mt-8 max-w-md rounded-card border border-[#eadfd7] bg-[#fff8ef] p-6 text-left">
                <div className="flex justify-between text-sm"><span className="text-[#756861]">Payment</span><strong>Cash on Delivery</strong></div>
                <div className="mt-3 flex justify-between text-sm"><span className="text-[#756861]">Total</span><strong>₹{total}</strong></div>
                <div className="mt-3 flex justify-between text-sm"><span className="text-[#756861]">Deliver to</span><strong className="max-w-[210px] text-right">{form.city}, {form.state}</strong></div>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/products" className="rounded-full bg-rosebrand px-7 py-3.5 font-bold text-white">Continue Shopping</Link>
                <Link to="/" className="rounded-full border border-[#dfd2c8] px-7 py-3.5 font-bold">Back to Home</Link>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (!cartProducts.length) {
    return (
      <>
        <Seo title="Checkout — Urban Bites" />
        <main className="pt-28">
          <div className="container-page py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rosebrand/10 text-3xl text-rosebrand"><i className="ri-shopping-bag-3-line" /></div>
            <h1 className="mt-5 font-heading text-3xl font-extrabold">Your cart is empty</h1>
            <p className="mt-2 text-[#756861]">Add products before proceeding to checkout.</p>
            <Link to="/products" className="mt-6 inline-flex rounded-full bg-rosebrand px-7 py-3.5 font-bold text-white">Shop Products</Link>
          </div>
        </main>
      </>
    );
  }

  const field = (name: keyof typeof form, label: string, placeholder: string, type = "text") => (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>
      <input type={type} value={form[name]} onChange={e => update(name, e.target.value)} placeholder={placeholder} className={`focus-ring w-full rounded-lg border bg-white px-4 py-3.5 text-sm ${errors[name] ? "border-rosebrand" : "border-[#dfd2c8]"}`} />
      {errors[name] && <p className="mt-1.5 text-xs font-semibold text-rosebrand">{errors[name]}</p>}
    </div>
  );

  return (
    <>
      <Seo title="Checkout — Urban Bites" />
      <main className="pt-28">
        <div className="container-page">
          <div className="mb-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosebrand">Almost there</p>
            <h1 className="mt-2 font-heading text-4xl font-extrabold">Checkout</h1>
          </div>
          <form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <section className="rounded-card border border-[#eadfd7] bg-white p-5 sm:p-7">
              <h2 className="font-heading text-xl font-bold">Delivery details</h2>
              <p className="mt-1 text-sm text-[#82756d]">We'll use these details to deliver your order.</p>
              <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={e => update("website", e.target.value)} /></label></div>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {field("fullName","Full name","Your full name")}
                {field("phone","Phone","10-digit mobile number","tel")}
                {field("email","Email","you@example.com","email")}
                {field("pincode","Pincode","6-digit pincode")}
                <div className="sm:col-span-2">{field("address","Address","House / flat, street, area")}</div>
                {field("city","City","City")}
                {field("state","State","State")}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold">Order notes <span className="font-normal text-[#8a7d75]">(optional)</span></label>
                  <textarea value={form.notes} onChange={e => update("notes", e.target.value)} maxLength={500} rows={4} placeholder="Delivery instructions, landmark, etc." className={`focus-ring w-full resize-none rounded-lg border bg-white px-4 py-3.5 text-sm ${errors.notes ? "border-rosebrand" : "border-[#dfd2c8]"}`} />
                  <div className="mt-1 flex justify-between text-xs text-[#8a7d75]"><span>{errors.notes ?? ""}</span><span>{form.notes.length}/500</span></div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-[#eadfd7] bg-[#fff8ef] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rosebrand/10 text-rosebrand"><i className="ri-hand-coin-line text-xl" /></div>
                  <div><h3 className="font-bold">Cash on Delivery</h3><p className="text-sm text-[#756861]">Pay when your order arrives at your doorstep.</p></div>
                </div>
              </div>
              <button disabled={loading} className="mt-7 w-full rounded-full bg-rosebrand px-6 py-4 font-bold text-white hover:bg-roseDeep disabled:cursor-wait disabled:opacity-70">
                {loading ? <><i className="ri-loader-4-line mr-2 animate-spin" /> Placing Order...</> : <>Place Order • ₹{total}</>}
              </button>
            </section>

            <aside className="h-fit rounded-card border border-[#eadfd7] bg-[#fff8ef] p-6 lg:sticky lg:top-28">
              <h2 className="font-heading text-xl font-bold">Order Summary</h2>
              <div className="mt-5 space-y-4">
                {cartProducts.map(({product, quantity}) => (
                  <div key={product.id} className="flex gap-3">
                    <img src={product.image} alt="" className="h-14 w-14 rounded-lg object-cover bg-white" />
                    <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{product.name}</p><p className="mt-1 text-xs text-[#83766e]">{quantity} × ₹{product.price}</p></div>
                    <p className="text-sm font-bold">₹{product.price * quantity}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3 border-t border-[#dfd2c8] pt-5 text-sm">
                <div className="flex justify-between"><span className="text-[#756861]">Subtotal</span><strong>₹{subtotal}</strong></div>
                <div className="flex justify-between"><span className="text-[#756861]">Delivery</span><strong>{delivery ? `₹${delivery}` : "FREE"}</strong></div>
                <div className="flex justify-between pt-2 text-base"><span className="font-bold">Total</span><strong className="font-heading text-2xl">₹{total}</strong></div>
              </div>
            </aside>
          </form>
        </div>
      </main>
    </>
  );
}