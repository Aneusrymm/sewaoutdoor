"use client";

import { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TentCard } from "./TentCard";
import { Tent } from "@/lib/data";

export function TentCarousel({ tents }: { tents: Tent[] }) {
  const id = useId().replace(/:/g, "");
  const nextClass = `next-${id}`;
  const prevClass = `prev-${id}`;
  const paginationClass = `pagination-${id}`;

  return (
    <div className="relative pb-[80px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        navigation={{
          nextEl: `.${nextClass}`,
          prevEl: `.${prevClass}`,
        }}
        pagination={{
          el: `.${paginationClass}`,
          clickable: true,
        }}
        className="w-full"
      >
        {tents.map((tent) => (
          <SwiperSlide key={tent.id} className="h-auto">
            <div className="h-full">
              <TentCard tent={tent} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation beneath the cards */}
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center gap-[24px] z-10 mt-[32px]">
        <button className={`${prevClass} w-[44px] h-[44px] rounded-full border border-[#e0e0e0] bg-white flex items-center justify-center text-[24px] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#111111]`}>
          <span className="mt-[-4px]">‹</span>
        </button>
        
        {/* Pagination Dots */}
        <div className={`${paginationClass} !w-auto flex gap-[8px] [&_.swiper-pagination-bullet]:!bg-black/20 [&_.swiper-pagination-bullet-active]:!bg-black [&_.swiper-pagination-bullet]:!w-[6px] [&_.swiper-pagination-bullet]:!h-[6px] [&_.swiper-pagination-bullet]:transition-colors`} />

        <button className={`${nextClass} w-[44px] h-[44px] rounded-full border border-[#e0e0e0] bg-white flex items-center justify-center text-[24px] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#111111]`}>
          <span className="mt-[-4px]">›</span>
        </button>
      </div>
    </div>
  );
}
