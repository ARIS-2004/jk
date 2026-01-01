import { useEffect, useRef, useState } from 'react';

const projectImages = [
  '/pic1.jpeg',
  '/pic2.jpeg',
  '/pic3.jpg',
  '/pic4.jpg',
  '/pic5.jpg',
];

const FeaturedProperties = () => {
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
    <section id="properties" ref={sectionRef} className="py-12 lg:py-16 relative overflow-hidden">
      {/* Premium Border Effects */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="glass-card p-8 lg:p-12 border-2 border-primary/20 rounded-3xl">
          {/* Section Header */}
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
              Project <span className="text-gold-gradient">Gallery</span>
            </h2>
          </div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <div
                key={index}
                className={`glass-card p-2 group hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
