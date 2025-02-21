"use client";

import { useState } from "react"
import { cn } from "@/lib/utils"
import Default from "../public/assets/hero.png"

const menuItems = [
    // Ghanaian Main Dishes
    {
      name: "Jollof Rice with Chicken",
      category: "Main Dishes",
      price: "₵50",
      description: "Classic Ghanaian Jollof rice served with seasoned fried chicken.",
    },
    {
      name: "Fufu and Light Soup",
      category: "Main Dishes",
      price: "₵70",
      description: "Traditional Ghanaian dish of pounded yam served with spicy light soup.",
    },
    {
      name: "Banku and Tilapia",
      category: "Main Dishes",
      price: "₵100",
      description: "Fermented corn dough served with grilled tilapia and pepper sauce.",
    },
    {
      name: "Kelewele",
      category: "Main Dishes",
      price: "₵30",
      description: "Spicy fried plantains, a delicious Ghanaian street food.",
    },
    {
      name: "Chibom",
      category: "Main Dishes",
      price: "₵40",
      description: "A Ghanaian sandwich with bread, fried egg, and sausage.",
    },
  
    // Drinks
    {
      name: " Palm Wine",
      category: "Drinks",
      price: "₵60",
      description: "Traditional Ghanaian alcoholic beverage made from fermented palm sap.",
    },
    {
      name: "Zomi (Herbal Drink)",
      category: "Drinks",
      price: "₵25",
      description: "A refreshing herbal drink made from leaves, known for its health benefits.",
    },
    {
      name: "Sobolo",
      category: "Drinks",
      price: "₵15",
      description: "A sweet and tangy hibiscus drink, a popular Ghanaian refreshment.",
    },
  
    // Sides
    {
      name: "Plantain Chips",
      category: "Sides",
      price: "₵20",
      description: "Crunchy fried plantain chips served with spicy pepper sauce.",
    },
    {
      name: "Fried Yam",
      category: "Sides",
      price: "₵25",
      description: "Crispy fried yam, a perfect side to complement your main dish.",
    },
    {
      name: "Gari Fortor",
      category: "Sides",
      price: "₵30",
      description: "A Ghanaian side dish made from grated cassava served with pepper sauce.",
    },
  
    // Desserts
    {
      name: "Chilled Togo",
      category: "Desserts",
      price: "₵15",
      description: "A sweet, chilled dessert made with vanilla and chocolate.",
    },
    {
      name: "Kelewele with Groundnut",
      category: "Desserts",
      price: "₵20",
      description: "Spicy plantains paired with groundnut (peanut) powder for a unique dessert.",
    },
    {
      name: "Ghanaian Cake",
      category: "Desserts",
      price: "₵30",
      description: "A rich and moist Ghanaian-style cake, perfect for any occasion.",
    },
  ]

const menuCategories = ["Main Dishes", "Drinks", "Sides", "Desserts"]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Main Dishes")

  const filteredMenuItems = menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="relative py-24 overflow-hidden h-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed overlay"
        style={{ backgroundImage: `url(${Default.src})` }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-dancing-script text-2xl">Discover</span>
          <h2 className="text-4xl font-quicksand font-bold mt-2 text-white">Our Menu</h2>
        </div>

        <div className="bg-white rounded-lg p-8 max-w-5xl mx-auto">
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    {menuCategories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={cn(
          "px-6 py-3 font-quicksand transition-colors",
          activeCategory === category ? "bg-primary text-white" : "hover:text-primary",
        )}
      >
        {category}
      </button>
    ))}
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {filteredMenuItems.map((item, index) => (
      <div key={index} className="pb-4 max-w-xs mx-auto">
        <div className="flex items-baseline">
          <h4 className="font-quicksand relative pr-4 bg-white">{item.name}</h4>
          <div className="flex-grow border-b border-dotted border-muted-foreground mx-2" />
          <span className="text-primary font-bold pl-4 bg-white">{item.price}</span>
        </div>
        <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}

