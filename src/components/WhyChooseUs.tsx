import { useEffect, useRef, useState } from 'react';
import { Gem, Clock, Leaf, Headphones, Trophy, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Premium Quality',
    description: 'Only the finest materials and craftsmanship go into every project we build.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We honor our commitments with industry-leading project timelines.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    description: 'Eco-conscious architecture that reduces environmental impact.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated customer service throughout your ownership journey.',
  },
  {
    icon: Trophy,
    title: 'Award Winning',
    description: 'Recognized excellence with multiple industry accolades.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Brand',
    description: '25+ years of proven track record and customer trust.',
  },
];

const WhyChooseUs = () => {
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
    <section ref={sectionRef} className="py-12 lg:py-16 relative overflow-hidden">
      {/* Premium Border Effects */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="glass-card p-8 lg:p-12 border-2 border-primary/20 rounded-3xl">
          {/* Section Header */}
          <div className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-primary text-sm tracking-widest uppercase font-medium">Why Choose Us</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-4 mb-4">
              The <span className="text-gold-gradient">JK</span> Difference
            </h2>
            <p className="text-muted-foreground text-base">
              Experience the exceptional standards that set us apart in luxury real estate development.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`glass-card p-6 group hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
