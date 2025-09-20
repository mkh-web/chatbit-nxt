import Contact from "@/components/landing/Contact";
import CRMComparison from "@/components/landing/CRMComparison";
import FAQ from "@/components/landing/FAQ";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import WhyChoose from "@/components/landing/WhyChoose";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CRMComparison />
      <Contact />
    </div>
  );
}
