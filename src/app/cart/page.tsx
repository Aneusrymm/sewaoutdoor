"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-[5%] py-[24px]">

        {items.length === 0 ? (
          <div className="py-[60px] text-center">
            <h1 className="font-serif text-[32px] text-[#111] mb-[16px]">Keranjang Kosong</h1>
            <p className="text-[14px] text-[#555] mb-[32px]">Belum ada produk di keranjang kamu.</p>
            <Link href="/" className="inline-block px-[28px] py-[12px] bg-[#111] text-white text-[13px] font-medium rounded-[4px] no-underline hover:bg-[#222] transition-colors">
              Jelajahi Produk
            </Link>
          </div>
        ) : (
          <>
            <h1 className="font-serif text-[28px] text-[#111] mb-[28px]">Keranjang</h1>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[40px]">
              {/* Left: Cart Items */}
              <div>
                <div className="hidden md:grid grid-cols-[1fr_120px_120px_40px] gap-[16px] pb-[12px] border-b border-[#e0e0e0] text-[11px] uppercase tracking-[0.1em] text-[#999]">
                  <span>Produk</span>
                  <span className="text-center">Jumlah</span>
                  <span className="text-right">Subtotal</span>
                  <span></span>
                </div>

                {items.map((item) => (
                  <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-[1fr_120px_120px_40px] gap-[16px] py-[20px] border-b border-[#f0f0f0] items-center">
                    <div className="flex gap-[16px] items-center">
                      <div className="w-[72px] h-[72px] rounded-[6px] bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url('${item.product.images[0]}')` }} />
                      <div>
                        <p className="text-[14px] font-medium text-[#111] m-0 leading-[1.3]">{item.product.name}</p>
                        <p className="text-[12px] text-[#999] m-0 mt-[4px]">Durasi: {item.duration} Malam</p>
                        <p className="text-[13px] text-[#555] m-0 mt-[2px]">Rp {item.product.price.toLocaleString("id-ID")} / malam</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="flex items-center border border-[#e0e0e0] rounded-[4px] overflow-hidden">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-[32px] h-[32px] bg-[#f9f9f9] border-none text-[14px] text-[#111] hover:bg-[#f0f0f0] transition-colors cursor-pointer">−</button>
                        <div className="w-[36px] text-center text-[13px] font-medium text-[#111]">{item.quantity}</div>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-[32px] h-[32px] bg-[#f9f9f9] border-none text-[14px] text-[#111] hover:bg-[#f0f0f0] transition-colors cursor-pointer">+</button>
                      </div>
                    </div>
                    <div className="text-right text-[14px] font-medium text-[#111]">
                      Rp {(item.product.price * item.quantity * item.duration).toLocaleString("id-ID")}
                    </div>
                    <button onClick={() => removeFromCart(item.product.id)} className="w-[32px] h-[32px] flex items-center justify-center text-[#999] hover:text-[#111] bg-transparent border border-[#e0e0e0] rounded-[4px] cursor-pointer transition-colors text-[14px] ml-auto" aria-label="Hapus item">✕</button>
                  </div>
                ))}

                <div className="mt-[24px]">
                  <Link href="/" className="text-[13px] text-[#555] hover:text-[#111] no-underline transition-colors">← Lanjut Belanja</Link>
                </div>
              </div>

              {/* Right: Order Summary */}
              <div className="lg:sticky lg:top-[88px] self-start">
                <div className="bg-[#fafafa] border border-[#e0e0e0] rounded-[10px] p-[28px]">
                  <h2 className="font-serif text-[20px] text-[#111] mb-[24px]">Order Summary</h2>
                  <div className="flex justify-between py-[10px] text-[14px]">
                    <span className="text-[#555]">Subtotal ({totalItems} items)</span>
                    <span className="font-medium text-[#111]">Rp {subtotal.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between py-[10px] text-[14px] border-b border-[#e0e0e0]">
                    <span className="text-[#555]">Shipping</span>
                    <span className="text-[13px] text-[#999]">Calculated at next step</span>
                  </div>
                  <div className="flex justify-between py-[14px] text-[16px] font-medium">
                    <span className="text-[#111]">Total</span>
                    <span className="text-[#111]">Rp {subtotal.toLocaleString("id-ID")}</span>
                  </div>
                  <Link href="/checkout" className="block w-full mt-[16px] py-[14px] bg-[#111] text-white text-[14px] font-medium rounded-[4px] hover:bg-[#222] transition-colors cursor-pointer border-none text-center no-underline">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
