import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Residential Complex',
    name: 'Premium Apartments',
    image: '/pic1.jpeg',
    desc: 'Modern residential complex with luxury amenities'
  },
  {
    title: 'Commercial Plaza',
    name: 'Business Hub',
    image: '/pic2.jpeg',
    desc: 'State-of-the-art commercial space for enterprises'
  },
  {
    title: 'Villa Project',
    name: 'Luxury Villas',
    image: '/pic3.jpg',
    desc: 'Exclusive villa development with premium finishes'
  },
  {
    title: 'High-Rise Tower',
    name: 'Sky Residences',
    image: '/pic4.jpg',
    desc: 'Towering residential complex with panoramic views'
  },
  {
    title: 'Mixed Development',
    name: 'Urban Living',
    image: '/pic5.jpg',
    desc: 'Integrated mixed-use development project'
  },
  {
    title: 'Premium Homes',
    name: 'Elite Residences',
    image: '/pic6.jpeg',
    desc: 'Sophisticated homes with contemporary design'
  },
  {
    title: 'Luxury Estate',
    name: 'Grand Residences',
    image: '/pic7.jpeg',
    desc: 'Exclusive luxury estate with premium amenities'
  },
  {
    title: 'Modern Complex',
    name: 'Contemporary Living',
    image: '/pic8.jpeg',
    desc: 'Modern architectural complex with innovative design'
  }
];

const FeaturedProperties = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleNavigation = (direction: number) => {
    setCurrentIndex((prev) => (prev + direction + projects.length) % projects.length);
  };

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

          {/* Interactive Stack Gallery */}
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Image Stack */}
            <div className="relative w-96 h-96 flex-shrink-0">
              {projects.map((project, index) => {
                const offset = (index - currentIndex + projects.length) % projects.length;
                const zIndex = projects.length - offset;
                const rotation = (Math.random() - 0.5) * 30;
                const isActive = index === currentIndex;
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{
                      zIndex,
                      transform: isActive 
                        ? 'translate(0, 0) rotate(0deg) scale(1)' 
                        : `translate(${offset * 8}px, ${offset * 8}px) rotate(${rotation}deg) scale(${1 - offset * 0.05})`,
                      opacity: offset > 2 ? 0 : 1
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.desc}
                      className="w-full h-full object-cover rounded-2xl border-2 border-primary/30 shadow-2xl"
                    />
                  </div>
                );
              })}
            </div>

            {/* Project Info & Controls */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              {/* Counter */}
              <div className="text-primary/60 font-medium text-lg">
                {currentIndex + 1} / {projects.length}
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="font-serif text-3xl lg:text-4xl font-medium text-foreground">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-primary font-semibold text-xl">
                  {projects[currentIndex].name}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  {projects[currentIndex].desc}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => handleNavigation(-1)}
                  className="w-14 h-14 rounded-full glass-card border border-primary/20 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                </button>
                <button
                  onClick={() => handleNavigation(1)}
                  className="w-14 h-14 rounded-full glass-card border border-primary/20 flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
