import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
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

  return (
    <section ref={sectionRef} className="py-8 lg:py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="w-full px-4 relative z-10">
        <div className={`glass-card p-6 md:p-8 text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* Heading */}
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            Ready to Find Your <span className="text-gold-gradient">Dream Home?</span>
          </h2>
          
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-6">
            Take the first step towards luxury living. Our experts are ready to guide you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a href="tel:+919831683494" className="btn-luxury flex items-center gap-2 px-6 py-3 text-sm relative z-10">
              <Phone className="w-4 h-4" />
              <span className="relative z-10">Call Now</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-primary" />
              <span>+91 98316 83494</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-primary" />
              <span>jkl.kolkata4@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-primary" />
              <span>Premises No. 595 & 570, Plot No. AA IIB-1274, Kolkata - 700156</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
