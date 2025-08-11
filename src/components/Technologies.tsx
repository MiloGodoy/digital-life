export default function Technologies() {
    const technologyCategories = [
      {
        title: "BASE DE DATOS",
        technologies: [
          { name: "MySQL", icon: "/mysql.jpeg" },
          { name: "MongoDB", icon: "/mongodb.jpeg" },
          { name: "PostgreSQL", icon: "/postgre.jpeg" },
          { name: "Redis", icon: "/redis.jpeg" },
          { name: "Firebase", icon: "/firebase.jpeg" }
        ]
      },
      {
        title: "PROGRAMACIÓN",
        technologies: [
          { name: "Angular", icon: "/angular.jpeg" },
          { name: "React", icon: "/react.jpeg" },
          { name: "HTML5", icon: "/html.jpeg" },                       
          { name: "JavaScript", icon: "/javascript.jpeg" },
          { name: "Node.js", icon: "/node.jpeg" },
          { name: "Bootstrap", icon: "/bootstrap.jpeg" },
          { name: "CSS3", icon: "/css.jpeg" },
          { name: "Java", icon: "/java.jpeg" },
          { name: "PHP", icon: "/php.jpeg" }
        ]
      },
      {
        title: "PLATAFORMAS DE DESARROLLO",
        technologies: [
          { name: "Jira", icon: "/jira.jpeg" },
          { name: "VS Code", icon: "/vscode.jpeg" },
          { name: "IntelliJ", icon: "/intelliJ.jpeg" },
          { name: "Slack", icon: "/slack.jpeg" }
        ]
      },
      {
        title: "MÓVILES",
        technologies: [
          { name: "Android", icon: "/android.jpeg" },
          { name: "iOS", icon: "/apple.jpeg" }
        ]
      },
      {
        title: "PROYECTOS",
        technologies: [
          { name: "Slack", icon: "/slack.jpeg" },
          { name: "Trello", icon: "/trello.jpeg" },
          { name: "GitHub", icon: "/github.jpeg" }
        ]
      },
      {
        title: "SOFTWARE SKILLS",
        technologies: [
          { name: "Docker", icon: "/docker.jpeg" },
          { name: "Apache", icon: "/apache.jpeg" },
          { name: "CentOS", icon: "centos.jpeg" },
          { name: "Ubuntu", icon: "ubuntu.jpeg" },
          { name: "VirtualBox", icon: "/virtual_box.jpeg" },
          { name: "Kubernetes", icon: "/kubernetes.jpeg" },
          { name: "AWS", icon: "/aws.jpeg" },
          { name: "Google Cloud", icon: "/google.jpeg" }
        ]
      }
    ]
  
    const reasons = [
      {
        title: "Software a medida",
        description: "Desarrollamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio."
      },
      {
        title: "Metodologías ágiles",
        description: "Utilizamos metodologías ágiles para garantizar entregas rápidas y de alta calidad en cada proyecto."
      },
      {
        title: "Experiencia comprobada",
        description: "Más de 6 años de experiencia desarrollando software para empresas de diferentes sectores."
      },
      {
        title: "Soporte 24/7",
        description: "Ofrecemos soporte técnico continuo para asegurar el funcionamiento óptimo de tus sistemas."
      },
      {
        title: "Tecnología de vanguardia",
        description: "Trabajamos con las últimas tecnologías y frameworks para crear soluciones modernas y escalables."
      },
      {
        title: "Precios competitivos",
        description: "Ofrecemos tarifas justas y transparentes sin comprometer la calidad de nuestros servicios."
      }
    ]
  
    return (
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tecnologías
            </h2>
          </div>
  
          {/* Technology Categories */}
          <div className="space-y-12 mb-16">
            {technologyCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-6 tracking-wide">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="group flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <img src={tech.icon || "/placeholder.svg"}
                          alt={`${tech.name} logo`}
                          className="w-14 h-14 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300"/>
                      </div>
                      <span className="text-xs md:text-sm text-gray-600 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          {/* 6 Reasons Section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              6 Razones
            </h3>
            <p className="text-gray-600 text-lg">
              Por las que somos tu mejor opción
            </p>
          </div>
  
          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-slate-800 text-white p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-400 transition-colors duration-300">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">
                      {reason.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }