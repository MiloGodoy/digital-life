'use client'

export default function CustomSoftwareBenefits() {
  const benefits = [
    {
      title: "Flexibilidad y escalabilidad",
      description: "Te permite adaptarte rápidamente a cambios y crecer sin limitaciones tecnológicas.",
      image: "/flexibilidad.jpg"
    },
    {
      title: "Eficiencia operativa",
      description: "Optimiza procesos internos, reduciendo costos y aumentando la productividad.",
      image: "/eficiencia.jpg"
    },
    {
      title: "Experiencia del cliente",
      description: "Mejora la satisfacción del cliente al proporcionar servicios más personalizados y efectivos.",
      image: "/cliente.jpg"
    },
    {
      title: "Competitividad",
      description: "Te diferencia en el mercado al ofrecer soluciones adaptadas exclusivamente para tus clientes.",
      image: "/competitividad.jpg"
    },
    {
      title: "Maximización del retorno de inversión",
      description: "Al alinear perfectamente el software con tus necesidades, maximizas los beneficios y minimizas los costos a largo plazo.",
      image: "/retorno.jpg"
    }
  ]

  return (
    <section className="bg-green-500 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white text-sm mb-4 font-medium">
            Únete a la era digital
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            ¿En que te ayuda un software a medida?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First row - 3 cards */}
          {benefits.slice(0, 3).map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-slate-800 p-6">
                <h3 className="text-white font-semibold text-lg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Second row - 2 cards centered */}
          <div className="lg:col-start-1 lg:col-end-4 flex justify-center gap-6">
            {benefits.slice(3, 5).map((benefit, index) => (
              <div 
                key={index + 3}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-slate-800 p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}