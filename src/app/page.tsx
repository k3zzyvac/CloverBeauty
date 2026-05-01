import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfterSlider"), { ssr: true });
const TechSection = dynamic(() => import("@/components/Technology"), { ssr: true });
const Reviews = dynamic(() => import("@/components/Reviews"), { ssr: true });
const Branches = dynamic(() => import("@/components/Branches"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const StickyCTA = dynamic(() => import("@/components/StickyCTA"), { ssr: false });

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
