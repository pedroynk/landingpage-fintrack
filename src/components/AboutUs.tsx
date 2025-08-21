import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface MemberProps {
  name: string;
  image: string;
  role: string;
}

const teamMembers: MemberProps[] = [
  {
    name: "Allanys",
    image: "/src/assets/allanys.jpeg",
    role: "Desenvolvedora",
  },
  {
    name: "Leo",
    image: "/src/assets/leo.jpeg",
    role: "Desenvolvedor",
  },
  {
    name: "Luis",
    image: "/src/assets/luis.jpeg",
    role: "Desenvolvedor",
  },
  {
    name: "Pedro",
    image: "/src/assets/pedro.jpeg",
    role: "Desenvolvedor",
  },
  {
    name: "Ricardo",
    image: "/src/assets/ricardo.jpeg",
    role: "Desenvolvedor",
  },
  {
    name: "Thigas",
    image: "/src/assets/thigas.jpeg",
    role: "Desenvolvedor",
  },
  {
    name: "Vitor",
    image: "/src/assets/vitor.jpeg",
    role: "Desenvolvedor",
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
