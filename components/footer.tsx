

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()}  Restaurant. All rights reserved.</p>

          {/* <nav>
            <ul className="flex flex-wrap items-center gap-6">
              <li>
                <Link href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#reservation" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Reservation
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
                  </nav> */}
                  <p>Developed by <span><a href="https://portfolio-a8hp.onrender.com">Allen ~Arcnile</a></span></p>
        </div>
          </div>
         
    </footer>
  )
}

