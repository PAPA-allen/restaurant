"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-serif text-2xl font-bold">
              Savoria
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/menu" className="text-sm font-medium transition-colors hover:text-primary">
              Menu
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#reservation">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <Image src="/assets/hero.png" alt="Restaurant interior" fill className="object-cover" priority />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 gradient-overlay"
          />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2,
                }}
                className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block"
                >
                  Experience
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="block text-gold"
                >
                  Culinary Excellence
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 max-w-md text-lg text-white/90"
            >
              Savor the finest ingredients prepared with passion and creativity at Savoria.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-10 flex gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/menu">View Our Menu</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white/20"
                >
                  <Link href="#reservation">Make a Reservation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Our Signature Dishes</h2>
            <p className="mt-4 text-muted-foreground">
              Discover our chef's most celebrated creations that keep our guests coming back.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Truffle Risotto",
                description: "Creamy Arborio rice with wild mushrooms and truffle oil",
                price: "₵24.95",
                image: "/1.png",
              },
              {
                name: "Herb-Crusted Salmon",
                description: "Fresh Atlantic salmon with a crispy herb crust and lemon butter sauce",
                price: "₵29.95",
                image: "/2.png",
              },
              {
                name: "Chocolate Soufflé",
                description: "Warm chocolate soufflé with vanilla bean ice cream",
                price: "₵12.95",
                image: "/3.png",
              },
            ].map((dish, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold">{dish.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{dish.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-medium text-gold">{dish.price}</span>
                    <Button variant="ghost" size="sm" className="gap-1 text-sm" asChild>
                      <Link href="/menu">
                        View Menu <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-wine py-16 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/assets/hero.png')] bg-cover bg-center"
        />
        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-white/80">
                Founded in 2010, Savoria began with a simple mission: to create memorable dining experiences through
                exceptional food and impeccable service.
              </p>
              <p className="mt-4 text-white/80">
                Our chef, Michael Laurent, brings over 20 years of culinary expertise from around the world. Each dish
                on our menu reflects his passion for combining traditional techniques with innovative flavors.
              </p>
              <p className="mt-4 text-white/80">
                We source our ingredients from local farmers and suppliers who share our commitment to quality and
                sustainability.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Button className="mt-6 bg-gold text-wine hover:bg-gold/90" asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/assets/hero.png"
                  alt="Chef preparing food"
                  layout="fill"
                  objectFit="cover"
                  className="z-10"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Reserve Your Table</h2>
            <p className="mt-4 text-muted-foreground">
              Join us for an unforgettable dining experience. Reservations recommended.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <form className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="John Smith"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="time" className="text-sm font-medium">
                    Time
                  </label>
                  <select
                    id="time"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="guests" className="text-sm font-medium">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                    <option value="7+">7+ people</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="special-requests" className="text-sm font-medium">
                  Special Requests
                </label>
                <textarea
                  id="special-requests"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Any special requests or dietary restrictions?"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Reserve Now
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-muted-foreground">Have questions or feedback? We'd love to hear from you.</p>
          </motion.div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              { icon: <Phone className="mb-4 h-8 w-8 text-gold" />, title: "Phone", content: "(123) 456-7890" },
              {
                icon: <MapPin className="mb-4 h-8 w-8 text-gold" />,
                title: "Location",
                content: "123 Culinary Ave, Foodville, CA 94123",
              },
              {
                icon: <Clock className="mb-4 h-8 w-8 text-gold" />,
                title: "Hours",
                content: "Tue-Sun: 5:00 PM - 10:00 PM\nClosed Mondays",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center rounded-lg border bg-background p-6 text-center shadow-sm"
              >
                {item.icon}
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-muted-foreground whitespace-pre-line">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container relative">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <Link href="/" className="font-serif text-xl font-bold">
                Savoria
              </Link>
              <p className="text-center text-sm text-muted-foreground md:text-left">
                © {new Date().getFullYear()} Savoria Restaurant. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Icon - Fixed Position */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="https://wa.me/+233247549825"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-all cursor-pointer"
          aria-label="Contact us on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(37, 211, 102, 0.5)",
                "0 0 0 10px rgba(37, 211, 102, 0)",
                "0 0 0 0 rgba(37, 211, 102, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="absolute inset-0 rounded-full"
          />
          <FaWhatsapp className="h-8 w-8 text-white" />
        </motion.a>
      </motion.div>
    </div>
  )
}

