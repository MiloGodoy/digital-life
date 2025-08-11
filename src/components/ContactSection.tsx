'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ContactSection() {
  const [iframeError, setIframeError] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({
    acceptTerms: false
  })

  const searchParams = useSearchParams()

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      acceptTerms: e.target.checked
    }))
  }

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowToast(true)
      const timer = setTimeout(() => setShowToast(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [searchParams])


  return (
    <>
      <section className="relative">
        {/* Hero Background */}
        <div 
          className="h-64 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/placeholder.svg?height=400&width=1200&text=Business+Team+Meeting')`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-green-400 text-sm mb-2 font-medium">Digitalife.com.py</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Consigue soluciones para todas<br />
                las necesidades de tu empresa.
              </h2>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Left Side - Office Info & Map */}
          <div className="bg-slate-800 p-8 lg:p-12">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Oficinas</h3>
              <p className="text-gray-300 mb-8">¡Te esperamos para impulsar tu empresa al éxito!</p>
              
              {/* Map Container */}
              <div className="bg-gray-200 rounded-lg mb-8 h-64 relative overflow-hidden">
                {!iframeError && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3951404811846!2d-57.57556688841523!3d-25.290924977557495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9c555a9917d%3A0x4e1ef8ff980dae02!2sGRUPO%20BEPA!5e0!3m2!1sen!2spy!4v1754921642278!5m2!1sen!2spy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    onError={() => setIframeError(true)}
                  />
                )}

                {iframeError && (
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Mapa de ubicación</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-sm text-gray-300">
                    CODE100 Villamorra, Brasilia N.° 750 entre Mariscal Antonio José Sucre y Eusebio Lillo Robles
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-gray-300">+595 21 729 6900</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-gray-300">contacto@digitallife.com.py</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-green-100 p-8 lg:p-12">
            <div className="max-w-md mx-auto text-black">
              <p className="text-gray-600 text-sm mb-2">¿Tienes dudas?</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Contáctanos</h3>
              
              <form 
                action="https://formsubmit.co/rgodoy@datalock.com.py" 
                method="POST"
                className="space-y-6"
              >
                {/* Campos ocultos para configuración */}
                <input type="hidden" name="_captcha" value="false" />
                  <input 
                    type="hidden" 
                    name="_next" 
                    value="https://digitalife.com.py/gracias" 
                  />
                  <input 
                    type="hidden" 
                    name="_subject" 
                    value="Nuevo mensaje desde digitalife.com.py" 
                  />
                  <input 
                    type="hidden" 
                    name="_template" 
                    value="table" 
                  />
                  <input 
                    type="text" 
                    name="_honey" 
                    style={{display: 'none'}} 
                  />

                <div>
                  <input
                    type="text"
                    name="Nombre"
                    placeholder="Nombre *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="Apellidos"
                    placeholder="Apellidos *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="Email"
                    placeholder="E-mail *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="Teléfono"
                    placeholder="Teléfono *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
                
                <div>
                  <textarea
                    name="Proyecto"
                    placeholder="Proyecto que le gustaría realizar *"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="Acepta términos"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                    <span className="text-red-500">*</span> Acepto los Términos de uso
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={!formData.acceptTerms}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Enviar
                </button>
                
                {/* reCAPTCHA Placeholder - Solo visual, no funcional con FormSubmit */}
                <div className="flex justify-end">
                  <div className="bg-gray-200 border border-gray-300 rounded p-2 text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border border-gray-400 rounded"></div>
                      <span>No soy un robot</span>
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-blue-500">Protección contra spam</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in-up">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>¡Gracias! Tu mensaje ha sido enviado.</span>
          </div>
        </div>
      )}
    </>
  )
}