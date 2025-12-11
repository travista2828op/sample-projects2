import Navigation from './components/Navigation';
import Hero3D from './components/Hero3D';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <Hero3D />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
