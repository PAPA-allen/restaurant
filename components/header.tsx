"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "./ui/button"

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector(".banner-area")?.clientHeight || 0
      setIsFixed(window.scrollY > bannerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeNav = () => setIsNavOpen(false); // Close nav function when an item is clicked

  return (
    <header className={`${isFixed ? "fixed top-0 left-0 right-0 shadow-md bg-transparent w-full backdrop-blur p-2 z-[9999]" : "w-full p-2"} z-50`}>
      <div className="container mx-auto">
        {/* Top Nav */}
        <div className="flex items-center justify-between p-2 md:hidden bg-transparent w-full backdrop-blur">
          <Link href="/">
            <div className="text-3xl font-bold">Logo</div>
          </Link>

          <button className="md:hidden p-2" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isNavOpen ? "transform translate-x-0" : "transform -translate-x-full"} transition-transform duration-300 fixed inset-0 bg-white z-[99999] md:hidden h-screen`}>
          <div className="flex justify-between items-center p-4">
            <div className="text-3xl font-bold">Logo</div>
            <button onClick={() => setIsNavOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-6">
            <li>
              <Link href="#home" className="text-lg font-semibold hover:text-primary transition-colors" onClick={closeNav}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-lg font-semibold hover:text-primary transition-colors" onClick={closeNav}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#menu" className="text-lg font-semibold hover:text-primary transition-colors" onClick={closeNav}>
                MENU
              </Link>
            </li>
            <li>
              <Link href="#reservation" className="text-lg font-semibold hover:text-primary transition-colors" onClick={closeNav}>
                RESERVATION
              </Link>
            </li>
            <li>
              <Link href="#events" className="text-lg font-semibold hover:text-primary transition-colors" onClick={closeNav}>
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-lg font-semibold hover:text-primary transition-colors" onClick={closeNav}>
                CONTACT
              </Link>
            </li>
            <div className="flex flex-col gap-4 mt-8">
              <Link href="tel:0455481497" className="flex items-center gap-2 text-sm hover:text-primary transition-colors" onClick={closeNav}>
                <Phone className="h-4 w-4 text-primary" />
                000-000-00-00
              </Link>
              <Link href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors" onClick={closeNav}>
                <MapPin className="h-4 w-4 text-primary" />
                3685 Lake-side Rd.
              </Link>
              <Button variant="default" size="lg" asChild>
                <Link href="#reservation" className="text-center" onClick={closeNav}>Reserve Now</Link>
              </Button>
            </div>
          </ul>
        </div>

        {/* Bottom Nav (For Larger Screens) */}
        <nav className="hidden md:block">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="text-3xl font-bold hidden md:flex">Logo</div>
              <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <li>
                  <Link href="#home" className="hover:text-primary transition-colors">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="hover:text-primary transition-colors">
                    MENU
                  </Link>
                </li>
                <li>
                  <Link href="#reservation" className="hover:text-primary transition-colors">
                    RESERVATION
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-primary transition-colors">
                    EVENTS
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    CONTACT
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col lg:flex-row gap-4">
                <Link href="tel:0455481497" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  000-000-00-00
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                  3685 Lake-side Rd.
                </Link>
              </div>
              <Button variant="default" size="lg" asChild>
                <Link href="#reservation">Reserve Now</Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
