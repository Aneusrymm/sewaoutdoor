"use client";

import { useState } from "react";
import { Tent } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export function ProductDetail({ tent }: { tent: Tent }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [duration, setDuration] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const durations = [
    { label: "1 Malam", nights: 1, note: "" },
    { label: "2 Malam", nights: 2, note: "" },
    { label: "3 Malam", nights: 3, note: "Hemat 10%" },
  ];

  const totalPrice =
    duration === 3
      ? Math.round(tent.price * 3 * quantity * 0.9)
      : tent.price * duration * quantity;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] md:gap-[56px] max-w-[1200px] mx-auto pb-[80px]">
      {/* Left Column - Gallery */}
      <div>
        <div
          className="w-full aspect-[4/3] rounded-[10px] bg-[#f0f0f0] bg-cover bg-center transition-opacity duration-300"
          style={{ backgroundImage: `url('${tent.images[activeImageIndex]}')` }}
          role="img"
          aria-label="Foto utama tenda"
        ></div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-[8px] mt-[12px]">
          {tent.images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`aspect-square rounded-[4px] bg-cover bg-center cursor-pointer border-2 transition-all duration-200 ${
                activeImageIndex === idx
                  ? "border-[#111111] opacity-100"
                  : "border-transparent opacity-65 hover:opacity-90"
              }`}
              style={{ backgroundImage: `url('${img}')` }}
              role="button"
              tabIndex={0}
              aria-label={`Foto tenda ${idx + 1}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Column - Details */}
      <div>
        <div className="text-[11px] uppercase tracking-[0.12em] text-[#999999] mb-[10px]">
          {tent.name.includes("Dome") ? "Tenda Dome" : "Tenda Camping"} · Bandung
        </div>
        <h1 className="font-serif text-[clamp(26px,3vw,36px)] leading-[1.1] mb-[6px] text-[#111111]">
          {tent.name}
        </h1>
        <div className="flex items-baseline gap-[8px] mb-[28px]">
          <span className="text-[22px] font-medium text-[#111111]">
            Rp {tent.price.toLocaleString("id-ID")}
          </span>
          <span className="text-[13px] text-[#999999]">/ malam / tenda</span>
        </div>

        {/* Duration Selector */}
        <div className="text-[12px] uppercase tracking-[0.1em] text-[#999999] mb-[10px]">
          Pilih Durasi
        </div>
        <div className="flex gap-[8px] mb-[20px] flex-wrap">
          {durations.map((d) => (
            <button
              key={d.nights}
              onClick={() => setDuration(d.nights)}
              className={`px-[16px] py-[8px] border rounded-[20px] text-[13px] transition-all duration-200 ${
                duration === d.nights
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white text-[#111111] border-[#e0e0e0] hover:bg-[#111111] hover:text-white hover:border-[#111111]"
              }`}
            >
              {d.label}
              {d.note && (
                <span
                  className={`text-[11px] ml-[4px] ${
                    duration === d.nights ? "text-white/60" : "text-[#999999]"
                  }`}
                >
                  {d.note}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Quantity and Cart */}
        <div className="text-[12px] uppercase tracking-[0.1em] text-[#999999] mb-[10px]">
          Jumlah Tenda
        </div>
        <div className="flex items-center gap-[12px] mb-[28px] flex-wrap">
          <div className="flex items-center border border-[#e0e0e0] rounded-[4px] overflow-hidden bg-white">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-[36px] h-[40px] bg-[#f9f9f9] border-none text-[16px] text-[#111111] hover:bg-[#f0f0f0] transition-colors"
              aria-label="Kurangi jumlah"
            >
              −
            </button>
            <div className="w-[44px] text-center text-[14px] font-medium text-[#111111]">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-[36px] h-[40px] bg-[#f9f9f9] border-none text-[16px] text-[#111111] hover:bg-[#f0f0f0] transition-colors"
              aria-label="Tambah jumlah"
            >
              +
            </button>
          </div>
          <button
            onClick={() => addToCart(tent, quantity, duration)}
            className="flex-1 min-w-[140px] h-[40px] bg-[#111111] text-white rounded-[4px] text-[14px] font-medium tracking-[0.02em] hover:opacity-80 transition-opacity cursor-pointer"
          >
            + Tambah ke Keranjang
          </button>
        </div>

        {/* Total Price */}
        <div className="py-[14px] border-y border-[#e0e0e0] flex justify-between items-center mb-[28px] text-[14px] text-[#111111]">
          <span>
            Total ({duration} malam × {quantity} tenda)
          </span>
          <strong className="text-[18px]">
            Rp {totalPrice.toLocaleString("id-ID")}
          </strong>
        </div>

        {/* Description Section */}
        <p className="font-serif text-[17px] mb-[10px] pt-[24px] border-t border-[#f0f0f0] text-[#111111]">
          Description
        </p>
        <p className="text-[14px] text-[#555555] leading-[1.8] mb-[24px]">
          {tent.description}
        </p>

        {/* Product Information Table */}
        <p className="font-serif text-[17px] mb-[10px] pt-[24px] border-t border-[#f0f0f0] text-[#111111]">
          Product Information
        </p>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-[#f0f0f0] last:border-b-0">
              <td className="py-[10px] text-[13px] text-[#555555] w-[38%] align-top">
                Kapasitas
              </td>
              <td className="py-[10px] text-[13px] font-medium text-[#111111] align-top">
                {tent.capacity} Orang
              </td>
            </tr>
            <tr className="border-b border-[#f0f0f0] last:border-b-0">
              <td className="py-[10px] text-[13px] text-[#555555] align-top">Berat</td>
              <td className="py-[10px] text-[13px] font-medium text-[#111111] align-top">
                {tent.weight}
              </td>
            </tr>
            <tr className="border-b border-[#f0f0f0] last:border-b-0">
              <td className="py-[10px] text-[13px] text-[#555555] align-top">Kondisi</td>
              <td className="py-[10px] text-[13px] font-medium text-[#111111] align-top">
                Bersih & Terawat
              </td>
            </tr>
            <tr className="border-b border-[#f0f0f0] last:border-b-0">
              <td className="py-[10px] text-[13px] text-[#555555] align-top">Material</td>
              <td className="py-[10px] text-[13px] font-medium text-[#111111] align-top">
                {tent.material}
              </td>
            </tr>
            <tr className="border-b border-[#f0f0f0] last:border-b-0">
              <td className="py-[10px] text-[13px] text-[#555555] align-top">Perhatian</td>
              <td className="py-[10px] text-[13px] font-medium text-[#111111] align-top">
                <ul className="flex flex-col gap-[6px] pl-0 list-none m-0">
                  <li className="flex gap-[8px] items-start text-[#222222]">
                    <span className="text-[11px] text-[#999999] mt-[2px] shrink-0">
                      ⚠
                    </span>
                    Dilarang melakukan aktifitas segala perapian didalam ataupun
                    di dekat tenda
                  </li>
                  <li className="flex gap-[8px] items-start text-[#222222]">
                    <span className="text-[11px] text-[#999999] mt-[2px] shrink-0">
                      ⚠
                    </span>
                    Dilarang melipat tenda sembari merokok!
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="border-b border-[#f0f0f0] last:border-b-0">
              <td className="py-[10px] text-[13px] text-[#555555] align-top">
                Pembelian
              </td>
              <td className="py-[10px] text-[13px] font-medium text-[#111111] align-top">
                {tent.purchaseDate}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
