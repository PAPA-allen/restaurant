import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"

const events = [
  {
    image: "/assets/hero.png",
    date: { day: "08", month: "July" },
    time: "8.00PM - 10.00PM",
    title: "An Evening of Culinary Delights",
    description:
      " Indulge in a memorable evening as we celebrate the art of fine dining. Our expert chefs will be serving up a selection of exquisite dishes, and the ambiance will ensure a truly special experience. Perfect for food lovers and those looking to unwind in a sophisticated setting. Reserve your spot and enjoy a night of luxury and flavor",
  },
 
  {
    image: "/assets/hero.png",
    date: { day: "08", month: "July" },
    time: "8.00PM - 10.00PM",
    title: "An Evening of Culinary Delights",
    description:
      " Indulge in a memorable evening as we celebrate the art of fine dining. Our expert chefs will be serving up a selection of exquisite dishes, and the ambiance will ensure a truly special experience. Perfect for food lovers and those looking to unwind in a sophisticated setting. Reserve your spot and enjoy a night of luxury and flavor",
  },
]

export default function Events() {
  return (
    <section id="events" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-dancing-script text-2xl">Special Event</span>
          <h2 className="text-4xl font-quicksand font-bold mt-2">Upcoming Events</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group relative">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-fit group-hover:scale-105 transition-all"
                />
                <div className="absolute top-4 left-4 bg-primary text-white p-3 text-center rounded">
                  <span className="block text-xl font-bold">{event.date.day}</span>
                  <span className="text-sm">{event.date.month}</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <h3 className="text-xl font-quicksand font-bold mb-2">
                  <Link href="#" className="hover:text-primary transition-colors">
                    {event.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

