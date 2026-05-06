import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Artikel Tidak Ditemukan | Four Son" };
  }

  return {
    title: `${post.title} | Four Son Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-[800px] mx-auto px-[5%]">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-black mb-8 block">
          ← Kembali ke Blog
        </Link>
        
        <div className="mb-10 text-center">
          <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-4">
            {post.category}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-black leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-sm text-gray-500 gap-4">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>

        <div className="aspect-video overflow-hidden rounded-2xl mb-12 shadow-xl">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-sans"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-20 pt-10 border-t border-gray-100 text-center">
          <h3 className="font-serif text-xl mb-6">Butuh Perlengkapan Camping?</h3>
          <Link 
            href="/"
            className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Lihat Koleksi Kami
          </Link>
        </div>
      </div>
    </article>
  );
}
