import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="banner-area relative h-screen">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/hero.png"
          alt="Risotto Restaurant Hero"
          className="opacity-70 overlay bg-cover bg-center bg-no-repeat object-cover"
          layout="fill" // Ensures image covers the full area
          objectFit="cover" // Keeps the image fully covering the screen without distortion
        />
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-dancing-script text-4xl md:text-6xl lg:text-7xl mb-6">
            Welcome To Restaurant
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
          Indulge in exquisite African flavors within a refined setting. Our skilled chefs craft traditional dishes with the finest, freshest ingredients.
          </p>
          <Button size="lg" asChild>
            <Link href="#menu">Discover Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
