
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const InteractiveControls = () => {
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const tasks = [
    "At your service",
    "Access previous task with one click",
    "KAI Predictive Assistant",
    "Audio Toggle",
    "Conversation History",
    "Legal/T&C"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-12 space-y-6"
    >
      {/* Main Action Button */}
      <motion.div
        className="flex justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          onClick={() => setActiveTask('service')}
          className="gradient-gold text-luxury-dark font-inter font-medium px-12 py-4 rounded-2xl text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-luxury-gold/30"
        >
          At your service
        </Button>
      </motion.div>

      {/* Quick Access Task */}
      <motion.div
        className="flex justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          onClick={() => setActiveTask('previous')}
          className="glass-strong border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 font-inter px-8 py-3 rounded-2xl flex items-center space-x-2 transition-all duration-300"
        >
          <span>Access previous task with one click</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Interactive Features Grid */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass rounded-2xl p-4 cursor-pointer hover:border-luxury-gold/50 transition-all duration-300"
          onClick={() => setActiveTask('predictive')}
        >
          <div className="text-luxury-gold font-inter text-sm font-medium">KAI PREDICTIVE ASSISTANT</div>
          <div className="text-white/60 text-xs mt-1">Smart suggestions</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass rounded-2xl p-4 cursor-pointer hover:border-luxury-gold/50 transition-all duration-300"
          onClick={() => setActiveTask('audio')}
        >
          <div className="text-luxury-gold font-inter text-sm font-medium">AUDIO TOGGLE</div>
          <div className="text-white/60 text-xs mt-1">Voice control</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass rounded-2xl p-4 cursor-pointer hover:border-luxury-gold/50 transition-all duration-300"
          onClick={() => setShowHistory(!showHistory)}
        >
          <div className="text-luxury-gold font-inter text-sm font-medium">CONVERSATION HISTORY</div>
          <div className="text-white/60 text-xs mt-1">Past interactions</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass rounded-2xl p-4 cursor-pointer hover:border-luxury-gold/50 transition-all duration-300"
          onClick={() => setActiveTask('legal')}
        >
          <div className="text-luxury-gold font-inter text-sm font-medium">LEGAL/T&C</div>
          <div className="text-white/60 text-xs mt-1">Terms & conditions</div>
        </motion.div>
      </div>

      {/* Conversation History Panel */}
      {showHistory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="glass-strong rounded-2xl p-6 mt-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-luxury-gold font-playfair text-lg">Recent Conversations</h3>
            <Button
              onClick={() => setShowHistory(false)}
              variant="ghost"
              size="sm"
              className="text-white/60 hover:text-white"
            >
              ✕
            </Button>
          </div>
          <div className="space-y-3">
            <div className="glass rounded-lg p-3">
              <div className="text-white/80 text-sm">Restaurant reservation for tonight</div>
              <div className="text-white/50 text-xs mt-1">2 hours ago</div>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="text-white/80 text-sm">Flight booking to Paris</div>
              <div className="text-white/50 text-xs mt-1">Yesterday</div>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="text-white/80 text-sm">Event planning assistance</div>
              <div className="text-white/50 text-xs mt-1">3 days ago</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating Action Indicators */}
      <div className="flex justify-center space-x-4 mt-8">
        <motion.div 
          className="w-3 h-3 gradient-gold rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="w-2 h-2 bg-luxury-purple/60 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default InteractiveControls;
