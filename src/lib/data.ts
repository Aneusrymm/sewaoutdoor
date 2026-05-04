export interface Tent {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  capacity: string;
  weight: string;
  condition: string;
  material: string;
  warning: string;
  purchaseDate: string;
  tag: string;
  category: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=800`;

const campImgs = [
  img("photo-1504280327326-5b6fb89db788"), img("photo-1523987355523-c7b5b0dd90a7"),
  img("photo-1517824806704-9040b037703b"), img("photo-1533575770044-f81501b17e47"),
  img("photo-1478131143081-80f7f84ca84d"), img("photo-1537225228614-56cc3556d7ed"),
  img("photo-1445308394109-4ec2920981b1"), img("photo-1510312305653-8ed496efae75"),
  img("photo-1498889444388-e67ea62c464b"),
];

function imgs(start: number): string[] {
  const r: string[] = [];
  for (let i = 0; i < 8; i++) r.push(campImgs[(start + i) % campImgs.length]);
  return r;
}

const t = (id: string, name: string, price: number, desc: string, start: number, cap: string, w: string, mat: string, warn: string, pd: string, tag: string, cat: string): Tent => ({
  id, name, price, description: desc, images: imgs(start), capacity: cap, weight: w, condition: "Bersih & Terawat", material: mat, warning: warn, purchaseDate: pd, tag, category: cat,
});

export const tents: Tent[] = [
  t("1","Tenda Dome Explorer 4P",50000,"Tenda dome kapasitas 4 orang dengan desain kokoh dan material waterproof.",0,"4 Orang","3kg","30 UPF, Waterproof 3000mm","Dilarang perapian di dalam/dekat tenda.","Des 2024","Ready","tenda"),
  t("2","Tenda Ultralight Pro 2P",35000,"Tenda ultralight kapasitas 2 orang untuk pendaki profesional.",1,"2 Orang","1.5kg","20D Nylon Silicone","Dilarang perapian di dalam/dekat tenda.","Jan 2024","Premium","tenda"),
  t("3","Tenda Family Cabin 6P",85000,"Tenda kabin ekstra luas untuk 6 orang. Atap tinggi.",2,"6 Orang","8kg","190T Polyester","Dilarang perapian di dalam/dekat tenda.","Feb 2024","Full Double Layer Premium","tenda"),
  t("4","Tenda Tunnel Adventure 4P",60000,"Tenda tunnel dengan ruang tamu luas. Tahan angin kencang.",3,"4 Orang","4.5kg","210T Ripstop","Dilarang perapian di dalam/dekat tenda.","Mar 2024","KONDISI 100% BARU","tenda"),
  t("5","Tenda Dome Kapasitas 2",40000,"Tenda dome ringan untuk 2 orang, cocok untuk hiking solo/duo.",4,"2 Orang","2kg","Polyester WP","Dilarang perapian di dalam/dekat tenda.","Apr 2024","Ready","tenda"),
  t("6","Tenda Dome Premium 4P",70000,"Tenda dome premium full double layer dengan ventilasi optimal.",5,"4 Orang","3.5kg","210T Ripstop DL","Dilarang perapian di dalam/dekat tenda.","Mei 2024","Full Double Layer Premium","tenda"),
  t("7","Tenda Ultralight Solo",30000,"Tenda ultralight 1 orang untuk backpacker minimalis.",6,"1 Orang","1kg","15D Silnylon","Dilarang perapian di dalam/dekat tenda.","Jun 2024","Premium","tenda"),
  t("8","Tenda Glamping 8P",120000,"Tenda besar glamping untuk 8 orang. Khusus life member.",7,"8 Orang","12kg","Oxford 300D","Dilarang perapian di dalam/dekat tenda.","Jul 2024","Khusus Life Member","tenda"),
  t("9","Tenda Dome Baru 3P",45000,"Tenda dome kondisi baru untuk 3 orang.",0,"3 Orang","2.5kg","190T Poly WP","Dilarang perapian di dalam/dekat tenda.","Ags 2024","KONDISI 100% BARU","tenda"),
];

export const shelters: Tent[] = [
  t("s1","Shelter Flysheet 3x4m",25000,"Flysheet 3x4 meter multifungsi.",4,"4-6 Orang","1.2kg","210T Oxford WP","Hindari pemasangan dekat api.","Apr 2024","Premium","shelter"),
  t("s2","Tarp Tent Ultralight",30000,"Tarp tent ringan tanpa frame.",5,"2 Orang","0.8kg","15D Silnylon","Jangan gunakan mesin cuci.","Mei 2024","","shelter"),
  t("s3","Shelter Hexagonal",45000,"Shelter segi enam untuk grup besar.",6,"8-10 Orang","2.5kg","300D Oxford","Pastikan tali pancang kuat.","Jun 2024","Premium","shelter"),
  t("s4","Bivak Darurat Ponco",15000,"Multifungsi jas hujan dan bivak darurat.",7,"1 Orang","0.4kg","20D Ripstop","Hindari ranting tajam.","Jul 2024","","shelter"),
];

export const sleepingSystems: Tent[] = [
  t("sl1","Sleeping Bag Polar",30000,"Sleeping bag hangat untuk suhu hingga 5°C.",0,"1 Orang","1.2kg","Hollow Fiber","Jangan cuci air panas.","Mar 2024","Laundry","sleeping"),
  t("sl2","Matras Foam Lipat",15000,"Matras busa lipat ringan.",2,"1 Orang","0.5kg","EVA Foam","Simpan di tempat kering.","Apr 2024","Premium","sleeping"),
  t("sl3","Sleeping Pad Inflatable",25000,"Matras tiup ultralight.",4,"1 Orang","0.6kg","40D Nylon TPU","Jauhkan dari benda tajam.","Mei 2024","Laundry","sleeping"),
  t("sl4","Bantal Tiup Camping",10000,"Bantal tiup kompak dan ringan.",6,"1 Orang","0.1kg","TPU + Suede","Jangan tiup berlebihan.","Jun 2024","Premium","sleeping"),
];

export const sepatu: Tent[] = [
  t("sp1","Sepatu Hiking Waterproof",35000,"Sepatu hiking waterproof sol Vibram.",1,"Size 40-44","0.8kg","Leather + Gore-Tex","Keringkan setelah pakai.","Jan 2024","Premium","sepatu"),
  t("sp2","Sandal Gunung",15000,"Sandal gunung tali adjustable.",3,"Size 39-44","0.4kg","Rubber + Webbing","Bukan untuk batu tajam.","Feb 2024","Grade A","sepatu"),
  t("sp3","Gaiter Waterproof",10000,"Pelindung kaki dari lumpur.",5,"Universal","0.2kg","Oxford 600D","Cuci setelah pakai.","Mar 2024","Grade B","sepatu"),
  t("sp4","Sepatu Trail Running",30000,"Sepatu trail running ringan.",7,"Size 40-44","0.5kg","Mesh + Rubber","Bukan untuk salju.","Apr 2024","Grade A","sepatu"),
];

export const alatMasak: Tent[] = [
  t("am1","Kompor Portable",20000,"Kompor gas portable lipat.",2,"1 Set","0.3kg","Stainless Steel","Gunakan di area terbuka.","Jan 2024","Recommended","masak"),
  t("am2","Cooking Set Nesting",25000,"Set panci wajan nesting.",4,"3-4 Orang","0.7kg","Anodized Aluminum","Cuci setelah pakai.","Feb 2024","Premium","masak"),
  t("am3","Teko Camping 1.5L",10000,"Teko aluminium ringan.",6,"1.5 Liter","0.3kg","Aluminum","Hati-hati air mendidih.","Mar 2024","Sedang Habis","masak"),
  t("am4","Tabung Gas Kaleng",15000,"Tabung gas butane 230g.",0,"230g","0.4kg","Butane Gas","Jauhkan dari api.","Apr 2024","Liwet Specialist","masak"),
];

export const carrier: Tent[] = [
  t("c1","Carrier 60L",40000,"Carrier 60L frame internal.",3,"60 Liter","1.8kg","Nylon 420D","Jangan melebihi kapasitas.","Jan 2024","Promo","carrier"),
  t("c2","Daypack 35L",20000,"Daypack 35L hiking harian.",5,"35 Liter","0.8kg","Polyester 300D","Gunakan rain cover.","Feb 2024","Turun Harga","carrier"),
  t("c3","Carrier 80L",55000,"Carrier 80L ekspedisi panjang.",7,"80 Liter","2.2kg","Cordura 500D","Atur beban merata.","Mar 2024","Ultra Light","carrier"),
  t("c4","Rain Cover Carrier",10000,"Cover hujan carrier 50-80L.",1,"50-80L","0.15kg","Nylon WP","Simpan kering.","Apr 2024","Light","carrier"),
];

export const hardware: Tent[] = [
  t("h1","Trekking Pole Carbon",15000,"Trekking pole carbon ultralight.",0,"1 Pasang","0.4kg","Carbon Fiber","Bukan untuk panjat.","Jan 2024","","hardware"),
  t("h2","Hammock Ultralight",20000,"Hammock ringan kapasitas 150kg.",2,"1 Orang","0.5kg","Parachute Nylon","Pastikan ikatan kuat.","Feb 2024","","hardware"),
  t("h3","Kursi Lipat Camping",15000,"Kursi lipat portable ringan.",4,"1 Orang","1kg","Aluminum + Oxford","Max 120kg.","Mar 2024","","hardware"),
  t("h4","Meja Lipat Camping",20000,"Meja lipat aluminium kompak.",6,"1 Set","1.5kg","Aluminum Alloy","Jangan benda berat.","Apr 2024","","hardware"),
];

export const lightning: Tent[] = [
  t("l1","Headlamp LED 300lm",10000,"Headlamp LED 300 lumen 3 mode.",1,"1 Unit","0.1kg","ABS Plastic","Gunakan baterai sesuai.","Jan 2024","Baterai","lightning"),
  t("l2","Lentera Camping LED",15000,"Lentera LED rechargeable 12 jam.",3,"1 Unit","0.3kg","ABS + Silicone","Charge penuh dulu.","Feb 2024","Charger","lightning"),
  t("l3","Powerbank 20000mAh",15000,"Powerbank besar untuk alam.",5,"20000mAh","0.4kg","Li-Polymer","Hindari suhu tinggi.","Mar 2024","Charger","lightning"),
  t("l4","Solar Panel Portable",25000,"Panel surya 15W portable.",7,"15W Output","0.5kg","Monocrystalline","Jangan lipat saat panas.","Apr 2024","Charger","lightning"),
];

export const accessories: Tent[] = [
  t("a1","Botol Minum 1L",5000,"Botol minum BPA-free 1 liter.",0,"1 Liter","0.15kg","Tritan BPA-Free","Jangan air >60°C.","Jan 2024","Premium","accessories"),
  t("a2","Dry Bag 20L",10000,"Dry bag waterproof.",2,"20 Liter","0.2kg","PVC Tarpaulin","Tutup roll-top rapat.","Feb 2024","Sewa","accessories"),
  t("a3","Sarung Tangan Hiking",8000,"Sarung tangan touchscreen.",4,"1 Pasang","0.05kg","Fleece + Silicone","Cuci tangan dulu.","Mar 2024","Discontinue","accessories"),
  t("a4","Topi Rimba",8000,"Topi rimba anti matahari.",6,"All Size","0.1kg","Cotton Canvas","Jangan pakai pemutih.","Apr 2024","Jual","accessories"),
];

export const laundry: Tent[] = [
  { ...t("la1","Cuci Tenda Dome",50000,"Layanan cuci profesional tenda dome.",1,"1 Tenda","-","Eco-Friendly Detergent","Proses 2-3 hari kerja.","-","Tersedia","laundry"), condition: "Layanan" },
  { ...t("la2","Cuci Sleeping Bag",35000,"Layanan cuci sleeping bag.",3,"1 SB","-","Eco-Friendly Detergent","Proses 2-3 hari kerja.","-","Tersedia","laundry"), condition: "Layanan" },
  { ...t("la3","Cuci Carrier",40000,"Layanan cuci carrier.",5,"1 Carrier","-","Eco-Friendly Detergent","Proses 2-3 hari kerja.","-","Habis","laundry"), condition: "Layanan" },
  { ...t("la4","Waterproof Coating",45000,"Re-coating waterproof.",7,"1 Item","-","DWR Coating","Proses 3-5 hari kerja.","-","Tersedia","laundry"), condition: "Layanan" },
];

export const paket: Tent[] = [
  t("p1","Paket Solo Camping",75000,"Paket lengkap solo: tenda 2P, SB, matras, headlamp.",0,"1 Orang","4kg total","Paket Komplit","Cek kelengkapan saat kembali.","-","Ready","paket"),
  t("p2","Paket Couple Camping",120000,"Paket berdua: tenda 2P, 2 SB, 2 matras, lentera, cooking set.",2,"2 Orang","7kg total","Paket Komplit","Cek kelengkapan saat kembali.","-","Premium","paket"),
  t("p3","Paket Family Camping",200000,"Paket keluarga: tenda 6P, 4 SB, 4 matras, cooking set.",4,"4-6 Orang","15kg total","Paket Komplit","Cek kelengkapan saat kembali.","-","Premium","paket"),
  t("p4","Paket Pendakian",100000,"Paket pendakian: carrier 60L, SB, matras, trekking pole.",6,"1 Orang","5kg total","Paket Komplit","Cek kelengkapan saat kembali.","-","Ready","paket"),
];

export const allProducts: Tent[] = [...tents,...shelters,...sleepingSystems,...sepatu,...alatMasak,...carrier,...hardware,...lightning,...accessories,...laundry,...paket];

export const categoryMap: Record<string, { items: Tent[]; label: string }> = {
  tenda: { items: tents, label: "Tenda" },
  shelter: { items: shelters, label: "Shelter" },
  sleeping: { items: sleepingSystems, label: "Sleeping System" },
  sepatu: { items: sepatu, label: "Sepatu & Alas Kaki" },
  masak: { items: alatMasak, label: "Alat Masak" },
  carrier: { items: carrier, label: "Carrier & Tas" },
  hardware: { items: hardware, label: "Hardware" },
  lightning: { items: lightning, label: "Lightning & Electrical" },
  accessories: { items: accessories, label: "Accessories & Support" },
  laundry: { items: laundry, label: "Laundry" },
  paket: { items: paket, label: "Paket" },
};
