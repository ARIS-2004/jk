import { useEffect, useRef, useState } from 'react';
import { Award, Users, Building2, Shield } from 'lucide-react';

const stats = [
  { icon: Building2, value: '150+', label: 'Projects Completed' },
  { icon: Users, value: '5000+', label: 'Happy Families' },
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: Shield, value: '100%', label: 'Quality Assured' },
];

const AboutSection = () => {
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
    <section ref={sectionRef} className="py-24 lg:py-32 relative">
      {/* Premium Border Effects */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="glass-card p-8 lg:p-12 border-2 border-primary/20 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
            <span className="text-primary text-sm tracking-widest uppercase font-medium">About JK Infrastructure</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 mb-8">
              Crafting <span className="text-gold-gradient">Iconic</span> Spaces Since 1998
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                For over two decades, JK Infrastructure has been at the forefront of transforming 
                Mumbai's skyline with visionary architecture and uncompromising quality.
              </p>
              <p>
                Our commitment to excellence extends beyond construction — we create living experiences 
                that inspire, nurture, and elevate the human spirit. Every project is a testament to 
                our philosophy: building not just structures, but legacies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a href="/contact" className="btn-luxury">
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-3 sm:p-4 lg:p-8 text-center group hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-primary" />
                </div>
                <div className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-serif font-semibold text-gold-gradient mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground tracking-wide leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
