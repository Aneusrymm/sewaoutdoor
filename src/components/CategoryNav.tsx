"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface Section {
  id: string;
  label: string;
}

export function CategoryNav({ sections }: { sections: Section[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 200 : -200, behavior: "smooth" });
  };

  return (
    <div className="fixed top-[64px] left-0 right-0 z-[50] bg-white border-b border-[#e0e0e0]">
      <div className="max-w-[1200px] mx-auto relative flex items-center">
        {/* Left arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 w-[32px] h-full bg-gradient-to-r from-white via-white/90 to-transparent border-none cursor-pointer flex items-center justify-start pl-[4px] text-[18px] text-[#555]"
            aria-label="Scroll left"
          >
            ‹
          </button>
        )}

        {/* Scrollable buttons */}
        <div
          ref={scrollRef}
          className="flex gap-[6px] py-[10px] px-[16px] overflow-x-auto hide-scrollbar w-full"
        >
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/category/${section.id}`}
              className="px-[14px] py-[7px] text-[12px] font-medium text-[#555] bg-[#f5f5f5] rounded-[20px] no-underline whitespace-nowrap hover:bg-[#111] hover:text-white transition-colors flex-shrink-0"
            >
              {section.label}
            </Link>
          ))}
        </div>

        {/* Right arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 w-[32px] h-full bg-gradient-to-l from-white via-white/90 to-transparent border-none cursor-pointer flex items-center justify-end pr-[4px] text-[18px] text-[#555]"
            aria-label="Scroll right"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}
