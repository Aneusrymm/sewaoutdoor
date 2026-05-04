"use client";

import Link from "next/link";
import { Tent } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function TentCard({ tent }: { tent: Tent }) {
  return (
    <article 
      className="group bg-white border border-[#e0e0e0] rounded-[10px] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] hover:-translate-y-[3px]"
      itemScope 
      itemType="https://schema.org/Product"
    >
      <div className="relative h-[220px] overflow-hidden bg-[#f0f0f0]">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="w-full h-full"
        >
          {tent.images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${img}')` }}
                role="img"
                aria-label={`Foto ${tent.name}`}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        {tent.tag && (
          <div className="absolute top-[12px] left-[12px] bg-white text-[#111111] text-[10px] font-medium tracking-[0.06em] uppercase px-[9px] py-[4px] rounded-[20px] z-10 pointer-events-none">
            {tent.tag}
          </div>
        )}
      </div>
      <div className="p-[16px_18px_20px]">
        <div className="text-[11px] text-[#999999] uppercase tracking-[0.08em] mb-[5px]" itemProp="category">
          {tent.name.includes("Dome") ? "Tenda Dome" : "Tenda Camping"}
        </div>
        <h3 className="font-serif text-[19px] leading-[1.2] mb-[4px] text-[#111111]" itemProp="name">
          {tent.name}
        </h3>
        <div className="text-[12px] text-[#555555] mb-[12px]">
          Kapasitas {tent.capacity} · {tent.weight}
        </div>
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mt-[14px] pt-[14px] border-t border-[#f0f0f0] gap-[10px]">
          <div className="text-[14px] font-medium text-[#111111]" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content="IDR" />
            <span itemProp="price" content={tent.price.toString()}>
              Rp {tent.price.toLocaleString("id-ID")}
            </span>
            {" "}
            <span className="text-[11px] text-[#999999] font-normal">/ malam</span>
          </div>
          <Link
            href={`/product/${tent.id}`}
            className="text-[12px] font-medium w-full xl:w-auto px-[16px] py-[8px] bg-[#111111] text-white rounded-[4px] border-none cursor-pointer transition-opacity hover:opacity-80 block text-center whitespace-nowrap"
          >
            See Option
          </Link>
        </div>
      </div>
    </article>
  );
}
