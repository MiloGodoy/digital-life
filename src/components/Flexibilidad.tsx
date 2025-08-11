'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'


export default function AboutUsPage() {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToContact = () => {
    if (pathname === '/') {
      // 1. Si estamos en la página principal
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        // 2. Hace scroll suave
        contactSection.scrollIntoView({ behavior: 'smooth' })
        
        // 3. (Opcional) Actualiza la URL sin recargar
        window.history.pushState({}, '', '/#contact')
      }
    } else {
      // 4. Si estamos en otra página
      router.push('/#contact')
    }
  }

  const processSteps = [
    {
      number: "1",
      title: "Análisis",
      description: "Analizamos tus necesidades y objetivos para crear la solución perfecta que se adapte a tu negocio y maximice tu potencial."
    },
    {
      number: "2", 
      title: "Diseño",
      description: "Diseñamos interfaces intuitivas y experiencias de usuario excepcionales que conecten con tu audiencia de manera efectiva."
    },
    {
      number: "3",
      title: "Desarrollo", 
      description: "Desarrollamos soluciones robustas utilizando las últimas tecnologías y mejores prácticas de la industria."
    },
    {
      number: "4",
      title: "Entrega",
      description: "Entregamos tu proyecto completamente funcional con soporte continuo y mantenimiento especializado."
    }
  ]

  useEffect(() => {
    if (pathname === '/' && window.location.hash === '#contact') {
      scrollToContact()
    }
  }, [pathname])


  return (
    <div className="min-h-screen">
      {/* CTA Section */}
      <section className="bg-green-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¿Preparado para construir algo increíble juntos?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Nos emociona conocer más sobre tu proyecto.
          </p>
          <button 
            className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-lg font-medium border border-gray-300 transition-colors duration-200"
            onClick={scrollToContact}
          >
            Contáctanos
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-12">
            Nosotros
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img 
                src="/about-us.jpg"
                alt="Desarrollador trabajando en múltiples pantallas"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-green-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Quiénes somos?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/digital-life.jpg"
                alt="Equipo en reunión de trabajo"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Somos <strong>DigitalLife</strong> desde el 2018. Somos una empresa de desarrollo de software especializada en crear soluciones tecnológicas innovadoras que impulsan el crecimiento de nuestros clientes. Con un equipo multidisciplinario de expertos en desarrollo, diseño y consultoría tecnológica, nos dedicamos a transformar ideas en productos digitales exitosos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nuestra pasión por la tecnología y el compromiso con la excelencia nos han posicionado como líderes en el mercado, ofreciendo servicios personalizados que van desde el desarrollo de aplicaciones web y móviles hasta soluciones empresariales complejas. Creemos en el poder de la innovación para resolver desafíos reales y crear valor duradero para nuestros clientes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En DigitalLife, no solo desarrollamos software; construimos el futuro digital de tu empresa, asegurando que cada solución sea escalable, segura y alineada con tus objetivos de negocio. Nuestro enfoque colaborativo y nuestra metodología ágil garantizan resultados excepcionales en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}