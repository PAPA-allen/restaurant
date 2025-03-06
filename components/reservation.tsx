"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Type definition for opening hours
interface OpeningHour {
  day: string;
  hours: string;
}

const openingHours: OpeningHour[] = [
  { day: "Sun", hours: "8:00 am – 11:00 pm" },
  { day: "Mon", hours: "8:00 am – 11:00 pm" },
  { day: "Tues", hours: "8:00 am – 11:00 pm" },
  { day: "Wed", hours: "8:00 am – 11:00 pm" },
  { day: "Thurs", hours: "8:00 am – 11:00 pm" },
  { day: "Fri", hours: "Closed" },
  { day: "Sat", hours: "Closed" },
];

const Reservation: React.FC = () => {
  const [guests, setGuests] = useState<string>(""); // State for number of guests

  const handleGuestChange = (value: string) => {
    setGuests(value);
    
  };

  return (
    <section
      id="reservation"
      className="relative py-24 bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-60" /> {/* Dark overlay for contrast */}
      
      <div className="container relative z-10 px-6 sm:px-12 md:px-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="text-center mb-10">
              <span className="text-primary font-dancing-script text-2xl">Reservation</span>
              <h2 className="text-3xl font-quicksand font-bold mt-2 text-gray-800">Book Your Table</h2>
              <p className="text-gray-600 mt-2">We look forward to serving you!</p>
            </div>

            <form className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-800">
                  Name:
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-gray-100 border-gray-300 text-gray-800 p-4 rounded-lg focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-800">
                  Email:
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-100 border-gray-300 text-gray-800 p-4 rounded-lg focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-800">
                  Phone:
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone"
                  className="bg-gray-100 border-gray-300 text-gray-800 p-4 rounded-lg focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-gray-800">
                  Number of Guests:
                </Label>
                <Select value={guests} onValueChange={handleGuestChange}>
                  <SelectTrigger className="bg-gray-100 border-gray-300 text-gray-800 p-4 rounded-lg focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-800 rounded-lg shadow-lg mt-1">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem
                        key={num}
                        value={num.toString()}
                        className="px-4 py-2 hover:bg-primary/10"
                      >
                        {num} {num === 1 ? "Person" : "People"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="text-gray-800">
                  Date:
                </Label>
                <Input
                  id="date"
                  type="date"
                  className="bg-gray-100 border-gray-300 text-gray-800 p-4 rounded-lg focus:ring-primary focus:border-primary"
                  min={new Date().toISOString().split("T")[0]} // Restricts past dates
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <Label htmlFor="time" className="text-gray-800">
                  Time:
                </Label>
                <Input
                  id="time"
                  type="time"
                  className="bg-gray-100 border-gray-300 text-gray-800 p-4 rounded-lg focus:ring-primary focus:border-primary"
                  step="300" // Sets time interval to 5 minutes
                />
              </div>

              {/* Book Now Button */}
              <div className="sm:col-span-2 text-center mt-8">
                <Button size="lg" className="px-8 py-4 text-white bg-primary hover:bg-primary/80 rounded-lg">
                  Book Now
                </Button>
              </div>
            </form>
          </div>

          {/* Opening Time */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-quicksand font-bold text-gray-800">Opening Time</h2>
              <p className="text-gray-600 mt-2">We are available to serve you at the following hours:</p>
            </div>

            <div className="space-y-4 ">
              {openingHours.map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center text-gray-800">
                  <span className="font-quicksand text-lg">{day}</span>
                  <span className="text-primary text-lg">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
