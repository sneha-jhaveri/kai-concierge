
import { motion } from 'framer-motion';
import { Brain, Zap, Activity } from 'lucide-react';

interface DashboardHeaderProps {
  userData: any;
}

const DashboardHeader = ({ userData }: DashboardHeaderProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'NEURAL MORNING PROTOCOL INITIATED';
    if (hour < 18) return 'AFTERNOON OPTIMIZATION ACTIVE';
    return 'EVENING LUXURY SUBROUTINES ENGAGED';
  };

  return (
    <div className="glass-strong rounded-3xl p-8 relative overflow-hidden border border-luxury-gold/20">
      {/* AI Processing Indicators */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold via-luxury-purple to-luxury-gold"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-4 right-4 w-20 h-20 bg-luxury-gold/5 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-4 left-4 w-16 h-16 bg-luxury-purple/5 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      
      <div className="relative z-10">
        {/* AI Status Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-3 mb-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Brain className="w-6 h-6 text-luxury-gold" />
          </motion.div>
          <div className="text-luxury-gold/80 font-inter text-sm tracking-widest">
            {getGreeting()}
          </div>
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair text-white mb-2"
        >
          WELCOME BACK, <span className="text-gradient-gold">{userData.name.toUpperCase()}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 font-inter text-lg mb-6"
        >
          YOUR AI CONCIERGE HAS ANALYZED 247 DATA POINTS AND IS READY FOR OPTIMAL SERVICE DELIVERY
        </motion.p>

        {/* AI Analysis Metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-6"
        >
          {[
            { icon: Activity, label: 'PREFERENCE MAPPING', value: '99.2%', color: 'text-luxury-gold' },
            { icon: Zap, label: 'NEURAL EFFICIENCY', value: '87.4%', color: 'text-luxury-purple' },
            { icon: Brain, label: 'PREDICTIVE ACCURACY', value: '94.7%', color: 'text-luxury-rose' }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="glass rounded-2xl px-4 py-3 border border-white/10 flex items-center space-x-3 hover:border-luxury-gold/30 transition-colors group"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </motion.div>
              <div>
                <div className="text-xs font-inter text-white/60 tracking-wider">{metric.label}</div>
                <div className={`text-sm font-inter font-bold ${metric.color}`}>{metric.value}</div>
              </div>
              <motion.div
                className="w-12 h-1 bg-white/10 rounded-full overflow-hidden"
                whileHover={{ scaleY: 1.5 }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${
                    metric.color.includes('gold') ? 'from-luxury-gold to-yellow-400' :
                    metric.color.includes('purple') ? 'from-luxury-purple to-purple-400' :
                    'from-luxury-rose to-pink-400'
                  } rounded-full`}
                  initial={{ width: '0%' }}
                  animate={{ width: metric.value }}
                  transition={{ delay: 1 + index * 0.2, duration: 1.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* User Interest Tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          <div className="text-luxury-gold/80 font-inter text-xs tracking-wider mb-2 w-full">
            &gt; NEURAL PREFERENCE ANALYSIS:
          </div>
          {userData.interests.split(',').slice(0, 3).map((interest: string, index: number) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-strong px-4 py-2 rounded-full text-sm font-inter text-white/90 border border-luxury-gold/30 relative overflow-hidden group cursor-default"
            >
              <motion.div
                className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="relative z-10 tracking-wide">{interest.trim().toUpperCase()}</span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardHeader;
