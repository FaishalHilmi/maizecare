function Hero() {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8 h-screen">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold font-jetbrains tracking-tight text-gray-900 sm:text-8xl uppercase">
            MaizeCare
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Solusi Pintar untuk Deteksi dan Perlindungan Penyakit pada Tanaman
            Jagung, Meningkatkan Kesehatan dan Produktivitas Panen
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/prediction"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get Predictions
            </a>
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
