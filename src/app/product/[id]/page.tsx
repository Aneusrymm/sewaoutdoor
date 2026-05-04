import { allProducts } from "@/lib/data";
import { ProductDetail } from "@/components/ProductDetail";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const tent = allProducts.find((t) => t.id === resolvedParams.id);

  if (!tent) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <Link
        href="/"
        className="inline-flex items-center gap-[6px] text-[13px] text-[#555555] hover:text-[#111111] transition-colors px-[5%] py-[24px] font-sans"
      >
        ← Kembali ke semua tenda
      </Link>
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <ProductDetail tent={tent} />
      </div>
    </div>
  );
}
