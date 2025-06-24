
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedOffers = () => {
  const offers = [
    {
      title: 'Exclusive Wine Tasting',
      venue: 'Private Vineyard Experience',
      description: 'Limited availability for premium members',
      image: '🍷',
      price: 'Invitation Only',
    },
    {
      title: 'Art Auction Preview',
      venue: 'Sotheby\'s Private Viewing',
      description: 'Contemporary masters collection',
      image: '🎨',
      price: 'Complimentary',
    },
    {
      title: 'Yacht Charter',
      venue: 'Mediterranean Weekend',
      description: 'All-inclusive luxury experience',
      image: '🛥️',
      price: 'Contact for Details',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-playfair text-white mb-6">Featured Experiences</h2>
      <div className="space-y-6">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass border-white/10 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-luxury-purple/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{offer.image}</div>
                <h3 className="font-playfair text-white text-lg mb-2">
                  {offer.title}
                </h3>
                <p className="text-luxury-gold font-inter text-sm mb-2">
                  {offer.venue}
                </p>
                <p className="text-white/60 font-inter text-sm mb-4">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 font-inter font-medium">
                    {offer.price}
                  </span>
                  <Button
                    size="sm"
                    className="glass-strong border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOffers;
