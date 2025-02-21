import ImageCarousel from "../components/image-carousel"

const galleryImages = [
  { src: "/assets/hero.png", alt: "Gallery image 1" },
  { src: "/assets/hero.png", alt: "Gallery image 2" },
    { src: "/assets/hero.png", alt: "Gallery image 3" },
    { src: "/assets/hero.png", alt: "Gallery image 4" },
    { src: "/assets/hero.png", alt: "Gallery image 5" },
    { src: "/assets/hero.png", alt: "Gallery image 6" },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-dancing-script text-2xl">About Us</span>
          <h2 className="text-4xl font-quicksand font-bold mt-2">The Risotto Restaurant</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h4 className="text-xl leading-relaxed">
              Welcome to Risotto Restaurant. Since 1988, Offering Traditional Dishes of the highest quality.
            </h4>
          </div>
          <div>
            <p className="text-muted-foreground">
              Te sit stet labitur veritus, sea similique consetetur ut. Ne fastidii oportere usu. Iusto mediocrem
              iudicabit ea eos, nemore offendit detraxit ei cum. Oblique conclusionemque qui cu, eum no sonet putant.
              Eos cu nulla vidisse. Mazim oporteat eam ex, his ei audiam audire, affert corrumpit pri cu.
            </p>
          </div>
        </div>

        <div className="px-12">
          <ImageCarousel images={galleryImages} />
        </div>
      </div>
    </section>
  )
}

