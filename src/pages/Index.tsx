import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AppPreview } from "@/components/AppPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AppPreview />
      <Footer />
    </div>
  );
};

export default Index;