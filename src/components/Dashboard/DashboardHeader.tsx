
import { motion } from 'framer-motion';

interface DashboardHeaderProps {
  userData: any;
}

const DashboardHeader = ({ userData }: DashboardHeaderProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="glass rounded-3xl p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-luxury-purple/10 rounded-full blur-2xl animate-pulse" />
      
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair text-white mb-2"
        >
          {getGreeting()}, <span className="text-gradient-gold">{userData.name}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 font-inter text-lg"
        >
          Your AI concierge is ready to assist with any request
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {userData.interests.split(',').slice(0, 3).map((interest: string, index: number) => (
            <span
              key={index}
              className="glass-strong px-4 py-2 rounded-full text-sm font-inter text-white/80 border border-luxury-gold/30"
            >
              {interest.trim()}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardHeader;
