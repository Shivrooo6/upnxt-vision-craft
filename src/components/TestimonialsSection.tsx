import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content: "Upnxt transformed our digital presence completely. Their video content and marketing strategies increased our engagement by 300%. Absolutely phenomenal work!",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "EcoGreen Solutions",
    role: "Marketing Director",
    content: "The team's creativity and technical expertise are unmatched. They delivered a stunning app that exceeded all our expectations. Highly recommend their services!",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "Fashion Forward",
    role: "Brand Manager",
    content: "Professional, reliable, and incredibly talented. Upnxt helped us rebrand completely with amazing graphic design and web development. Results speak for themselves!",
    rating: 5,
    avatar: "ER"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped grow
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="card-3d bg-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
                    <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                    
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="flex justify-center mb-6">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
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

export default TestimonialsSection;