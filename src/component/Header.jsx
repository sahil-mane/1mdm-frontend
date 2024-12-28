import { useState, useEffect } from 'react'
// import { Menu } from 'lucide-react'
// import { Button } from '@/components/ui/button'
import logo from '../assets/1mdm-168x58.png'

export function Header() {
  const [isHidden, setIsHidden] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const threshold = 100 // Adjust this value to change when the header hides
    let lastScrollY = window.pageYOffset

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > threshold)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top section that hides on scroll */}
      <div
        className={`bg-white text-primary-foreground transition-all duration-300 ease-in-out ${isHidden ? 'max-h-0 opacity-0 overflow-hidden' : ' opacity-100 py-2 px-4'
          }`}
      >
        <div className="container w-[85%] mx-auto flex justify-between items-center border-b-2 border-gray-300">
          <p className="">World&apos;s Largest Medical Equipment Market Place</p>
          <div className='hidden lg:block'>
          <a href="#" className="text">My account</a>
          <span className='mx-3'>{'|'}</span>
          <a href="#" className="text">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Bottom section that stays fixed */}
      <div className={`bg-white border-b transition-transform duration-300 ease-in-out ${isHidden ? '-translate-y-1' : 'translate-y-0'
        }`}>
        <div className="container mx-auto py-3 px-4">
          <div className="flex justify-between items-center w-[85%] mx-auto">
            <div className="flex items-center space-x-4">
              <img src={logo} alt='' />
            </div>
            <button
              onClick={toggleNav}
              className="md:hidden text-primary focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <nav
              className={`${isNavOpen ? 'block' : 'hidden'
                } md:flex md:space-x-4 space-y-2 md:space-y-0 absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
            >
              <a href="#" className="text-lg text-gray-400 text block md:inline">About Us</a>
              <a href="#" className="text-lg text-gray-400 text block md:inline">Our Story</a>
              <a href="#" className="text-lg text-gray-400 text block md:inline">Sell on 1MDM</a>
              <a href="#" className="text-lg text-gray-400 text block md:inline">Pricing</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

