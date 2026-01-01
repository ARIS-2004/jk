import { useState } from 'react';
import { MapPin, Bed, Bath, Square, ArrowUpRight, Star, Heart, Eye, Crown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  tag?: string;
  rating?: number;
  status?: string;
}

const PropertyCard = ({
  id,
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  tag,
  rating = 5,
  status = 'Available',
}: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="group relative overflow-hidden transition-all duration-700 hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ultra Premium card with multiple glow layers */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/15 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/15 rounded-3xl blur-md opacity-0 group-hover:opacity-80 transition-all duration-500 scale-105" />
        
        <div className="relative card-premium overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-700">
          
          {/* Image Container */}
          <div className="relative h-80 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            
            {/* Ultra Premium overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-accent/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Ultra Premium tag */}
            {tag && (
              <div className="absolute top-6 left-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/30 to-primary rounded-full blur-md opacity-80" />
                  <div className="relative px-5 py-2 rounded-full bg-gradient-to-r from-primary via-accent/20 to-primary text-primary-foreground text-xs font-bold tracking-[0.15em] uppercase shadow-2xl shadow-primary/30 border border-primary/30 flex items-center gap-2">
                    <Crown className="w-3 h-3" />
                    {tag}
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Status badge */}
            <div className="absolute top-6 right-6">
              <div className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-xl border-2 shadow-lg ${
                status === 'Ready to Move' 
                  ? 'bg-emerald/20 text-emerald border-emerald/40 shadow-emerald/20' 
                  : status === 'New Launch'
                  ? 'bg-primary/20 text-primary border-primary/40 shadow-primary/20'
                  : 'bg-accent/20 text-accent border-accent/40 shadow-accent/20'
              }`}>
                {status}
              </div>
            </div>

            {/* Enhanced Action buttons */}
            <div className="absolute top-20 right-6 flex flex-col gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-14 h-14 rounded-full backdrop-blur-2xl border-2 border-white/30 flex items-center justify-center transition-all duration-500 shadow-lg ${
                  isLiked ? 'bg-red-500/30 text-red-400 border-red-400/50 shadow-red-500/20' : 'bg-white/15 text-white hover:bg-white/25 hover:scale-110'
                } ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: '100ms' }}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              
              <Link
                to={`/properties/${id}`}
                className={`w-14 h-14 rounded-full backdrop-blur-2xl border-2 border-white/30 bg-white/15 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary/50 flex items-center justify-center transition-all duration-500 shadow-lg hover:scale-110 hover:shadow-primary/20 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <Eye className="w-5 h-5" />
              </Link>
            </div>

            {/* Ultra Premium price tag */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="relative">
                <div className="absolute inset-0 bg-background/95 backdrop-blur-3xl rounded-2xl border-2 border-primary/30 shadow-2xl shadow-primary/10" />
                <div className="relative p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-serif font-bold text-gold-gradient mb-2 flex items-center gap-2">
                        {price}
                        <Crown className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2 font-medium">({rating}.0)</span>
                      </div>
                    </div>
                    <Link
                      to={`/properties/${id}`}
                      className="group/btn relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/20 to-primary rounded-full blur-md opacity-75 group-hover/btn:opacity-100 transition-opacity" />
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary via-accent/20 to-primary border border-primary/30 flex items-center justify-center text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/20">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ultra Premium Content */}
          <div className="p-8 bg-gradient-to-br from-background via-background to-cream/20">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500 flex items-center gap-2">
              {title}
              <Sparkles className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500" />
            </h3>
            
            <div className="flex items-center gap-3 text-muted-foreground mb-8">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold">{location}</span>
            </div>

            {/* Ultra Premium Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group/feature">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 border-2 border-primary/30 flex items-center justify-center group-hover/feature:scale-110 group-hover/feature:border-primary/50 transition-all duration-300 shadow-lg shadow-primary/10">
                  <Bed className="w-6 h-6 text-primary" />
                </div>
                <div className="text-lg font-bold text-foreground">{beds}</div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Bedrooms</div>
              </div>
              
              <div className="text-center group/feature">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-accent/15 via-accent/10 to-accent/5 border-2 border-accent/30 flex items-center justify-center group-hover/feature:scale-110 group-hover/feature:border-accent/50 transition-all duration-300 shadow-lg shadow-accent/10">
                  <Bath className="w-6 h-6 text-accent" />
                </div>
                <div className="text-lg font-bold text-foreground">{baths}</div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Bathrooms</div>
              </div>
              
              <div className="text-center group/feature">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-emerald/15 via-emerald/10 to-emerald/5 border-2 border-emerald/30 flex items-center justify-center group-hover/feature:scale-110 group-hover/feature:border-emerald/50 transition-all duration-300 shadow-lg shadow-emerald/10">
                  <Square className="w-6 h-6 text-emerald" />
                </div>
                <div className="text-lg font-bold text-foreground">{sqft.split(' ')[0]}</div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Sq. Ft.</div>
              </div>
            </div>
            
            {/* Ultra Premium accent line */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
              <Crown className="w-4 h-4 text-primary" />
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
              <Crown className="w-4 h-4 text-primary" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
