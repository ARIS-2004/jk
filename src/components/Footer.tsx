import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Award, Users, Building, Star } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Properties', href: '/properties' },
    { name: 'Contact', href: '/contact' },
  ];

  const propertyTypes = [
    { name: 'Luxury Apartments', href: '/properties' },
    { name: 'Penthouses', href: '/properties' },
    { name: 'Villas', href: '/properties' },
    { name: 'Commercial Spaces', href: '/properties' },
  ];

  const services = [
    { name: 'Property Development', href: '/services' },
    { name: 'Investment Advisory', href: '/services' },
    { name: 'Property Management', href: '/services' },
    { name: 'Interior Design', href: '/services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-midnight via-midnight-dark to-slate-900 rounded-t-3xl">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      
      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/logo.png"
                alt="JK Infrastructure"
                className="w-20 h-20 object-contain group-hover:scale-110 transition-all duration-500"
              />
              <div>
                <span className="font-serif font-bold text-white text-xl">JK Infrastructure</span>
              </div>
            </Link>
            
            <p className="text-white/80 leading-relaxed mb-6 text-base">
              Building tomorrow's <span className="text-gold-gradient font-semibold">landmarks</span> today. 
              Creating exceptional living experiences with unmatched quality and innovation.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="/"
                  className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  <social.icon className="w-5 h-5 text-white hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-6 text-lg flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-all duration-300 text-sm font-medium hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                    <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                      <span className="text-primary">↗</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-white mb-6 text-lg flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-white/70 hover:text-emerald transition-all duration-300 text-sm font-medium hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-emerald/50 group-hover:bg-emerald transition-colors" />
                    {service.name}
                    <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                      <span className="text-emerald">↗</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8">
          <h4 className="font-serif font-bold text-white mb-4 text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Get In Touch
          </h4>
          <div className="grid md:grid-cols-4 gap-4">
            <a href="tel:+919831683494" className="flex items-center gap-3 text-white/70 hover:text-primary transition-all duration-300 p-3 rounded-xl hover:bg-white/5 group">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wide">Primary</div>
                <span className="font-medium">+91 98316 83494</span>
              </div>
            </a>
            <a href="tel:+916290834323" className="flex items-center gap-3 text-white/70 hover:text-primary transition-all duration-300 p-3 rounded-xl hover:bg-white/5 group">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wide">Secondary</div>
                <span className="font-medium">+91 62908 34323</span>
              </div>
            </a>
            <a href="mailto:jkl.kolkata4@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-accent transition-all duration-300 p-3 rounded-xl hover:bg-white/5 group">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wide">Email Us</div>
                <span className="font-medium">jkl.kolkata4@gmail.com</span>
              </div>
            </a>
            <div className="flex items-center gap-3 text-white/70 p-3 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-emerald" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wide">Visit Us</div>
                <span className="font-medium text-xs">Premises No. 595 & 570, Plot No. AA IIB-1274, Kolkata - 700156</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} <span className="text-gold-gradient font-semibold">JK Infrastructure</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-primary transition-colors hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors hover:underline">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
