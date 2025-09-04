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
import { Linkedin } from "lucide-react";


interface MemberProps {
  name: string;
  image: string;
  role: string;
  linkedin: string;
}

const teamMembers: MemberProps[] = [
  {
    name: "Allanys Spindola",
    image: allanys,
    role: "Analista de Documentação",
    linkedin: "http://www.linkedin.com/in/allanys-spindola-1a9785382",
  },
  {
    name: "Leonardo Rodrigues",
    image: leo,
    role: "Lider de Equipe Técnica",
    linkedin: "https://www.linkedin.com/in/leonardo-silveira5416",
  },
  {
    name: "Luis Fellipe Fernandes",
    image: luis,
    role: "Desenvolvedor",
    linkedin: "https://www.linkedin.com/in/luis-oliveira-219525320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Pedro Lucas",
    image: pedro,
    role: "Desenvolvedor",
    linkedin: "https://www.linkedin.com/in/pedro-lucas-rodrigues-7880bb20a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "José Ricardo",
    image: ricardo,
    role: "Analista de Documentação",
    linkedin: "http://linkedin.com/in/jose-ricardo-nascimento-filho-40b881338",
  },
  {
    name: "Thiago Simões",
    image: thiago,
    role: "Lider de Equipe Qualidade",
    linkedin: "https://www.linkedin.com/in/thiago-sim%C3%B5es-890953211/",
  },
  {
    name: "Victor Ramalho",
    image: vitor,
    role: "Analista de Documentação",
    linkedin: "http://www.linkedin.com/in/victor-ramalho-lisboa",
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
          {teamMembers.map(({ name, image, role, linkedin }: MemberProps) => (
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
                    <a
                      href={linkedin}
                      target="_blank"
                      className="mt-2"
                    >
                      <Linkedin size={20} />
                    </a>
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
