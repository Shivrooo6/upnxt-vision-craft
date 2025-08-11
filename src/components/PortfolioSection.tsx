import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioVideo from "@/assets/portfolio-video.jpg";
import portfolioApp from "@/assets/portfolio-app.jpg";
import portfolioDesign from "@/assets/portfolio-design.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Video Production Suite",
    category: "Video Editing",
    image: portfolioVideo,
    description: "Professional video editing workflow for enterprise clients"
  },
  {
    id: 2,
    title: "Modern Web Development",
    category: "Web Development",
    image: portfolioApp,
    description: "Responsive and modern web applications with cutting-edge technology"
  },
  {
    id: 3,
    title: "Brand Identity Package",
    category: "Graphic Design",
    image: portfolioDesign,
    description: "Complete brand identity and marketing materials"
  },
  {
    id: 4,
    title: "Cinematography & Film Production",
    category: "Cinematography",
    image: portfolioVideo,
    description: "High-quality cinematography and film production services"
  },
  {
    id: 5,
    title: "Drone Photography & Videography",
    category: "Drone Shoot",
    image: portfolioApp,
    description: "Stunning aerial shots and drone videography for projects"
  },
  {
    id: 6,
    title: "Real Estate Marketing",
    category: "Real Estate",
    image: portfolioDesign,
    description: "Complete real estate marketing solutions and property showcases"
  }
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our latest projects and creative solutions
          </p>
        </div>

        <div className="relative">
          {/* Main Portfolio Display */}
          <div className="relative overflow-hidden rounded-3xl bg-card shadow-2xl">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-96 lg:h-[600px] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    <div className="p-12 lg:p-16 flex flex-col justify-center">
                      <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
                        {item.category}
                      </div>
                      <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <Button className="w-fit bg-primary hover:bg-primary-hover text-primary-foreground">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card border-primary/20 backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card border-primary/20 backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;