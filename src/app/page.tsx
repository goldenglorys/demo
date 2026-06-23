import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RealityCheck from "@/components/RealityCheck";
import Methodology from "@/components/Methodology";
import Sessions from "@/components/Sessions";
import Testimonials from "@/components/Testimonials";
import CommunityImpact from "@/components/CommunityImpact";
import ResourcesCTA from "@/components/ResourcesCTA";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RealityCheck />
        <Methodology />
        <Sessions />
        <Testimonials />
        <CommunityImpact />
        <ResourcesCTA />
        <About />
      </main>
      <Footer />
    </>
  );
}
