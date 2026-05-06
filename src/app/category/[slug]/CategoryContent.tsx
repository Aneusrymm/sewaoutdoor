"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import { categoryMap } from "@/lib/data";
import { TentCard } from "@/components/TentCard";

export default function CategoryContent({ slug }: { slug: string }) {
  const cat = categoryMap[slug];
  const [sort, setSort] = useState<"low" | "high">("low");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tagOpen, setTagOpen] = useState(false);

  if (!cat) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-[1200px] mx-auto px-[5%] py-[48px] text-center">
          <h1 className="font-serif text-[32px] text-[#111] mb-[16px]">Kategori tidak ditemukan</h1>
          <Link href="/" className="text-[13px] text-[#555] hover:text-[#111] no-underline">← Kembali</Link>
        </div>
      </div>
    );
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const availableTags = useMemo(() => {
    const tags = [...new Set(cat.items.map((item) => item.tag).filter(Boolean))];
    return tags;
  }, [cat.items]);

  const filtered = useMemo(() => {
    let items = [...cat.items];
    if (selectedTags.length > 0) {
      items = items.filter((item) => selectedTags.includes(item.tag));
    }
    items.sort((a, b) => (sort === "low" ? a.price - b.price : b.price - a.price));
    return items;
  }, [cat.items, selectedTags, sort]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-[5%] py-[32px]">
        {/* Back */}
        <Link href={`/#${slug}`} className="inline-flex items-center gap-[6px] text-[13px] text-[#555] hover:text-[#111] no-underline transition-colors mb-[24px]">
          ← Kembali
        </Link>

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-[16px] mb-[32px]">
          <h1 className="font-serif text-[28px] text-[#111] m-0">
            {cat.label} <span className="text-[16px] text-[#999] font-sans font-normal">— {filtered.length} items</span>
          </h1>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "low" | "high")}
            className="px-[16px] py-[10px] border border-[#e0e0e0] rounded-[6px] text-[13px] text-[#111] bg-white outline-none cursor-pointer"
          >
            <option value="low">Harga Terendah</option>
            <option value="high">Harga Tertinggi</option>
          </select>
        </div>

        <div className={`grid grid-cols-1 ${availableTags.length > 0 ? "md:grid-cols-[220px_1fr]" : ""} gap-[32px]`}>
          {/* Left Sidebar: Tag Filter */}
          {availableTags.length > 0 && (
            <div>
              <button
                onClick={() => setTagOpen(!tagOpen)}
                className="w-full flex items-center justify-between px-[16px] py-[12px] border border-[#e0e0e0] rounded-[6px] bg-white text-[13px] font-medium text-[#111] cursor-pointer"
              >
                <span>Tag</span>
                <span className="text-[16px]">{tagOpen ? "−" : "+"}</span>
              </button>

              {tagOpen && (
                <div className="mt-[8px] border border-[#e0e0e0] rounded-[6px] p-[16px] flex flex-col gap-[12px]">
                  {availableTags.map((tag) => (
                    <label key={tag} className="flex items-center gap-[10px] cursor-pointer text-[13px] text-[#333]">
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag)}
                        onChange={() => toggleTag(tag)}
                        className="w-[16px] h-[16px] accent-[#111] cursor-pointer"
                      />
                      {tag}
                    </label>
                  ))}
                </div>
              )}

              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="mt-[8px] text-[12px] text-[#999] hover:text-[#111] bg-transparent border-none cursor-pointer p-0 transition-colors"
                >
                  Hapus semua filter
                </button>
              )}
            </div>
          )}

          {/* Right: Product Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-[60px] text-center text-[14px] text-[#999]">
                Tidak ada produk dengan filter ini.
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px]">
                {filtered.map((item) => (
                  <TentCard key={item.id} tent={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
