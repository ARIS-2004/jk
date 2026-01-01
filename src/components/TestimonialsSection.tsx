import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    content: 'JK Infrastructure delivered beyond our expectations. The attention to detail in our penthouse is remarkable. Every corner reflects their commitment to luxury and quality.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Mehta',
    content: 'Working with JK Infrastructure was a pleasure. Their understanding of modern design sensibilities and commitment to timelines is unmatched in the industry.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Vikram Patel',
    content: 'From the first meeting to handover, the experience was seamless. Our family has found its forever home in one of their beautiful projects. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Anita Singh',
    content: 'Outstanding quality and professional service. The team at JK Infrastructure made our dream home a reality with exceptional craftsmanship.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Rohit Kumar',
    content: 'Impressed by their attention to detail and timely delivery. JK Infrastructure truly understands what luxury living means.',
    rating: 3,
  },
  {
    id: 6,
    name: 'Deepika Agarwal',
    content: 'Excellent service from start to finish. The quality of construction and finishing is top-notch. Highly satisfied with our investment.',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getCurrentTestimonials = () => {
    const first = testimonials[currentIndex];
    const second = testimonials[(currentIndex + 1) % testimonials.length];
    return [first, second];
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Premium Border Effects */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm tracking-widest uppercase font-medium">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mt-4 mb-6">
            What Our <span className="text-gold-gradient">Clients</span> Say
          </h2>
          <div className="section-divider mt-8" />
        </div>

        {/* Testimonial Cards */}
        <div className={`grid md:grid-cols-2 gap-6 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          {getCurrentTestimonials().map((testimonial, index) => (
            <div key={`${testimonial.id}-${currentIndex}`} className="glass-card p-6 md:p-8 relative animate-fade-in-up">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < testimonial.rating 
                        ? 'fill-primary text-primary' 
                        : 'text-muted-foreground/30'
                    }`} 
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Name */}
              <div className="font-serif text-lg font-medium text-primary">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
