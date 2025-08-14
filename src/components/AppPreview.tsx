import { Smartphone, Download, Apple } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

export const AppPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative mx-auto w-[320px] h-[640px] bg-gradient-to-b from-muted to-muted/50 rounded-[3rem] p-4 shadow-2xl border border-gray-300">
                <div className="bg-background rounded-[2.5rem] overflow-hidden w-full h-full">
                  <img
                    src={appMockup}
                    alt="FinTrack App Interface"
                    className="w-full h-full object-cover animate-float"
                  />
                </div>
              </div>


              <div className="absolute -top-8 -right-8 bg-gradient-gold rounded-2xl p-4 shadow-gold animate-float delay-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-foreground">+150</div>
                  <div className="text-xs text-gold-foreground/80">XP Ganho</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-secondary rounded-2xl p-4 shadow-glow animate-float delay-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-foreground">Nível 12</div>
                  <div className="text-xs text-accent-foreground/80">Economista</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground text-sm font-medium">
                <Smartphone className="w-4 h-4" />
                <span>Interface Intuitiva</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
                Uma experiência
                <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                  Única e Envolvente
                </span>
              </h2>

              <p className="text-xl text-muted-foreground">
                Interface moderna e intuitiva que torna a gestão financeira uma experiência
                prazerosa. Cada tela foi pensada para motivar você a alcançar seus objetivos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Dashboard Gamificado</h3>
                  <p className="text-muted-foreground">Visualize seu progresso com gráficos interativos e elementos de game</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Missões Diárias</h3>
                  <p className="text-muted-foreground">Tarefas simples que geram XP e te aproximam das suas metas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Conquistas Épicas</h3>
                  <p className="text-muted-foreground">Desbloqueie troféus únicos e compartilhe suas vitórias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};