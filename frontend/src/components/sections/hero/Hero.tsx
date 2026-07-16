import HeroCard from "./HeroCard";
import { heroSlides } from "@/data/heroData";

export default function Hero() {
  return (
    <section className="w-full">
      <HeroCard
        image={heroSlides[0].image}
        alt={heroSlides[0].alt}
      />
    </section>
  );
}