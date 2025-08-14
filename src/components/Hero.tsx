import { Button } from "@/components/ui/button";
import { Play, Trophy, Target } from "lucide-react";
import heroIllustration from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-8 h-8 bg-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float delay-100 opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-secondary rounded-full animate-float delay-200 opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
            Transforme suas
            <span className="block bg-gradient-gold bg-clip-text text-transparent animate-glow">
              Finanças
            </span>
            em Conquistas
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            O primeiro app que gamifica sua gestão financeira. Ganhe XP economizando, 
            desbloqueie níveis atingindo metas e conquiste troféus cuidando do seu dinheiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="outline" size="lg" className="border-muted text-foreground hover:bg-muted/10 text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Ver Demo
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src={heroIllustration} 
              alt="FinTrack" 
              className="w-full max-w-lg h-auto animate-float"
            />
            
            <div className="absolute -top-4 -right-4 bg-gradient-gold rounded-xl p-3 shadow-gold animate-float delay-100">
              <Trophy className="w-6 h-6 text-gold-foreground" />
            </div>
            <div className="absolute -bottom-2 -left-4 bg-gradient-secondary rounded-xl p-3 shadow-glow animate-float delay-200">
              <Target className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};