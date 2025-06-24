
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Zap, History, Volume2, FileText, Brain, Sparkles } from 'lucide-react';

const InteractiveControls = () => {
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const features = [
    {
      id: 'predictive',
      icon: Brain,
      title: 'KAI PREDICTIVE',
      subtitle: 'AI Analysis',
      color: 'from-luxury-purple to-blue-600'
    },
    {
      id: 'audio',
      icon: Volume2,
      title: 'VOICE CONTROL',
      subtitle: 'Audio Interface',
      color: 'from-luxury-gold to-yellow-500'
    },
    {
      id: 'history',
      icon: History,
      title: 'NEURAL MEMORY',
      subtitle: 'Past Sessions',
      color: 'from-luxury-rose to-pink-500'
    },
    {
      id: 'legal',
      icon: FileText,
      title: 'LEGAL MATRIX',
      subtitle: 'Terms & Privacy',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-16 space-y-8"
    >
      {/* Primary Action Hub */}
      <div className="text-center space-y-6">
        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={() => setActiveTask('service')}
            className="gradient-gold text-luxury-dark font-inter font-medium px-16 py-6 rounded-3xl text-xl hover:opacity-90 transition-all duration-300 shadow-2xl hover:shadow-luxury-gold/40 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center space-x-3">
              <Sparkles className="w-6 h-6" />
              <span>At your service</span>
            </span>
          </Button>
          
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-luxury-gold/20 to-luxury-purple/20 rounded-3xl blur-xl opacity-50"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Quick Access */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={() => setActiveTask('previous')}
            className="glass-strong border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 font-inter px-10 py-4 rounded-2xl flex items-center space-x-3 transition-all duration-300 group"
          >
            <Zap className="w-5 h-5 group-hover:text-white transition-colors" />
            <span className="group-hover:text-white transition-colors">Access previous task instantly</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Advanced Features Grid */}
      <div className="grid grid-cols-2 gap-6 mt-12">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="glass-strong rounded-2xl p-6 cursor-pointer hover:border-luxury-gold/50 transition-all duration-300 group relative overflow-hidden"
              onClick={() => feature.id === 'history' ? setShowHistory(!showHistory) : setActiveTask(feature.id)}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                layoutId={`feature-bg-${feature.id}`}
              />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="p-2 rounded-lg glass border border-white/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-5 h-5 text-luxury-gold" />
                  </motion.div>
                  <div>
                    <div className="text-luxury-gold font-inter text-sm font-bold tracking-wide">
                      {feature.title}
                    </div>
                    <div className="text-white/60 text-xs">{feature.subtitle}</div>
                  </div>
                </div>
                
                <motion.div
                  className="w-full h-1 bg-white/10 rounded-full overflow-hidden"
                  whileHover={{ scaleY: 1.5 }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${feature.color} rounded-full`}
                    initial={{ width: '0%' }}
                    animate={{ width: '70%' }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Neural Memory Panel */}
      <AnimatePresence>
        {showHistory && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-strong rounded-3xl p-8 mt-8 border border-luxury-gold/20 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-luxury-purple/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div>
                <h3 className="text-luxury-gold font-playfair text-2xl">Neural Memory</h3>
                <p className="text-white/60 text-sm font-inter">Recent AI interactions</p>
              </div>
              <Button
                onClick={() => setShowHistory(false)}
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
              >
                ✕
              </Button>
            </div>
            
            <div className="space-y-4 relative z-10">
              {[
                { task: 'Premium restaurant reservation', time: '2 hours ago', status: 'Completed' },
                { task: 'Private jet booking to Monaco', time: 'Yesterday', status: 'In Progress' },
                { task: 'Exclusive event coordination', time: '3 days ago', status: 'Completed' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass rounded-xl p-4 hover:bg-white/5 transition-colors group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white/90 text-sm font-medium">{item.task}</div>
                      <div className="text-white/50 text-xs mt-1">{item.time}</div>
                    </div>
                    <motion.div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-luxury-gold/20 text-luxury-gold'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.status}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quantum Indicators */}
      <div className="flex justify-center space-x-6 mt-12">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="relative"
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.3, 1, 0.3] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.2 
            }}
          >
            <div className={`w-3 h-3 rounded-full ${
              i === 2 ? 'gradient-gold' : 
              i % 2 === 0 ? 'bg-luxury-purple/60' : 'bg-luxury-rose/60'
            }`} />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/20"
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InteractiveControls;
