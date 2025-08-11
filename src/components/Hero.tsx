'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'

import SecurityImg from '../../public/security.jpeg'
import NotebookImg from '../../public/notebook.jpeg'

export default function Hero() {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToContact = () => {
    if (pathname === '/') {
      // Si estamos en la página principal
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' // Alinea la sección al inicio de la ventana
        })
        
        // Actualiza la URL sin recargar
        window.history.pushState({}, '', '/#contact')
      }
    } else {
      // Si estamos en otra página
      router.push('/#contact')
    }
  }

  // Manejo para cuando se llega directamente con el hash
  useEffect(() => {
    if (pathname === '/' && window.location.hash === '#contact') {
      scrollToContact()
    }
  }, [pathname])
    const stats = [
      {
        number: "+6",
        description: "Años de experiencia",
        bgColor: "bg-green-600"
      },
      {
        number: "+200", 
        description: "Clientes satisfechos",
        bgColor: "bg-gray-100 text-gray-800"
      },
      {
        number: "+50",
        description: "Proyectos realizados con éxito", 
        bgColor: "bg-slate-800"
      },
      {
        number: "+100",
        description: "Soluciones realizadas",
        bgColor: "bg-green-500"
      }
    ]
  
    return (
      <div className="w-full">
        {/* Hero Section */}
        <section 
          className="relative h-64 md:h-80 bg-cover bg-center bg-gray-600"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/placeholder.svg?height=400&width=1200')`
          }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Transformando ideas en{' '}
                  <span className="block">Soluciones</span>
                </h1>
                <p className="text-lg text-gray-200 mb-6">
                  Desarrollamos el software que tu Empresa necesita para todos sus procesos
                </p>
                <button 
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                  onClick={scrollToContact}
                >
                  <span>📞</span>
                  <span>Contáctanos</span>
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Content Section */}
        <section className="bg-green-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Left Column - Images */}
              <div className="space-y-4">
                {/* <div className="relative">
                  <img 
                    src='/security.jpeg'
                    alt="Security on screen"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div> */}
                <div className="relative">
                  <img 
                    src='/notebook.jpeg'
                    alt="Hands on laptop"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
  
              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  ¿Buscas optimizar tus procesos?
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    En DigitalLife, somos una empresa especializada en software a medida comprometida con potenciar el éxito de tu negocio. Nos especializamos en crear soluciones tecnológicas personalizadas que se adapten a las necesidades específicas.
                  </p>
                  
                  <p>
                    Ya sea que necesites una aplicación móvil, un sistema de gestión empresarial o cualquier otro software personalizado, estamos preparados para convertir tus ideas en realidad.
                  </p>
                  
                  <p>
                    Con DigitalLife, no solo recibirás un producto final de alta calidad.
                  </p>
                  
                  <p>
                    Estamos aquí para ofrecer soluciones innovadoras y un servicio excepcional que te ayudarán a alcanzar tus metas empresariales de forma eficiente y efectiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Stats Section */}
        <section className="bg-green-50 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`${stat.bgColor} ${stat.bgColor.includes('gray') ? 'text-gray-800' : 'text-white'} p-6 rounded-lg text-center shadow-lg`}
                >
                  <div className="text-2xl md:text-3xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base font-medium">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Ofrecemos Servicios de Desarrollo de Software{' '}
                <span className="underline decoration-green-500 decoration-2">Superiores</span>
              </h3>
            </div>
          </div>
        </section>
      </div>
    )
  }