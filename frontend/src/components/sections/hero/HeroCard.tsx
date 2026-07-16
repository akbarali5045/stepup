interface HeroCardProps {
  image: string;
  alt: string;
}

export default function HeroCard({
  image,
  alt,
}: HeroCardProps) {
  return (
    <div className="w-full">

      <img
        src={image}
        alt={alt}
        className="w-full h-auto"
      />

    </div>
  );
}