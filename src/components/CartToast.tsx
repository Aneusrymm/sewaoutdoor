"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export function CartToast() {
  const { toast, clearToast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed top-[80px] right-[5%] z-[200] bg-white border border-[#e0e0e0] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-[20px] w-[320px] animate-slide-in">
      {/* Close */}
      <button
        onClick={clearToast}
        className="absolute top-[12px] right-[12px] text-[#999] hover:text-[#111] text-[18px] bg-transparent border-none cursor-pointer"
      >
        ✕
      </button>

      {/* Product info */}
      <div className="flex gap-[14px] mb-[16px]">
        <div
          className="w-[56px] h-[56px] rounded-[6px] bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url('${toast.product.images[0]}')` }}
        />
        <div>
          <p className="font-medium text-[14px] text-[#111] m-0 leading-[1.3]">
            {toast.product.name}
          </p>
          <p className="text-[12px] text-[#999] m-0 mt-[4px]">
            Durasi: {toast.duration} Malam
          </p>
        </div>
      </div>

      {/* Success badge */}
      <div className="flex items-center gap-[6px] mb-[16px]">
        <span className="w-[18px] h-[18px] rounded-full bg-[#111] text-white text-[11px] flex items-center justify-center">✓</span>
        <span className="text-[13px] text-[#111] font-medium">Added to cart</span>
      </div>

      {/* View Cart button */}
      <Link
        href="/cart"
        onClick={clearToast}
        className="block w-full text-center py-[11px] bg-[#111] text-white text-[13px] font-medium rounded-[4px] hover:bg-[#222] transition-colors no-underline"
      >
        View Cart
      </Link>
    </div>
  );
}
