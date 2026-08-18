import { Link } from "react-router-dom";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Urban Bites home">
      <img src="/urbanbiteslogo.png" alt="Urban Bites logo" className={compact ? "h-10 w-10 object-contain" : "h-11 w-11 object-contain"} />
      {!compact && (
        <span className="font-heading text-xl font-extrabold tracking-tight text-rosebrand">
          Urban <span className="text-[#2f7cf6]">Bites</span>
        </span>
      )}
    </Link>
  );
}