import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfterSlider"), { 
  ssr: true,
  loading: () => <div style={{ height: "600px", width: "100%", backgroundColor: "var(--bg-creamy)" }} />
});
const TechSection = dynamic(() => import("@/components/Technology"), { 
  ssr: true,
  loading: () => <div style={{ height: "700px", width: "100%", backgroundColor: "var(--white)" }} />
});
const Reviews = dynamic(() => import("@/components/Reviews"), { 
  ssr: true,
  loading: () => <div style={{ height: "400px", width: "100%", backgroundColor: "var(--bg-creamy)" }} />
});
const Branches = dynamic(() => import("@/components/Branches"), { 
  ssr: true,
  loading: () => <div style={{ height: "500px", width: "100%", backgroundColor: "var(--bg-creamy)" }} />
});
const Footer = dynamic(() => import("@/components/Footer"), { 
  ssr: true,
  loading: () => <div style={{ height: "400px", width: "100%", backgroundColor: "var(--accent-bronze)" }} />
});
const StickyCTA = dynamic(() => import("@/components/StickyCTA"), { ssr: true });

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
