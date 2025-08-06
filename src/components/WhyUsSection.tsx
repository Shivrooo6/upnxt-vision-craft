import { Zap, Clock, Target, BarChart3, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Creative Excellence",
    description: "Innovative solutions that push creative boundaries and deliver exceptional results.",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Streamlined processes and dedicated teams ensure projects are completed on time.",
    color: "text-secondary"
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed to achieve measurable outcomes and business growth.",
    color: "text-accent"
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Clear, detailed reports that show exactly how your investment is performing.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Reliable Partnership",
    description: "Long-term relationships built on trust, quality, and consistent performance.",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with expertise across all digital marketing disciplines.",
    color: "text-accent"
  }
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Upnxt</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional results for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl hover:bg-muted/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2.5x</div>
            <div className="text-muted-foreground">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">48h</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;