import { Separator } from "@/components/ui/separator";
import { 
  Gamepad2
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">


        <div className="grid lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-display">FinTrack</span>
            </div>
            
            <p className="text-muted-foreground">
              Transformando a gestão financeira em uma experiência divertida e recompensadora. 
              Sua jornada para a liberdade financeira começa aqui.
            </p>
          </div>
        </div>

        <Separator className="my-12 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2025 FinTrack. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};