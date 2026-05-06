import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Artikel Camping | Four Son Rental Bogor",
  description: "Dapatkan tips camping, rekomendasi tempat camping di Bogor, dan panduan alat outdoor terbaru di blog Four Son Rental.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <h1 className="font-serif text-[40px] text-[#111] mb-12 text-center">Blog & Artikel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-video overflow-hidden rounded-xl mb-6 bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[12px] font-medium text-black uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <h2 className="font-serif text-2xl text-black mb-3 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-[12px] text-gray-400 gap-4">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
