import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TechSection from "@/components/Technology";
import Reviews from "@/components/Reviews";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfterSlider />
      <TechSection />
      <Reviews />
      <Branches />
      <Footer />
      <StickyCTA />
    </main>
  );
}
