import { Header } from './components/header/Header';
import './index.css';
import { Gallery } from './pages/gallery/Gallery';
import { HeroSection } from './pages/heroSection/HeroSection';
import { HowItWorks } from './pages/howItWorks/HowItWorks';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Events } from './pages/events/Events';
import { Features } from './pages/features/Features';
import { Roadmap } from './pages/roadmap/Roadmap';
import Register from './pages/register/Register';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>
    <Header />
    <main>
      <section id="que-es">
        <HeroSection />
      </section>
      <section id="como-funciona">
        <HowItWorks />
      </section>
      <section id="galeria">
        <Gallery />
      </section>
      <section id="eventos">
        <Events />
      </section>
      <section id="que-incluye">
        <Features />
      </section>
      <section id="ruta">
        <Roadmap />
      </section>
      <section id="registro">
        <Register />
      </section>
    </main>
    <Footer />
   </>
  );
}

export default App;
