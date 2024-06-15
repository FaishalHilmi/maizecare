import Hero from "../component/Hero";
import Navigasi from "../component/Navigasi";
import About from "../component/About";
import Disease from "../component/Disease";
import Footer from "../component/Footer";

function Home() {
  return (
    <main className="bg-white font-jakarta max-h-screen">
      <Navigasi />
      <Hero />
      <About />
      <Disease />
      <Footer />
    </main>
  );
}

export default Home;
