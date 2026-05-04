import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartToast } from "@/components/CartToast";

export const metadata: Metadata = {
  title: "Nuevanesia | Sewa Alat Camping di Bandung",
  description: "Rental tenda camping Bandung lengkap dan terpercaya. Tersedia tenda dome, tenda kapasitas 2–6 orang, waterproof, anti angin, dan cocok untuk hiking, camping keluarga.",
  keywords: ["sewa tenda bandung", "rental alat camping bandung", "sewa alat camping di bandung", "Nuevanesia", "tenda dome bandung"],
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
