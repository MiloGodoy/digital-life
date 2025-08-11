'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '#top' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Productos', href: '#products' },
    { name: 'Contacto', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="bg-slate-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-semibold">
              <span className="text-blue-400">Digital</span>
              <span className="text-green-400">Life</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="relative text-white hover:text-green-400 transition-colors duration-200 pb-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Agendar reunión
            </button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-700">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-green-400 hover:bg-slate-700 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                  Agendar reunión
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}