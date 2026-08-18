export default function QuantityControl({ quantity, onChange }: { quantity: number; onChange: (value: number) => void }) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-full border border-[#dfd2c8] bg-white">
      <button onClick={() => onChange(quantity - 1)} className="flex h-9 w-9 items-center justify-center hover:bg-rosebrand/10" aria-label="Decrease quantity"><i className="ri-subtract-line" /></button>
      <span className="w-9 text-center text-sm font-bold">{quantity}</span>
      <button onClick={() => onChange(quantity + 1)} className="flex h-9 w-9 items-center justify-center hover:bg-rosebrand/10" aria-label="Increase quantity"><i className="ri-add-line" /></button>
    </div>
  );
}