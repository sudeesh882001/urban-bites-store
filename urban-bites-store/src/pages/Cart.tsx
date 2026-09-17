import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../mocks/products";
import { useCart } from "../context/CartContext";
import QuantityControl from "../components/QuantityControl";
import Seo from "../components/Seo";
import { getPriceForWeight } from "../types";

import ProductImage from "../components/ProductImage";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, delivery, total } = useCart();
  const [confirmClear, setConfirmClear] = useState(false);
  const navigate = useNavigate();

  const cartProducts = items.map(item => ({ ...item, product: products.find(p => p.id === item.productId)! })).filter(item => item.product);

  return (
    <>
      <Seo title="Your Cart — Urban Bites" />
      <main className="pt-28">
        <div className="container-page">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rosebrand">Your order</p>
              <h1 className="mt-2 font-heading text-4xl font-extrabold">Shopping Cart</h1>
            </div>
            {cartProducts.length > 0 && <button onClick={() => setConfirmClear(true)} className="self-start text-sm font-bold text-rosebrand hover:underline">Clear All</button>}
          </div>

          {!cartProducts.length ? (
            <div className="my-16 rounded-card border border-[#eadfd7] bg-[#fff8ef] px-6 py-20 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl text-rosebrand"><i className="ri-shopping-bag-3-line" /></div>
              <h2 className="mt-6 font-heading text-3xl font-bold">Your cart is waiting for something delicious</h2>
              <p className="mx-auto mt-3 max-w-md text-[#756861]">Add a few favorites and come back here when you're ready.</p>
              <Link to="/products" className="mt-7 inline-flex rounded-full bg-rosebrand px-7 py-3.5 font-bold text-white">Start Shopping</Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
              <div className="space-y-3">
                {cartProducts.map(({ product, weight, quantity }) => {
                  const unitPrice = getPriceForWeight(product.price, weight);
                  const itemTotal = unitPrice * quantity;
                  return (
                    <div key={`${product.id}-${weight}`} className="flex gap-4 rounded-card border border-[#eadfd7] bg-white p-4 sm:p-5">
                      <Link to={`/product/${product.id}`} className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-[#fff8ef] sm:h-28 sm:w-28">
                        <ProductImage src={product.image} alt={product.name} category={product.category} />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-3">
                          <div>
                            <Link to={`/product/${product.id}`} className="font-heading text-base font-bold hover:text-rosebrand">{product.name}</Link>
                            <p className="mt-1 text-xs font-semibold text-rosebrand">Weight: {weight} <span className="text-[#85776f] font-normal">(₹{unitPrice} / pack)</span></p>
                          </div>
                          <button onClick={() => removeFromCart(product.id, weight)} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#8d8078] hover:bg-rosebrand/10 hover:text-rosebrand" aria-label={`Remove ${product.name}`}><i className="ri-delete-bin-6-line" /></button>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-3">
                          <QuantityControl quantity={quantity} onChange={(value) => updateQuantity(product.id, weight, value)} />
                          <p className="font-heading text-lg font-extrabold">₹{itemTotal}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Link to="/products" className="inline-flex items-center gap-2 pt-3 font-bold text-rosebrand">← Continue Shopping</Link>
              </div>

              <aside className="h-fit rounded-card border border-[#eadfd7] bg-[#fff8ef] p-6 lg:sticky lg:top-28">
                <h2 className="font-heading text-xl font-bold">Order Summary</h2>
                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex justify-between"><span className="text-[#756861]">Subtotal</span><span className="font-semibold">₹{subtotal}</span></div>
                  <div className="flex justify-between"><span className="text-[#756861]">Delivery</span><span className="font-semibold">{delivery === 0 ? "FREE" : `₹${delivery}`}</span></div>
                  {subtotal > 0 && subtotal < 500 && <p className="rounded-lg bg-white px-3 py-2 text-xs text-[#756861]">Add ₹{500 - subtotal} more for free delivery.</p>}
                  <div className="border-t border-[#dfd2c8] pt-4 flex justify-between"><span className="font-bold">Total</span><span className="font-heading text-2xl font-extrabold">₹{total}</span></div>
                </div>
                <button onClick={() => navigate("/checkout")} className="mt-6 w-full rounded-full bg-rosebrand px-5 py-3.5 font-bold text-white hover:bg-roseDeep">Proceed to Checkout <i className="ri-arrow-right-line ml-1" /></button>
                <p className="mt-3 text-center text-xs text-[#81746c]">Cash on Delivery • Secure checkout</p>
              </aside>
            </div>
          )}
        </div>
      </main>

      {confirmClear && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#211916]/50 p-4">
          <div className="w-full max-w-md rounded-card bg-white p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rosebrand/10 text-xl text-rosebrand"><i className="ri-delete-bin-6-line" /></div>
            <h2 className="mt-5 font-heading text-2xl font-bold">Clear your cart?</h2>
            <p className="mt-2 text-sm leading-6 text-[#756861]">This will remove all items from your cart. You can always add them again.</p>
            <div className="mt-7 flex gap-3">
              <button onClick={() => setConfirmClear(false)} className="flex-1 rounded-full border border-[#dfd2c8] px-4 py-3 font-bold">Cancel</button>
              <button onClick={() => { clearCart(); setConfirmClear(false); }} className="flex-1 rounded-full bg-rosebrand px-4 py-3 font-bold text-white">Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}