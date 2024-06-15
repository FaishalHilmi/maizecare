import blightImage from "./blight.png";
import commonImage from "./commonrust.png";
import grayLeafImage from "./grayleaf.png";

export const blight = {
  name: "Blight",
  description:
    "Disebabkan oleh jamur dan bakteri tertentu, seperti Exserohilum turcicum dan Pantoea stewartii. Gejalanya biasanya terlihat sebagai bercak-bercak pada daun jagung yang awalnya kecil dan berwarna hijau atau abu-abu.",
  handling: [
    "Bergiliran tanaman dengan tanaman non-terserang dapat membantu mengurangi keberadaan patogen di tanah.",
    "Memilih varietas jagung yang tahan terhadap jenis blight yang umum di wilayah Anda.",
    "Pengendalian kimia dapat diterapkan untuk mengurangi populasi patogen di lapangan.",
  ],
  image: blightImage,
  video: "https://www.youtube.com/embed/-Ffu_xiLrdU?si=BxLwGZPWSjW0dUK3",
};

export const grayLeafSpot = {
  name: "Gray Leaf Spot",
  description:
    "Disebabkan oleh patogen seperti virus, bakteri, dan  jamur, tidak memakan tanaman tetapi merusak proses internalnya. Hal ini mengakibatkan gangguan pertumbuhan dan perkembangan tanaman, menurunkan produksi, bahkan bisa menyebabkan kematian tanaman.",
  handling: [
    "Gunakan benih yang tahan atau toleran terhadap penyakit bercak daun GLS",
    "Bersihkan lahan dari gulma dan sisa-sisa tanaman yang berpotensi menjadi inang bagi spora penyakit bercak daun GLS.",
    "Atur jarak tanam agar tidak terlalu rapat, terutama di musim hujan, untuk menjaga kelembapan yang ideal.",
    "Lakukan pergiliran tanaman atau varietas untuk memutus siklus hidup patogen.",
    " Gunakan fungisida yang dikombinasikan dengan insektisida sebelum penanaman.",
  ],
  image: grayLeafImage,
  video: "https://www.youtube.com/embed/1foL4zGaDAE?si=PLVixYHdnC7uLCLs",
};

export const commonRust = {
  name: "Common Rust",
  description:
    "Disebabkan oleh patogen Puccinia polysora, merupakan salah satu penyakit utama pada tanaman jagung. Penyakit ini sangat mengganggu karena sering muncul pada musim hujan, menutupi daun dengan lapisan karat, sehingga daun tidak mampu melakukan fotosintesis dengan optimal.",
  handling: [
    "Lakukan pengolahan tanah maksimal dengan menambahkan kapur dolomit dan kompos atau pupuk kandang.",
    "Bersihkan lahan dari sisa tanaman dan gulma yang berpotensi menjadi inang alternatif bagi spora patogen.",
    "Gunakan benih jagung bermutu dan unggul yang tahan terhadap penyakit karat daun.",
    "Tingkatkan dosis pupuk KCL pada pupuk dasar dari 100 kg per hektar menjadi 150 kg per hektar.",
    "Semprotkan pupuk daun yang mengandung kalsium dan boron pada usia tanaman 14 hari setelah tanam.",
    " Gunakan fungisida yang dikombinasikan dengan insektisida sebelum penanaman.",
  ],
  image: commonImage,
  video: "https://www.youtube.com/embed/eKQO4-kqLho?si=x3rEXbxodw6A3hFP",
};
