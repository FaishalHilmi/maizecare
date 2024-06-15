import React from "react";

function Footer() {
  const navigation = [
    { name: "About", href: "/#about" },
    { name: "Information", href: "/#information" },
    { name: "Predict", href: "/prediction" },
  ];

  return (
    <div className="footer mt-20">
      <div className="line w-full h-2 bg-gradient-to-r from-green-800 to-green-950"></div>
      <footer className=" bg-gradient-to-r from-green-950 to-green-800 shadow">
        <div className="isolate px-6 py-14 max-w-screen-xl mx-auto">
          <div className="content">
            <h1 className="font-extrabold font-jetbrains text-white text-4xl md:text-6xl mb-4 md:mb-6">
              MAIZECARE
            </h1>
            <div className="footer-description md:flex">
              <p className="md:text-[16px] text-white text-justify md:w-[620px] leading-6 mb-12">
                MaizeCare adalah solusi inovatif untuk petani jagung yang
                memungkinkan mereka untuk mendeteksi dan mengatasi penyakit
                tanaman dengan cepat dan efektif. Dengan menggunakan teknologi
                canggih, MaizeCare menjadi asisten pertanian cerdas yang
                memberikan informasi akurat tentang kondisi tanaman jagung
                secara real-time. Dengan demikian, petani dapat mengambil
                langkah-langkah preventif atau intervensi yang diperlukan untuk
                menjaga kesehatan tanaman dan meningkatkan produktivitas panen
                mereka secara signifikan.
              </p>
              <div className="footer-link md:ps-48">
                <h1 className="mb-6 font-bold text-xl text-white">Link</h1>
                <ul>
                  {navigation.map((item, index) => (
                    <li className="mb-3" key={index}>
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-semibold text-white hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
