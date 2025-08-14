import { Card } from "@/components/ui/card";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Gift, 
  Users, 
  Gamepad2,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Sistema de Conquistas",
    description: "Desbloqueie troféus únicos ao atingir metas financeiras. Cada conquista te leva mais perto da liberdade financeira.",
    gradient: "gradient-gold"
  },
  {
    icon: Target,
    title: "Metas Gamificadas", 
    description: "Transforme objetivos financeiros em missões épicas. Defina metas e veja seu progresso em tempo real.",
    gradient: "gradient-primary"
  },
  {
    icon: TrendingUp,
    title: "Níveis de Experiência",
    description: "Ganhe XP a cada transação inteligente. Evolua de Iniciante a Mestre das Finanças.",
    gradient: "gradient-secondary"
  },
  {
    icon: Gift,
    title: "Recompensas Reais",
    description: "Troque seus pontos por benefícios reais: cashback, descontos e prêmios exclusivos.",
    gradient: "gradient-gold"
  },
  {
    icon: Users,
    title: "Desafios em Grupo",
    description: "Participe de competições amigáveis com amigos. Quem consegue economizar mais este mês?",
    gradient: "gradient-primary"
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 text-accent-foreground text-sm font-medium mb-4">
            <Gamepad2 className="w-4 h-4" />
            <span>Funcionalidades Gamificadas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Por que o FinTrack é
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Diferente
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não é apenas mais um app de finanças. É uma experiência completa que transforma 
            o tédio da gestão financeira em uma jornada divertida e recompensadora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${feature.gradient} flex items-center justify-center mb-6 group-hover:animate-float`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 font-display">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};