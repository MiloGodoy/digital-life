import ContactSection from "@/components/ContactSection";
import CustomSoftwareBenefits from "@/components/CustomSoftware";
import AboutUsPage from "@/components/Flexibilidad";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import TechnologyShowcase from "@/components/Technology";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="top"></div>
      <Header />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="technologies">
          <Technologies />
        </section>
        
        <section id="products">
          <CustomSoftwareBenefits />
        </section>
        
        <section id="about">
          <AboutUsPage />
        </section>
        
        <TechnologyShowcase />
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </>
  );
}