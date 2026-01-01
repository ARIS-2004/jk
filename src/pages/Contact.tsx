import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Sparkles,
  Crown,
  MessageCircle,
  Calendar,
  User,
  Building,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-building.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyInterest: "",
    budget: "",
    timeline: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Our consultants will contact you within 2 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      propertyInterest: "",
      budget: "",
      timeline: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Primary",
      value: "+91 98316 83494",
      href: "tel:+919831683494",
      description: "24/7 Support",
      color: "from-primary/20 to-primary/10",
    },
    {
      icon: Phone,
      title: "Secondary",
      value: "+91 62908 34323",
      href: "tel:+916290834323",
      description: "Alternative Contact",
      color: "from-primary/15 to-primary/5",
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "jkl.kolkata4@gmail.com",
      href: "mailto:jkl.kolkata4@gmail.com",
      description: "Quick Response Guaranteed",
      color: "from-accent/20 to-accent/10",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Premises No. 595 & 570, Plot No. AA IIB-1274, Kolkata - 700156",
      href: "#",
      description: "Visit Our Showroom",
      color: "from-emerald/20 to-emerald/10",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Sat: 10AM - 8PM",
      href: "#",
      description: "Sunday by Appointment",
      color: "from-primary/15 to-accent/10",
    },
  ];

  const services = [
    {
      icon: Building,
      title: "Property Consultation",
      description: "Expert guidance for your investment",
    },
    {
      icon: Calendar,
      title: "Site Visits",
      description: "Personalized property tours",
    },
    {
      icon: MessageCircle,
      title: "Investment Advisory",
      description: "Strategic real estate planning",
    },
    {
      icon: Crown,
      title: "VIP Services",
      description: "Exclusive assistance",
    },
  ];

  return (
    <div className="min-h-screen bg-premium-gradient">
      <Navbar />

      {/* Premium Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Background with parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 opacity-50"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `scale(${1 + scrollY * 0.0003}) translateY(${
              scrollY * 0.2
            }px)`,
          }}
        />

        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Mouse follower glow */}
        <div
          className="absolute w-96 h-96 pointer-events-none opacity-10 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at center, hsl(var(--gold) / 0.3) 0%, transparent 70%)`,
            transform: `translate(${mousePosition.x - 192}px, ${
              mousePosition.y - 192
            }px)`,
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          {/* Premium badge */}
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-lg" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up pt-4 leading-tight">
            <span className="block text-foreground leading-tight">Contact</span>
            <span className="block text-gold-gradient animate-shimmer leading-tight">
              Our Experts
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300 px-4">
            Ready to find your{" "}
            <span className="text-gold-gradient font-bold">dream home</span>?
            Our team is here to guide you through your{" "}
            <span className="text-gold-gradient font-bold">
              property journey
            </span>
            .
          </p>

          <div className="section-divider mt-8 animate-fade-in-up delay-500" />
        </div>
      </section>

      {/* Premium Contact Section */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Premium Contact Form */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 rounded-3xl blur-xl" />
              <div className="relative card-premium p-6 sm:p-8 lg:p-12">
                <div className="text-center mb-8 lg:mb-10">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                    Send us a{" "}
                    <span className="text-gold-gradient">Message</span>
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                    Our consultants will respond within 2 hours
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                  <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-bold text-foreground mb-3 tracking-wide">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 lg:py-4 rounded-xl bg-background/50 border-2 border-border/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground font-medium text-sm lg:text-base"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="block text-sm font-bold text-foreground mb-3 tracking-wide">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 lg:py-4 rounded-xl bg-background/50 border-2 border-border/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground font-medium text-sm lg:text-base"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-bold text-foreground mb-3 tracking-wide">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 lg:py-4 rounded-xl bg-background/50 border-2 border-border/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground font-medium text-sm lg:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-3 tracking-wide">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 lg:py-4 rounded-xl bg-background/50 border-2 border-border/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground font-medium text-sm lg:text-base"
                    >
                      <option value="">Select budget</option>
                      <option value="2-5cr">₹2-5 Crores</option>
                      <option value="5-10cr">₹5-10 Crores</option>
                      <option value="10-20cr">₹10-20 Crores</option>
                      <option value="20cr+">₹20+ Crores</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-3 tracking-wide">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 lg:py-4 rounded-xl bg-background/50 border-2 border-border/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none font-medium text-sm lg:text-base"
                      placeholder="Tell us about your dream home requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <span className="relative flex items-center justify-center gap-3 px-6 sm:px-8 py-4 lg:py-5 text-primary-foreground font-bold text-base lg:text-lg tracking-wide rounded-xl">
                      Send Message
                      <Send className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 lg:space-y-10 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Get in{" "}
                  <span className="text-gold-gradient animate-shimmer">
                    Touch
                  </span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                  Experience our service through multiple touchpoints.
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full mx-auto lg:mx-0" />
              </div>

              <div className="grid gap-3 lg:gap-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <a
                      href={item.href}
                      className="relative block card-premium p-3 lg:p-4 hover-lift"
                    >
                      <div className="flex items-start gap-3 lg:gap-4">
                        <div className="relative flex-shrink-0">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-sm`}
                          />
                          <div className="relative w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-background to-background/80 border border-primary/20 flex items-center justify-center">
                            <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif text-base lg:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-500">
                            {item.title}
                          </h3>
                          <p className="text-foreground font-semibold text-xs lg:text-sm mb-1 break-words">
                            {item.value}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl blur-xl" />
                <div className="relative card-premium p-4 lg:p-6">
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-center mb-4 lg:mb-6">
                    Our <span className="text-gold-gradient">Services</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {services.map((service, index) => (
                      <div key={service.title} className="text-center group">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground text-xs lg:text-sm mb-1">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground text-xs">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
