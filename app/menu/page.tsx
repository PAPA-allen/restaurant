import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
  const menuCategories = [
    {
      id: "starters",
      name: "Starters",
      items: [
        {
          name: "Bruschetta",
          description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
          price: "$9.95",
          image: "/1.png",
        },
        {
          name: "Calamari Fritti",
          description: "Crispy fried calamari served with lemon aioli and marinara sauce",
          price: "$14.95",
          image: "/2.png",
        },
        {
          name: "Burrata",
          description: "Creamy burrata cheese with heirloom tomatoes, basil, and balsamic glaze",
          price: "$16.95",
          image: "/3.png",
        },
        {
          name: "Arancini",
          description: "Crispy risotto balls stuffed with mozzarella, served with truffle aioli",
          price: "$12.95",
          image: "/1.png",
        },
      ],
    },
    {
      id: "mains",
      name: "Main Courses",
      items: [
        {
          name: "Truffle Risotto",
          description: "Creamy Arborio rice with wild mushrooms and truffle oil",
          price: "$24.95",
          image: "/2.png",
        },
        {
          name: "Herb-Crusted Salmon",
          description: "Fresh Atlantic salmon with a crispy herb crust and lemon butter sauce",
          price: "$29.95",
          image: "/3.png",
        },
        {
          name: "Filet Mignon",
          description: "8oz prime beef tenderloin with red wine reduction and roasted vegetables",
          price: "$38.95",
          image: "/1.png",
        },
        {
          name: "Pappardelle Bolognese",
          description: "Housemade pappardelle pasta with slow-cooked beef and pork ragu",
          price: "$22.95",
          image: "/2.png",
        },
        {
          name: "Chicken Marsala",
          description: "Pan-seared chicken breast with mushrooms and Marsala wine sauce",
          price: "$26.95",
          image: "/3.png",
        },
      ],
    },
    {
      id: "seafood",
      name: "Seafood",
      items: [
        {
          name: "Grilled Octopus",
          description: "Tender octopus with fingerling potatoes, chorizo, and smoked paprika",
          price: "$32.95",
          image: "/1.png",
        },
        {
          name: "Cioppino",
          description: "San Francisco-style seafood stew with clams, mussels, shrimp, and fish in tomato broth",
          price: "$34.95",
          image: "/2.png",
        },
        {
          name: "Lobster Ravioli",
          description: "Housemade ravioli filled with lobster and ricotta in a saffron cream sauce",
          price: "$36.95",
          image: "/3.png",
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
          price: "$10.95",
          image: "/1.png",
        },
        {
          name: "Chocolate Soufflé",
          description: "Warm chocolate soufflé with vanilla bean ice cream",
          price: "$12.95",
          image: "/2.png",
        },
        {
          name: "Panna Cotta",
          description: "Vanilla bean panna cotta with seasonal berries and mint",
          price: "$9.95",
          image: "/3.png",
        },
        {
          name: "Affogato",
          description: "Vanilla gelato 'drowned' with a shot of hot espresso",
          price: "$8.95",
          image: "/1.png",
        },
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      items: [
        {
          name: "Signature Cocktails",
          description: "Ask your server about our seasonal craft cocktails",
          price: "$14-18",
          image: "/4.png",
        },
        {
          name: "Wine Selection",
          description: "Extensive wine list featuring local and international selections",
          price: "By glass or bottle",
          image: "/4.png",
        },
        {
          name: "Craft Beer",
          description: "Rotating selection of local craft beers",
          price: "$8-12",
          image: "/4.png",
        },
        {
          name: "Italian Sodas",
          description: "Housemade sodas in various flavors",
          price: "$5.95",
          image: "/4.png",
        },
      ],
    },
  ]

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
            <Link href="/menu" className="text-sm font-medium text-primary transition-colors">
              Menu
            </Link>
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/#reservation">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Menu</h1>
              <div className="mx-auto mt-2 h-1 w-24 bg-primary"></div>
              <p className="mt-4 text-muted-foreground">Crafted with passion using the finest seasonal ingredients</p>
            </div>

            <Tabs defaultValue="starters" className="w-full">
              <TabsList className="mb-8 flex w-full flex-wrap justify-center gap-2 bg-secondary">
                {menuCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 rounded-lg border p-4 transition-all hover:border-primary hover:shadow-md"
                      >
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <h3 className="font-serif text-lg font-medium">{item.name}</h3>
                            <span className="font-medium text-gold">{item.price}</span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12 rounded-lg border border-gold/30 bg-secondary p-6">
              <h3 className="font-serif text-lg font-medium text-primary">Dietary Information</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We are happy to accommodate dietary restrictions and allergies. Please inform your server of any special
                requirements. Vegetarian, vegan, and gluten-free options are available upon request.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container">
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
    </div>
  )
}

