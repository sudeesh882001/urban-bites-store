import logo from "../assets/urbanbiteslogo.png";
import type { Category } from "../types";

const categoryStyles: Record<string, { bg: string; icon: string; text: string; label: string }> = {
  "Dry Fruits": {
    bg: "bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fed7aa]",
    icon: "ri-seedling-fill",
    text: "text-[#9a3412]",
    label: "Nuts & Dry Fruits",
  },
  Chocolate: {
    bg: "bg-gradient-to-br from-[#faf4f0] via-[#f0e6df] to-[#d7ccc8]",
    icon: "ri-cake-3-fill",
    text: "text-[#4e342e]",
    label: "Gourmet Chocolate",
  },
  Seeds: {
    bg: "bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0]",
    icon: "ri-leaf-fill",
    text: "text-[#166534]",
    label: "Healthy Seeds",
  },
};

export default function ProductImage({
  src,
  alt,
  category = "Dry Fruits",
  className = "h-full w-full object-cover",
}: {
  src?: string;
  alt: string;
  category?: Category | string;
  className?: string;
}) {
  const style = categoryStyles[category] || categoryStyles["Dry Fruits"];

  if (src && !src.includes("loremflickr.com")) {
    return <img src={src} alt={alt} loading="lazy" className={className} />;
  }

  return (
    <div className={`relative flex h-full w-full flex-col items-center justify-center p-6 ${style.bg} select-none overflow-hidden`}>
      {/* Soft decorative background circles */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/40 blur-xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/50 blur-xl" />

      {/* Brand logo badge */}
      <img src={logo} alt="Urban Bites" className="h-10 w-10 rounded-xl bg-white/90 p-1 shadow-sm object-contain mb-3 relative z-10" />

      {/* Category Icon */}
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 ${style.text} shadow-sm backdrop-blur-sm relative z-10`}>
        <i className={`${style.icon} text-3xl`} />
      </div>

      {/* Product Title inside placeholder */}
      <p className="mt-3 text-center font-heading text-sm font-bold text-[#2d2623] relative z-10 line-clamp-1">
        {alt}
      </p>
      <span className={`mt-1 text-[10px] font-bold uppercase tracking-wider ${style.text} relative z-10`}>
        {style.label}
      </span>
    </div>
  );
}
