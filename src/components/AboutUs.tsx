import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import allanys from "@/assets/allanys.jpeg";
import leo from "@/assets/leo.jpeg";
import luis from "@/assets/luis.jpeg";
import pedro from "@/assets/pedro.jpeg";
import ricardo from "@/assets/ricardo.jpeg";
import thiago from "@/assets/thigas.jpeg";
import vitor from "@/assets/vitor.jpeg";


interface MemberProps {
  name: string;
  image: string;
  role: string;
}

const teamMembers: MemberProps[] = [
  {
    name: "Allanys Spindola",
    image: allanys,
    role: "Analista de Documentação",
  },
  {
    name: "Leonardo Rodrigues",
    image: leo,
    role: "Lider de Equipe Técnica",
  },
  {
    name: "Luis Fellipe Fernandes",
    image: luis,
    role: "Desenvolvedor",
  },
  {
    name: "Pedro Lucas",
    image: pedro,
    role: "Desenvolvedor",
  },
  {
    name: "José Ricardo",
    image: ricardo,
    role: "Analista de Documentação",
  },
  {
    name: "Thiago Simões",
    image: thiago,
    role: "Lider de Equipe Qualidade",
  },
  {
    name: "Victor Ramalho",
    image: vitor,
    role: "Analista de Documentação",
  },
];

export const AboutUs = () => {
  return (
    <section id="about-us" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-8 text-center">
        Sobre Nós
      </h2>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm md:max-w-full mx-auto"
      >
        <CarouselContent className="-ml-1">
          {teamMembers.map(({ name, image, role }: MemberProps) => (
            <CarouselItem key={name} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-muted/50">
                  <CardHeader className="flex flex-col items-center justify-center">
                    <img
                      src={image}
                      alt={name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <CardTitle className="text-center">{name}</CardTitle>
                    <CardDescription className="text-center">
                      {role}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
