"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, subtotal, totalItems } = useCart();
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const adminWa = "6285782404558";

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-[1200px] mx-auto px-[5%] py-[24px]">

          <div className="py-[60px] text-center">
            <h1 className="font-serif text-[32px] text-[#111] mb-[16px]">Keranjang Kosong</h1>
            <p className="text-[14px] text-[#555] mb-[32px]">Tambahkan produk terlebih dahulu.</p>
            <Link href="/" className="inline-block px-[28px] py-[12px] bg-[#111] text-white text-[13px] font-medium rounded-[4px] no-underline hover:bg-[#222] transition-colors">
              Jelajahi Produk
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    const orderNumber = Math.floor(10000 + Math.random() * 90000);
    const today = new Date();
    const dateStr = today.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });

    // Clean WA number
    let cleanWa = whatsapp.replace(/[^0-9]/g, "");
    if (cleanWa.startsWith("0")) cleanWa = "62" + cleanWa.slice(1);

    // Build product list
    const productLines = items
      .map(
        (item) =>
          `${item.quantity} x ${item.product.name} ( Durasi - ${item.duration} Malam )`
      )
      .join("\n");

    const message = `*Order from website*

Order Number: ${orderNumber}
Date: ${dateStr}
Nama Lengkap: ${nama}
Whatapp: ${cleanWa}

Products:
${productLines}

Shipping: Ambil ke toko
Total: Rp${subtotal.toLocaleString("id-ID")}`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${adminWa}?text=${encodedMessage}`;

    // Store order info for confirmation page
    if (typeof window !== "undefined") {
      sessionStorage.setItem(
        "lastOrder",
        JSON.stringify({ orderNumber, date: dateStr, nama, whatsapp: cleanWa, subtotal })
      );
    }

    window.open(waUrl, "_blank");
    router.push("/confirmation");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-[5%] py-[24px]">


        <h1 className="font-serif text-[28px] text-[#111] mb-[28px]">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[40px]">
          {/* Left: Form */}
          <div>
            <h2 className="font-serif text-[20px] text-[#111] mb-[24px]">Checkout Details</h2>

            {/* Nama Lengkap */}
            <div className="mb-[20px]">
              <label className="block text-[13px] font-medium text-[#111] mb-[8px]">Nama Lengkap</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama lengkap"
                className="w-full px-[16px] py-[12px] border border-[#e0e0e0] rounded-[6px] text-[14px] text-[#111] bg-white outline-none focus:border-[#111] transition-colors"
              />
            </div>

            {/* WhatsApp */}
            <div className="mb-[20px]">
              <label className="block text-[13px] font-medium text-[#111] mb-[8px]">WhatsApp</label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+62xxxxxxxxxx"
                className="w-full px-[16px] py-[12px] border border-[#e0e0e0] rounded-[6px] text-[14px] text-[#111] bg-white outline-none focus:border-[#111] transition-colors"
              />
            </div>

            {/* Shipping */}
            <div className="mb-[32px]">
              <label className="block text-[13px] font-medium text-[#111] mb-[8px]">Shipping</label>
              <div className="border border-[#111] rounded-[6px] p-[16px] bg-[#fafafa]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[18px] h-[18px] rounded-full border-[2px] border-[#111] flex items-center justify-center">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#111]"></div>
                    </div>
                    <span className="text-[14px] font-medium text-[#111]">Ambil ke toko</span>
                  </div>
                  <span className="text-[14px] font-medium text-green-600">FREE</span>
                </div>
                <p className="text-[12px] text-[#999] mt-[8px] ml-[28px] m-0">
                  Beritahu admin jam dan tanggal check in dan checkout
                </p>
              </div>
            </div>

            {/* WhatsApp Place Order Button (mobile) */}
            <button
              onClick={handlePlaceOrder}
              disabled={!nama.trim() || !whatsapp.trim()}
              className="w-full lg:hidden flex items-center justify-center gap-[10px] py-[14px] bg-[#25D366] text-white text-[14px] font-medium rounded-[6px] hover:bg-[#1eb954] transition-colors cursor-pointer border-none disabled:opacity-40 disabled:cursor-not-allowed mb-[24px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Place order on WhatsApp
            </button>
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
                <span className="font-medium text-green-600">FREE</span>
              </div>
              <div className="flex justify-between py-[14px] text-[16px] font-medium">
                <span className="text-[#111]">Total</span>
                <span className="text-[#111]">Rp {subtotal.toLocaleString("id-ID")}</span>
              </div>

              {/* WhatsApp Place Order Button (desktop) */}
              <button
                onClick={handlePlaceOrder}
                disabled={!nama.trim() || !whatsapp.trim()}
                className="hidden lg:flex w-full mt-[16px] items-center justify-center gap-[10px] py-[14px] bg-[#25D366] text-white text-[14px] font-medium rounded-[6px] hover:bg-[#1eb954] transition-colors cursor-pointer border-none disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Place order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
