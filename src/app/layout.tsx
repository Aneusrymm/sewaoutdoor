import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartToast } from "@/components/CartToast";

export const metadata: Metadata = {
  title: "Four Son | Sewa Alat Camping di Bogor",
  description: "Rental tenda camping Bogor lengkap dan terpercaya. Tersedia tenda dome, tenda kapasitas 2–6 orang, waterproof, anti angin, dan cocok untuk hiking, camping keluarga.",
  keywords: ["sewa tenda bogor", "rental alat camping bogor", "sewa alat camping di bogor", "Four Son", "tenda dome bogor"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="font-sans bg-white text-[#111111] min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <CartToast />
          <main className="flex-grow pt-[64px]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
