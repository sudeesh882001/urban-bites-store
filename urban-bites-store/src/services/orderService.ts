import emailjs from "@emailjs/browser";
import type { CartItem, OrderCustomer } from "../types";
import { getPriceForWeight } from "../types";
import { products } from "../mocks/products";

export interface OrderData {
  orderId: string;
  customer: OrderCustomer;
  items: CartItem[];
  subtotal: number;
  delivery: number;
  total: number;
  createdAt: string;
}

// Strictly environment variable driven via .env file
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  TARGET_EMAIL: "support.urbanbites@gmail.com",
};

export const GOOGLE_SHEET_CONFIG = {
  WEBHOOK_URL: import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || "",
};

export async function processOrderNotification(orderData: OrderData): Promise<{
  emailSent: boolean;
  sheetSent: boolean;
  emailError?: string;
  sheetError?: string;
}> {
  let emailSent = false;
  let sheetSent = false;
  let emailError: string | undefined;
  let sheetError: string | undefined;

  const formattedItems = orderData.items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      const name = product ? product.name : item.productId;
      const unitPrice = product ? getPriceForWeight(product.price, item.weight) : 0;
      const totalItemPrice = unitPrice * item.quantity;
      return `${name} (${item.weight}) x ${item.quantity} = ₹${totalItemPrice}`;
    })
    .join("\n");

  const templateParams = {
    order_id: orderData.orderId,
    order_date: orderData.createdAt,
    to_email: EMAILJS_CONFIG.TARGET_EMAIL,
    customer_name: orderData.customer.fullName,
    customer_phone: orderData.customer.phone,
    customer_email: orderData.customer.email,
    customer_address: `${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.state} - ${orderData.customer.pincode}`,
    order_notes: orderData.customer.notes || "None",
    items_summary: formattedItems,
    subtotal: `₹${orderData.subtotal}`,
    delivery: orderData.delivery ? `₹${orderData.delivery}` : "FREE",
    total_amount: `₹${orderData.total}`,
    payment_method: "Cash on Delivery (COD)",
  };

  const publicKey = EMAILJS_CONFIG.PUBLIC_KEY;
  const serviceId = EMAILJS_CONFIG.SERVICE_ID;
  const templateId = EMAILJS_CONFIG.TEMPLATE_ID;

  // 1. Send Email via EmailJS
  if (publicKey && publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });
      emailSent = true;
      console.log("SUCCESS: Order email sent to support.urbanbites@gmail.com!");
    } catch (err: any) {
      emailError = err?.text || err?.message || JSON.stringify(err);
      console.error("EMAILJS ERROR:", err);
    }
  } else {
    emailError =
      "VITE_EMAILJS_PUBLIC_KEY is not configured in your .env file. Update your .env file and restart dev server.";
    console.warn(emailError, templateParams);
  }

  // 2. Send Order to Google Sheets
  const webhookUrl = GOOGLE_SHEET_CONFIG.WEBHOOK_URL;

  if (webhookUrl && !webhookUrl.includes("YOUR_SCRIPT_ID")) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(templateParams),
      });
      sheetSent = true;
      console.log("SUCCESS: Order sent to Google Sheets Webhook!");
    } catch (err: any) {
      sheetError = err?.message || JSON.stringify(err);
      console.error("GOOGLE SHEETS WEBHOOK ERROR:", err);
    }
  } else {
    sheetError =
      "VITE_GOOGLE_SHEETS_WEBHOOK_URL is not configured in your .env file.";
  }

  return { emailSent, sheetSent, emailError, sheetError };
}
