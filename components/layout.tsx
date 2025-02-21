"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Menu, Phone, MapPin } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.querySelector(".banner-area")?.clientHeight || 0
      setIsFixed(window.scrollY > bannerHeight)
    }

    window.addEventListener("scroll", handleScroll)

    // Simulate preloader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <div className="space-x-1">
            <span className="inline-block h-3 w-3 animate-bounce rounded-full bg-primary"></span>
            <span
              className="inline-block h-3 w-3 animate-bounce rounded-full bg-primary"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="inline-block h-3 w-3 animate-bounce rounded-full bg-primary"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>
      )}

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${isFixed ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : ""}`}
      >
        <div className="border-b">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
                <span className="font-bold">Risotto</span>
              </Link>
            </div>

            <button className="lg:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>

            <nav
              className={`${isNavOpen ? "block" : "hidden"} absolute left-0 right-0 top-16 border-b bg-background p-4 lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0`}
            >
              <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
                <li>
                  <Link href="/" className="text-sm font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm font-medium">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="text-sm font-medium">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#reservation" className="text-sm font-medium">
                    Reservation
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-sm font-medium">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm font-medium">
                    Contact
                  </Link>
                </li>
                <li className="lg:ml-4">
                  <Link
                    href="#reservation"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                  >
                    Reserve
                  </Link>
                </li>
                <li className="flex items-center gap-2 lg:ml-4">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">045-548-14-97</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">3685 Granville Lane</span>
                </li>
              </ul>
              <div className="mt-4 flex items-center gap-4 lg:hidden">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2024 Risotto Restaurant. All rights reserved.</p>
          <nav>
            <ul className="flex flex-wrap items-center gap-4 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#menu">Menu</Link>
              </li>
              <li>
                <Link href="#reservation">Reservation</Link>
              </li>
              <li>
                <Link href="#events">Events</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}

