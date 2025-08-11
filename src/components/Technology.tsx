'use client'

export default function TechnologyShowcase() {
  const technologies = [
    {
      name: "FUTURA100",
      background: "bg-slate-800",
      logoColor: "text-cyan-400",
      benefits: [
        {
          number: "1",
          title: "Cumplimiento legal",
          description: "Automatización completa para el cumplimiento de obligaciones fiscales y laborales, garantizando el apego a la normativa vigente."
        },
        {
          number: "2", 
          title: "Ahorro de tiempo y costos",
          description: "Optimización de procesos administrativos que reduce significativamente el tiempo de gestión y los costos operativos."
        },
        {
          number: "3",
          title: "Mayor seguridad y trazabilidad", 
          description: "Sistema robusto que garantiza la integridad de los datos y proporciona un seguimiento completo de todas las operaciones."
        },
        {
          number: "4",
          title: "Mejora la eficiencia operativa",
          description: "Herramientas avanzadas que optimizan los flujos de trabajo y aumentan la productividad de tu organización."
        }
      ]
    },
    {
      name: "TALENTO100",
      subtitle: "Competencia, Desempeño y Resultados",
      background: "bg-green-100",
      logoColor: "text-gray-700",
      textColor: "text-gray-800",
      benefits: [
        {
          number: "1",
          title: "Cumplimiento normativo",
          description: "Asegura el cumplimiento de todas las regulaciones laborales y de recursos humanos vigentes en tu país."
        },
        {
          number: "2",
          title: "Seguridad y confidencialidad", 
          description: "Protección avanzada de datos personales y confidenciales con los más altos estándares de seguridad."
        },
        {
          number: "3", 
          title: "Simplificación de procesos",
          description: "Automatización de procesos complejos de RRHH que simplifica la gestión del talento humano."
        },
        {
          number: "4",
          title: "Acceso remoto y movilidad",
          description: "Plataforma accesible desde cualquier dispositivo y ubicación para máxima flexibilidad operativa."
        }
      ]
    },
    {
      name: "DATAFLOW",
      background: "bg-slate-800", 
      logoColor: "text-yellow-400",
      logoAccent: "text-cyan-400",
      benefits: [
        {
          number: "1",
          title: "Versatilidad",
          description: "Adaptabilidad completa a diferentes tipos de negocio y sectores industriales con configuraciones personalizables."
        },
        {
          number: "2",
          title: "Accesibilidad", 
          description: "Interfaz intuitiva y accesible que permite a usuarios de todos los niveles técnicos operar eficientemente."
        },
        {
          number: "3",
          title: "Seguridad",
          description: "Protocolos de seguridad de nivel empresarial que garantizan la protección de información crítica."
        },
        {
          number: "4", 
          title: "Colaboración eficiente",
          description: "Herramientas colaborativas que facilitan el trabajo en equipo y mejoran la comunicación organizacional."
        }
      ]
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 bg-slate-800 py-8 rounded-lg">
          Tecnología que te impulsa al éxito.
        </h2>

        {/* Technology Cards */}
        <div className="space-y-16">
          {technologies.map((tech, index) => (
            <div key={index} className={`${tech.background} rounded-2xl p-8 md:p-12`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Left Benefits */}
                <div className="space-y-8">
                  <div className={`${tech.textColor || 'text-white'}`}>
                    <div className="flex items-start space-x-3 mb-6">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {tech.benefits[0].number}
                      </span>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{tech.benefits[0].title}</h3>
                        <p className="text-sm opacity-90 leading-relaxed">{tech.benefits[0].description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${tech.textColor || 'text-white'}`}>
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {tech.benefits[2].number}
                      </span>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{tech.benefits[2].title}</h3>
                        <p className="text-sm opacity-90 leading-relaxed">{tech.benefits[2].description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Logo */}
                <div className="text-center">
                  <div className={`${tech.logoColor} text-4xl md:text-5xl font-bold`}>
                    {tech.name === "DATAFLOW" ? (
                      <div>
                        <span className="text-yellow-400">DATA</span>
                        <span className="text-cyan-400">FLOW</span>
                      </div>
                    ) : (
                      tech.name
                    )}
                  </div>
                  {tech.subtitle && (
                    <p className={`${tech.textColor || 'text-white'} text-sm mt-2 opacity-80`}>
                      {tech.subtitle}
                    </p>
                  )}
                </div>

                {/* Right Benefits */}
                <div className="space-y-8">
                  <div className={`${tech.textColor || 'text-white'}`}>
                    <div className="flex items-start space-x-3 mb-6">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {tech.benefits[1].number}
                      </span>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{tech.benefits[1].title}</h3>
                        <p className="text-sm opacity-90 leading-relaxed">{tech.benefits[1].description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${tech.textColor || 'text-white'}`}>
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {tech.benefits[3].number}
                      </span>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{tech.benefits[3].title}</h3>
                        <p className="text-sm opacity-90 leading-relaxed">{tech.benefits[3].description}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}