"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const checkoutSteps = [
  { key: "cart", label: "Cart", path: "/cart" },
  { key: "checkout", label: "Checkout", path: "/checkout" },
  { key: "confirmation", label: "Confirmation", path: "/confirmation" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const pathname = usePathname();

  const isCheckoutFlow = pathname === "/cart" || pathname === "/checkout" || pathname === "/confirmation";
  const currentStepIndex = checkoutSteps.findIndex((s) => s.key === pathname.replace("/", ""));

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-[5%] h-[64px] flex items-center justify-between bg-white/90 backdrop-blur-[8px] border-b border-[#e0e0e0]">
        <Link href="/" className="font-serif text-[22px] text-[#111111] no-underline tracking-[-0.02em]">
          Nuevanesia
        </Link>

        {/* Checkout flow: Step indicator inside navbar */}
        {isCheckoutFlow && (
          <div className="flex items-center gap-0">
            {checkoutSteps.map((step, i) => {
              const isActive = i === currentStepIndex;
              const isDone = i < currentStepIndex;

              return (
                <div key={step.key} className="flex items-center">
                  <div className="flex items-center gap-[8px]">
                    <div
                      className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0 ${
                        isActive || isDone
                          ? "bg-[#111] text-white"
                          : "bg-[#f0f0f0] text-[#999]"
                      }`}
                    >
                      {isDone ? "✓" : i + 1}
                    </div>
                    <span
                      className={`text-[12px] font-medium hidden sm:inline ${
                        isActive || isDone ? "text-[#111]" : "text-[#999]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {i < checkoutSteps.length - 1 && (
                    <div
                      className={`w-[32px] sm:w-[48px] h-[2px] mx-[8px] sm:mx-[12px] ${
                        isDone ? "bg-[#111]" : "bg-[#e0e0e0]"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Regular nav (non-checkout) */}
        {!isCheckoutFlow && (
          <ul className="hidden md:flex gap-[32px] list-none items-center m-0 p-0">
            <li>
              <Link href="/#tenda" className="no-underline text-[#555555] text-[13px] font-medium tracking-[0.04em] uppercase transition-colors hover:text-[#111111]">Tenda</Link>
            </li>
            <li>
              <Link href="/#shelter" className="no-underline text-[#555555] text-[13px] font-medium tracking-[0.04em] uppercase transition-colors hover:text-[#111111]">Shelter</Link>
            </li>
            <li>
              <Link href="/#paket" className="no-underline text-[#555555] text-[13px] font-medium tracking-[0.04em] uppercase transition-colors hover:text-[#111111]">Paket</Link>
            </li>
            <li>
              <Link href="/#tenda" className="px-[20px] py-[9px] bg-[#111111] text-white !text-white text-[13px] font-medium tracking-[0.04em] uppercase rounded-[4px] hover:bg-[#222222] transition-colors no-underline">Pesan Sekarang</Link>
            </li>
          </ul>
        )}

        {/* Right side: cart + hamburger */}
        <div className="flex items-center gap-[16px]">
          <Link href="/cart" className="relative text-[#111] no-underline">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-[6px] -right-[8px] bg-[#111] text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {!isCheckoutFlow && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-[24px] h-[24px] bg-transparent border-none cursor-pointer p-0"
              aria-label="Menu"
            >
              <span className={`block w-full h-[2px] bg-[#111] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-full h-[2px] bg-[#111] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-full h-[2px] bg-[#111] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && !isCheckoutFlow && (
        <div className="fixed inset-0 z-[99] bg-white pt-[64px] flex flex-col md:hidden">
          <div className="flex flex-col px-[5%] py-[32px] gap-[24px]">
            <Link href="/#tenda" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Tenda</Link>
            <Link href="/#shelter" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Shelter</Link>
            <Link href="/#sleeping" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Sleeping System</Link>
            <Link href="/#sepatu" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Sepatu</Link>
            <Link href="/#masak" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Alat Masak</Link>
            <Link href="/#carrier" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Carrier</Link>
            <Link href="/#hardware" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Hardware</Link>
            <Link href="/#lightning" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Lightning & Electrical</Link>
            <Link href="/#accessories" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Accessories</Link>
            <Link href="/#laundry" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Laundry</Link>
            <Link href="/#paket" onClick={() => setMenuOpen(false)} className="text-[18px] font-medium text-[#111] no-underline">Paket</Link>
            <Link href="/#tenda" onClick={() => setMenuOpen(false)} className="mt-[8px] text-center py-[14px] bg-[#111] text-white !text-white text-[14px] font-medium rounded-[4px] no-underline">Pesan Sekarang</Link>
          </div>
        </div>
      )}
    </>
  );
}
