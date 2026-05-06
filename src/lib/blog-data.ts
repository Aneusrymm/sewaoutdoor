export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "5-tempat-camping-terbaik-di-bogor",
    title: "5 Tempat Camping Terbaik di Bogor untuk Keluarga",
    excerpt: "Bogor memiliki banyak pilihan tempat camping yang ramah keluarga dengan fasilitas lengkap. Simak rekomendasinya!",
    content: `
      <p>Bogor selalu menjadi destinasi favorit bagi warga Jabodetabek untuk melepas penat. Salah satu kegiatan yang paling digemari adalah camping. Berikut adalah 5 rekomendasi tempat camping di Bogor yang cocok untuk keluarga:</p>
      
      <h3>1. Gunung Geulis Camp Area</h3>
      <p>Tempat ini menawarkan fasilitas glamping dan camping ground yang luas dengan pemandangan perbukitan yang hijau.</p>
      
      <h3>2. Highland Camp Curug Panjang</h3>
      <p>Jika Anda menyukai suasana hutan pinus dan dekat dengan air terjun, tempat ini adalah pilihannya.</p>
      
      <h3>3. Gayatri Mountain Camp</h3>
      <p>Menawarkan pemandangan langsung ke Gunung Salak dan Gunung Gede Pangrango yang sangat megah.</p>
      
      <h3>4. Mandalawangi Cibodas</h3>
      <p>Tempat camping klasik yang berada di kaki Gunung Gede Pangrango dengan udara yang sangat sejuk.</p>
      
      <h3>5. Citizenship Camping Ground</h3>
      <p>Area camping yang luas dan tertata rapi, sangat cocok untuk kegiatan komunitas atau keluarga besar.</p>
      
      <p>Pastikan Anda membawa perlengkapan camping yang memadai. Jika belum punya, Anda bisa menyewanya di <strong>Four Son Rental Bogor</strong>!</p>
    `,
    image: "https://images.unsplash.com/photo-1504280327326-5b6fb89db788?auto=format&fit=crop&q=80&w=1200",
    date: "2024-05-01",
    author: "Admin Four Son",
    category: "Destinasi",
  },
  {
    id: "2",
    slug: "tips-memilih-tenda-camping-untuk-pemula",
    title: "Tips Memilih Tenda Camping untuk Pemula",
    excerpt: "Jangan salah pilih! Berikut adalah panduan memilih tenda yang tepat agar camping Anda nyaman dan aman.",
    content: `
      <p>Memilih tenda pertama bisa jadi membingungkan. Berikut adalah beberapa hal yang harus Anda perhatikan sebelum membeli atau menyewa tenda:</p>
      
      <h3>1. Kapasitas Tenda</h3>
      <p>Selalu pilih tenda dengan kapasitas satu orang lebih banyak dari jumlah orang yang akan tidur di dalamnya agar ada ruang untuk barang bawaan.</p>
      
      <h3>2. Sistem Double Layer</h3>
      <p>Untuk camping di Indonesia yang curah hujannya tinggi, sangat disarankan menggunakan tenda double layer untuk menghindari kondensasi dan kebocoran.</p>
      
      <h3>3. Berat Tenda</h3>
      <p>Jika Anda berencana mendaki gunung, pilih tenda ultralight. Namun jika untuk camping ceria di pinggir mobil, berat tidak terlalu menjadi masalah.</p>
      
      <h3>4. Kemudahan Pemasangan</h3>
      <p>Pilih tenda dome yang menggunakan sistem frame yang mudah dipasang, terutama bagi Anda yang baru pertama kali camping.</p>
      
      <p>Butuh tenda berkualitas? Cek koleksi kami di menu Tenda!</p>
    `,
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1200",
    date: "2024-04-15",
    author: "Admin Four Son",
    category: "Tips & Trik",
  }
];
