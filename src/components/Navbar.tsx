import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Sparkles,
  Star,
  Crown,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const navigate = useNavigate();

  const handlePropertiesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('properties');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'properties' } });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Handle hash navigation
    const handleHashNavigation = () => {
      if (window.location.hash === '#properties') {
        setTimeout(() => {
          const element = document.getElementById('properties');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("load", handleHashNavigation);
    
    // Check hash on component mount
    handleHashNavigation();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("load", handleHashNavigation);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Crown },
    { name: "Properties", href: "/#properties", icon: Star, onClick: handlePropertiesClick },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* Ultra Premium Glow Effects */}
      <div
        className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-40 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at center, hsl(var(--gold) / 0.25) 0%, hsl(var(--primary) / 0.15) 30%, transparent 70%)`,
          transform: `translate(${mousePosition.x - 300}px, ${
            mousePosition.y - 300
          }px)`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-41 opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at center, hsl(var(--accent) / 0.2) 0%, transparent 60%)`,
          transform: `translate(${mousePosition.x - 200}px, ${
            mousePosition.y - 200
          }px)`,
        }}
      />

      <nav className="fixed top-3 left-3 right-3 z-[9999]">
        {/* CLIPPED DECORATION CONTAINER */}
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-1000 z-[9999] ${
            isScrolled
              ? "bg-background/80 backdrop-blur-3xl border-2 border-primary/30 py-2 shadow-2xl shadow-primary/10"
              : "bg-background/70 backdrop-blur-2xl border-2 border-white/20 py-3"
          }`}
        >
          {/* Ultra Premium Border Effects */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 transition-opacity duration-1000 pointer-events-none ${
              isScrolled ? "opacity-100" : "opacity-60"
            }`}
          />
          <div
            className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-opacity duration-1000 pointer-events-none ${
              isScrolled ? "opacity-100" : "opacity-40"
            }`}
          />
          <div
            className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent transition-opacity duration-1000 pointer-events-none ${
              isScrolled ? "opacity-100" : "opacity-40"
            }`}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-between">
              {/* Ultra Premium Logo */}
              <Link
                to="/"
                className="flex items-center gap-3 sm:gap-4"
              >
                <img
                  src="/logo.png"
                  alt="JK Infrastructure"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                />
                <div className="block">
                  <div className="font-serif text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:via-accent group-hover:to-primary transition-all duration-700">
                    <span className="sm:hidden">JK Infrastructure</span>
                    <span className="hidden sm:inline">JK Infrastructure</span>
                  </div>
                </div>
              </Link>

              {/* Ultra Premium Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={link.onClick}
                    className="relative group py-3 px-4"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <link.icon className="w-4 h-4 text-foreground/60 group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
                      <span className="text-foreground/80 hover:text-foreground transition-all duration-700 text-sm tracking-[0.2em] uppercase font-bold group-hover:tracking-[0.3em]">
                        {link.name}
                      </span>
                    </div>
                    {/* Multiple underline effects */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-700 rounded-full" />
                    <div className="absolute bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500 delay-100" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl scale-0 group-hover:scale-100 transition-all duration-500 -z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-20 blur-sm pointer-events-none" />
                  </Link>
                ))}
              </div>

              {/* Ultra Premium CTA Section */}
              <div className="flex items-center gap-3 sm:gap-6">
                {/* Ultra Premium Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden relative w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-primary/30 hover:border-primary/50 flex items-center justify-center transition-all duration-500 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 scale-0 group-hover:scale-100 transition-transform duration-500 pointer-events-none" />
                  <div className="absolute inset-0 bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-foreground relative z-10 group-hover:rotate-90 transition-transform duration-500" />
                  ) : (
                    <Menu className="w-6 h-6 text-foreground relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU (NOT CLIPPED) */}
        <div className="relative z-[9999]">
          <div
            className={`lg:hidden transition-all duration-1000 z-[9999] ${
              isMobileMenuOpen ? "max-h-[500px] mt-6" : "max-h-0 overflow-hidden"
            }`}
          >
            <div className="bg-background/95 backdrop-blur-3xl border-2 border-primary/30 rounded-3xl p-6 sm:p-8 space-y-6">
              {navLinks.map((link, index) => {
                if (link.name === "Properties") {
                  return (
                    <button
                      key={link.name}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        handlePropertiesClick(e);
                      }}
                      className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-all duration-500 py-4 text-base font-bold tracking-[0.15em] uppercase hover:translate-x-3 hover:scale-105 group cursor-pointer w-full text-left"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <link.icon className="w-5 h-5" />
                      </div>
                      {link.name}
                    </button>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-all duration-500 py-4 text-base font-bold tracking-[0.15em] uppercase hover:translate-x-3 hover:scale-105 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <link.icon className="w-5 h-5" />
                    </div>
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-primary/20">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-all duration-500 py-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-primary/80 uppercase tracking-wide font-bold">
                      Luxury Hotline
                    </div>
                    <div className="font-bold">+91 98765 43210</div>
                  </div>
                </a>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-5 rounded-full bg-gradient-to-r from-primary via-accent/20 to-primary text-primary-foreground font-bold text-sm tracking-[0.15em] uppercase hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-700 mt-6 border border-primary/30"
              >
                <Crown className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;