"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface OrderData {
  orderNumber: number;
  date: string;
  nama: string;
  whatsapp: string;
  subtotal: number;
}

export default function ConfirmationPage() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("lastOrder");
    if (data) {
      setOrder(JSON.parse(data));
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[600px] mx-auto px-[5%] py-[24px]">

        <div className="text-center py-[40px]">
          {/* Success icon */}
          <div className="w-[64px] h-[64px] rounded-full bg-[#25D366] text-white text-[28px] flex items-center justify-center mx-auto mb-[20px]">
            ✓
          </div>

          <h1 className="font-serif text-[28px] text-[#111] mb-[10px]">Order Berhasil!</h1>
          <p className="text-[14px] text-[#555] mb-[32px] max-w-[400px] mx-auto leading-[1.7]">
            Pesanan kamu sudah dikirim ke WhatsApp admin. Silakan tunggu konfirmasi dari admin untuk langkah selanjutnya.
          </p>

          {order && (
            <div className="bg-[#fafafa] border border-[#e0e0e0] rounded-[10px] p-[24px] text-left mb-[32px]">
              <h2 className="font-serif text-[18px] text-[#111] mb-[16px]">Detail Pesanan</h2>
              <div className="space-y-[10px] text-[14px]">
                <div className="flex justify-between">
                  <span className="text-[#555]">Order Number</span>
                  <span className="font-medium text-[#111]">#{order.orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555]">Tanggal</span>
                  <span className="font-medium text-[#111]">{order.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555]">Nama</span>
                  <span className="font-medium text-[#111]">{order.nama}</span>
                </div>
                <div className="flex justify-between pt-[10px] border-t border-[#e0e0e0]">
                  <span className="text-[#555]">Total</span>
                  <span className="font-medium text-[#111] text-[16px]">Rp {order.subtotal.toLocaleString("id-ID")}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-[12px] justify-center">
            <Link
              href="/"
              className="inline-block px-[28px] py-[12px] bg-[#111] text-white text-[13px] font-medium rounded-[4px] no-underline hover:bg-[#222] transition-colors"
            >
              Kembali ke Beranda
            </Link>
            <a
              href="https://wa.me/6285782404558"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[8px] px-[28px] py-[12px] bg-[#25D366] text-white text-[13px] font-medium rounded-[4px] no-underline hover:bg-[#1eb954] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hubungi Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
