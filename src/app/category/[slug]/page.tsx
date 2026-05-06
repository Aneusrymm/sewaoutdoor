import { categoryMap } from "@/lib/data";
import CategoryContent from "./CategoryContent";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoryMap[slug];

  if (!cat) {
    return {
      title: "Kategori Tidak Ditemukan | Four Son",
    };
  }

  return {
    title: `Sewa ${cat.label} Bogor | Four Son Rental`,
    description: `Sewa ${cat.label.toLowerCase()} di Bogor dengan harga terjangkau. Tersedia berbagai pilihan ${cat.label.toLowerCase()} berkualitas untuk kebutuhan outdoor Anda di Four Son Rental.`,
    openGraph: {
      title: `Sewa ${cat.label} Bogor | Four Son Rental`,
      description: `Sewa ${cat.label.toLowerCase()} berkualitas di Bogor.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  return <CategoryContent slug={slug} />;
}
