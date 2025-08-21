import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AboutUs } from "@/components/AboutUs";
import { AppPreview } from "@/components/AppPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AboutUs />
      <AppPreview />
      <Footer />
    </div>
  );
};

export default Index;