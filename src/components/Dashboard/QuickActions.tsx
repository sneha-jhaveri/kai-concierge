
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const QuickActions = () => {
  const actions = [
    {
      title: 'Restaurant Reservations',
      description: 'Book exclusive dining experiences',
      icon: '🍽️',
      gradient: 'gradient-gold',
    },
    {
      title: 'Luxury Transportation',
      description: 'Private cars and premium rides',
      icon: '🚗',
      gradient: 'gradient-purple',
    },
    {
      title: 'Event Planning',
      description: 'Curated experiences and events',
      icon: '🎭',
      gradient: 'gradient-rose',
    },
    {
      title: 'Personal Shopping',
      description: 'Exclusive access to luxury brands',
      icon: '🛍️',
      gradient: 'gradient-gold',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-playfair text-white mb-6">Quick Requests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass border-white/10 p-6 cursor-pointer hover:border-luxury-gold/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${action.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-white text-lg mb-1">
                    {action.title}
                  </h3>
                  <p className="text-white/60 font-inter text-sm">
                    {action.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
