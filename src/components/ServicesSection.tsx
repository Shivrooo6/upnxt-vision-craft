import { Video, Camera, Palette, TrendingUp, Code, Smartphone } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing with cinematic quality and storytelling expertise.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Camera,
    title: "Videography & Cinematography",
    description: "Capturing compelling visual stories with state-of-the-art equipment.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Creative visual designs that communicate your brand message effectively.",
    gradient: "from-accent to-primary"
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven marketing strategies that deliver measurable results.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description: "Native Android applications with seamless user experiences.",
    gradient: "from-accent to-secondary"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and engage your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card-3d bg-card rounded-2xl p-8 hover:bg-gradient-to-br hover:from-card hover:to-muted/50 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 text-primary font-medium group-hover:text-accent transition-colors duration-300">
                  Learn More →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;