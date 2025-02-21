import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Menu from "@/components/menu"
import Reservation from "@/components/reservation"
import Events from "@/components/events"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reservation />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

