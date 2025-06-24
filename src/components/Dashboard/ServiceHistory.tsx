
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const ServiceHistory = () => {
  const history = [
    {
      service: 'Michelin Star Reservation',
      venue: 'Le Bernardin, NYC',
      date: '2024-01-15',
      status: 'Completed',
      type: 'dining'
    },
    {
      service: 'Private Jet Charter',
      venue: 'NYC to Paris',
      date: '2024-01-10',
      status: 'Completed',
      type: 'travel'
    },
    {
      service: 'Gallery Opening',
      venue: 'Modern Art Museum',
      date: '2024-01-08',
      status: 'Completed',
      type: 'event'
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'dining': return '🍽️';
      case 'travel': return '✈️';
      case 'event': return '🎭';
      default: return '⭐';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-playfair text-white mb-6">Recent Services</h2>
      <div className="space-y-4">
        {history.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-luxury-gold/20 rounded-xl flex items-center justify-center text-lg">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="font-playfair text-white">
                      {item.service}
                    </h3>
                    <p className="text-white/60 font-inter text-sm">
                      {item.venue}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-luxury-gold text-sm font-inter mb-1">
                    {item.status}
                  </div>
                  <div className="text-white/50 text-xs font-inter">
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHistory;
