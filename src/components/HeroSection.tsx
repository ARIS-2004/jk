import { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  Building2,
  MapPin,
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroSlides = [
    {
      image: "/pic1.jpeg",
      title: "Building Tomorrow's",
      highlight: "Landmarks",
      subtitle: "Today.",
      description:
        "Premium residential & commercial developments crafted with precision for modern living. Experience luxury redefined.",
      project: "Skyline Heights",
      location: "Baner, Pune",
      badge: "Featured Project",
    },
    {
      image: "/pic2.jpeg",
      title: "Luxury Living",
      highlight: "Redefined",
      subtitle: "Forever.",
      description:
        "Exquisite homes designed for the discerning few. Where every detail speaks of uncompromising quality and elegance.",
      project: "Royal Gardens",
      location: "Koregaon Park, Pune",
      badge: "Premium Collection",
    },
    {
      image: "/pic3.jpg",
      title: "Commercial",
      highlight: "Excellence",
      subtitle: "Delivered.",
      description:
        "State-of-the-art commercial spaces that inspire success. Built for businesses that demand the extraordinary.",
      project: "Business Plaza",
      location: "Hinjewadi, Pune",
      badge: "Commercial Hub",
    },
    {
      image: "/pic4.jpg",
      title: "Sustainable",
      highlight: "Architecture",
      subtitle: "Realized.",
      description:
        "Eco-friendly developments that harmonize luxury with environmental responsibility. The future of conscious living.",
      project: "Green Valley",
      location: "Wakad, Pune",
      badge: "Eco-Luxury",
    },
    {
      image: "/pic5.jpg",
      title: "Premium",
      highlight: "Residences",
      subtitle: "Crafted.",
      description:
        "Meticulously designed homes that blend contemporary aesthetics with timeless elegance. Your sanctuary awaits.",
      project: "Elite Towers",
      location: "Viman Nagar, Pune",
      badge: "Luxury Living",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Auto-slide functionality
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(slideInterval);
    };
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cream via-warm-white to-cream">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/15 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Premium pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50m-20 0a20,20 0 1,1 40,0a20,20 0 1,1 -40,0M30 30m-10 0a10,10 0 1,1 20,0a10,10 0 1,1 -20,0M70 70m-10 0a10,10 0 1,1 20,0a10,10 0 1,1 -20,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Premium border accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Mouse follower glow */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-10 opacity-10 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at center, hsl(var(--gold) / 0.3) 0%, transparent 70%)`,
          transform: `translate(${mousePosition.x - 192}px, ${
            mousePosition.y - 192
          }px)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 min-h-screen items-center pt-20 sm:pt-24 pb-12 sm:pb-16">
          {/* Left Content */}
          <div
            className={`max-w-2xl mx-auto lg:mx-0 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Premium Badge Section */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-sm" />
              </div>
            </div>

            <div className="mb-8">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] text-foreground">
                <span className="block animate-fade-in-up">
                  {currentHero.title}
                </span>
                <span className="block text-gold-gradient animate-fade-in-up delay-200 relative">
                  {currentHero.highlight}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-transparent rounded-lg -z-10 blur-xl" />
                </span>
                <span className="block text-muted-foreground font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 animate-fade-in-up delay-400">
                  {currentHero.subtitle}
                </span>
              </h1>
            </div>

            {/* Dynamic Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up delay-600">
              {currentHero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up delay-800">
              <Link to="/properties" className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <span className="relative flex items-center gap-3 px-6 sm:px-8 py-3 text-primary-foreground font-bold text-sm tracking-wide rounded-full">
                  Explore Properties
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right - Premium Carousel */}
          <div
            className={`relative lg:pl-8 pt-8 lg:pt-12 order-first lg:order-last transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Carousel Container */}
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Carousel */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentSlide
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={`Property ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium slide indicators */}
              <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-500 rounded-full ${
                      index === currentSlide
                        ? "w-6 sm:w-8 h-2 bg-gradient-to-r from-primary to-primary/70"
                        : "w-2 h-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
