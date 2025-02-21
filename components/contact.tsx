import { Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="container flex justify-center items-center">
        <div className="w-full max-w-3xl text-center">
          <div className="mb-8">
            <span className="text-primary font-dancing-script text-2xl">Contact Us</span>
            <h2 className="text-4xl font-quicksand font-bold mt-2">Get In Touch</h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <Link href="tel:0455481497" className="flex items-center justify-center gap-3 hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                000-000-00-00
              </Link>

              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                0000 Lake-side Rd.
              </div>

              <Link
                href="mailto:info@restaurant.com"
                className="flex items-center justify-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                info@restaurant.com
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4">
              <span className="text-sm">Follow Us:</span>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
