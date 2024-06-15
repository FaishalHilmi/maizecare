import jagung from "../assets/jagung.png";

function About() {
  return (
    <section className="isolate px-6 py-14 max-w-screen-xl mx-auto" id="about">
      <div className="content flex flex-col md:flex-row gap-6 md:gap-14 items-center">
        <div className="image">
          <div className="image-pattern md:w-96 md:h-96">
            <img
              src={jagung}
              alt="jagung"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div className="description">
          <h1 className="font-extrabold font-jetbrains text-4xl md:text-6xl mb-2 md:mb-6">
            MAIZECARE
          </h1>
          <p className="md:text-lg text-justify text-gray-600">
            MaizeCare adalah solusi inovatif untuk petani jagung yang
            memungkinkan mereka untuk mendeteksi dan mengatasi penyakit tanaman
            dengan cepat dan efektif. Dengan menggunakan teknologi canggih,
            MaizeCare menjadi asisten pertanian cerdas yang memberikan informasi
            akurat tentang kondisi tanaman jagung secara real-time. Dengan
            demikian, petani dapat mengambil langkah-langkah preventif atau
            intervensi yang diperlukan untuk menjaga kesehatan tanaman dan
            meningkatkan produktivitas panen mereka secara signifikan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
