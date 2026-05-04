export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold mb-4 text-black">Nuevanesia - Sewa Alat Camping di Bandung</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Rental tenda camping Bandung lengkap dan terpercaya. Tersedia tenda dome, tenda kapasitas 2–6 orang, waterproof, anti angin, dan cocok untuk hiking, camping keluarga, hingga event outdoor. Booking mudah, harga terjangkau, bisa antar-jemput area Bandung. Sewa tenda sekarang di Nuevanesia.
          </p>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nuevanesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
