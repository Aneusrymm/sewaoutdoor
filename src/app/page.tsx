import { tents, shelters, sleepingSystems, sepatu, alatMasak, carrier, hardware, lightning, accessories, laundry, paket } from "@/lib/data";
import { TentCarousel } from "@/components/TentCarousel";
import { CategoryNav } from "@/components/CategoryNav";
import { Tent } from "@/lib/data";
import Link from "next/link";

interface SectionData {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  items: Tent[];
}

const sections: SectionData[] = [
  { id: "tenda", label: "Koleksi Tenda", title: "Pilih Tenda\nyang Tepat Untukmu", subtitle: "Tersedia berbagai kapasitas, cocok untuk solo hingga camping keluarga besar.", items: tents },
  { id: "shelter", label: "Koleksi Shelter", title: "Perlindungan Ekstra\nuntuk Petualanganmu", subtitle: "Flysheet, tarp tent, dan bivak untuk perlindungan tambahan dari cuaca.", items: shelters },
  { id: "sleeping", label: "Sleeping System", title: "Tidur Nyenyak\ndi Alam Terbuka", subtitle: "Sleeping bag, matras, dan bantal camping untuk istirahat yang berkualitas.", items: sleepingSystems },
  { id: "sepatu", label: "Sepatu & Alas Kaki", title: "Langkah Mantap\ndi Setiap Medan", subtitle: "Sepatu hiking, sandal gunung, dan pelindung kaki untuk segala kondisi.", items: sepatu },
  { id: "masak", label: "Alat Masak", title: "Masak Praktis\ndi Alam Bebas", subtitle: "Kompor, cooking set, dan peralatan masak portable untuk outdoor.", items: alatMasak },
  { id: "carrier", label: "Carrier & Tas", title: "Bawa Semua\nPerlengkapanmu", subtitle: "Carrier, daypack, dan aksesoris tas untuk pendakian dan hiking.", items: carrier },
  { id: "hardware", label: "Hardware", title: "Peralatan Pendukung\nCamping", subtitle: "Trekking pole, hammock, kursi dan meja lipat untuk kenyamanan outdoor.", items: hardware },
  { id: "lightning", label: "Lightning & Electrical", title: "Pencahayaan\n& Daya Listrik", subtitle: "Headlamp, lentera, powerbank, dan panel surya untuk kebutuhan listrik.", items: lightning },
  { id: "accessories", label: "Accessories & Support", title: "Aksesoris\nPendukung", subtitle: "Botol minum, dry bag, sarung tangan, dan perlengkapan pendukung lainnya.", items: accessories },
  { id: "laundry", label: "Laundry", title: "Layanan Cuci\n& Perawatan", subtitle: "Cuci profesional untuk tenda, sleeping bag, carrier, dan re-coating waterproof.", items: laundry },
  { id: "paket", label: "Paket", title: "Paket Hemat\nSiap Camping", subtitle: "Paket lengkap siap pakai untuk solo, couple, keluarga, dan pendakian.", items: paket },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full aspect-video md:aspect-auto md:h-[80vh] md:min-h-[600px] flex items-center justify-center bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white z-0"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 z-0"></div>

        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-600 text-[10px] md:text-sm font-medium mb-3 md:mb-6 tracking-wide uppercase">
            Four Son Rental
          </span>
          <h1 className="text-4xl md:text-8xl font-rubik text-white mb-2 md:mb-6 tracking-wider drop-shadow-lg">
            Sewa Alat Camping <br className="hidden md:block" /> di Bogor
          </h1>
          <p className="text-[10px] md:text-xl text-white/90 max-w-2xl mx-auto mb-4 md:mb-10 leading-relaxed line-clamp-2 md:line-clamp-none drop-shadow-md">
            Eksplorasi alam tanpa batas. Temukan tenda berkualitas untuk setiap petualanganmu dengan harga terjangkau.
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <CategoryNav sections={sections} />

      {/* Product Sections */}
      {sections.map((section, index) => (
        <div key={section.id}>
          {/* Horizontal Divider (between sections) */}
          {index > 0 && (
            <div className="px-[5%]">
              <hr className="max-w-[1200px] mx-auto border-0 border-t border-[#e0e0e0]" />
            </div>
          )}

          <section id={section.id} className="py-[56px] px-[5%] bg-white">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex flex-wrap justify-between items-end mb-[36px] gap-[16px]">
                <div>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-[#999999] mb-[10px]">
                    {section.label}
                  </p>
                  <h2 className="font-serif text-[clamp(28px,4vw,40px)] leading-[1.15] mb-[8px] text-[#111111]">
                    {section.title.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </h2>
                </div>
                <div className="flex flex-col items-end gap-[12px]">
                  <p className="text-[#555555] max-w-[480px] text-[14px] leading-[1.7] m-0">
                    {section.subtitle}
                  </p>
                  <Link
                    href={`/category/${section.id}`}
                    className="text-[13px] font-medium text-[#111] border border-[#e0e0e0] px-[20px] py-[8px] rounded-[4px] no-underline hover:bg-[#111] hover:text-white transition-colors"
                  >
                    View All →
                  </Link>
                </div>
              </div>

              <TentCarousel tents={section.items} />
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
