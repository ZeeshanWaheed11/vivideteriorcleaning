import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutSection />
        <GallerySection />
        <Features />
        <StatsSection />
        <Testimonials />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
