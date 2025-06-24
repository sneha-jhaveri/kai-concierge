
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import QuickActions from './QuickActions';
import ServiceHistory from './ServiceHistory';
import FeaturedOffers from './FeaturedOffers';
import ChatBot from '../Chat/ChatBot';
import InteractiveControls from './InteractiveControls';
import FuturisticBackground from './FuturisticBackground';
import { Cpu, Activity, Zap, Bot } from 'lucide-react';

interface DashboardProps {
  userData: any;
}

const Dashboard = ({ userData }: DashboardProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [systemStatus] = useState({
    cpuUsage: 23,
    neuralLoad: 67,
    quantumSync: 98
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-luxury-darker via-black to-luxury-purple/20">
      {/* Enhanced Background System */}
      <FuturisticBackground />
      
      {/* AI System Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 right-0 z-20 p-6"
      >
        <div className="flex justify-between items-center">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="text-3xl font-playfair text-gradient-gold relative flex items-center space-x-4"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.5)',
                  '0 0 40px rgba(212, 175, 55, 0.8)',
                  '0 0 60px rgba(212, 175, 55, 0.6)',
                  '0 0 20px rgba(212, 175, 55, 0.5)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <Cpu className="w-8 h-8 text-luxury-gold" />
                  <motion.div
                    className="absolute inset-0 border-2 border-luxury-purple/50 rounded"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  KAI
                  <motion.span 
                    className="text-xs text-white/60 ml-2 font-inter tracking-widest block"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    NEURAL.INTERFACE.v2.7
                  </motion.span>
                </div>
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-luxury-purple rounded-full"
                animate={{ 
                  scale: [0.8, 1.3, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            {/* AI Status Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ delay: 1 }}
              className="text-xs text-luxury-gold/80 font-inter tracking-wider mt-2 flex items-center space-x-4"
            >
              <span>&lt; STATUS: ACTIVE &gt;</span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            {/* System Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-strong rounded-2xl p-3 flex items-center space-x-3 border border-luxury-gold/20"
            >
              <div className="flex items-center space-x-2 text-xs font-inter">
                <Cpu className="w-4 h-4 text-luxury-gold" />
                <span className="text-white/70">CPU:</span>
                <span className="text-luxury-gold">{systemStatus.cpuUsage}%</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center space-x-2 text-xs font-inter">
                <Activity className="w-4 h-4 text-luxury-purple" />
                <span className="text-white/70">NEURAL:</span>
                <span className="text-luxury-purple">{systemStatus.neuralLoad}%</span>
              </div>
            </motion.div>
            
            <motion.button
              onClick={() => setShowMenu(!showMenu)}
              className="glass-strong text-luxury-gold hover:bg-luxury-gold/10 p-3 rounded-xl transition-all duration-300 relative overflow-hidden group border border-luxury-gold/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10 flex items-center space-x-2">
                <span className="text-xs font-inter tracking-wider">MENU</span>
                <div className="w-4 h-3 flex flex-col justify-between">
                  <div className="w-full h-0.5 bg-luxury-gold" />
                  <div className="w-full h-0.5 bg-luxury-gold" />
                  <div className="w-full h-0.5 bg-luxury-gold" />
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Enhanced AI Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute top-24 right-6 z-30 glass-strong rounded-2xl p-6 min-w-64 border border-luxury-gold/20 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold via-luxury-purple to-luxury-gold"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="space-y-4 text-right relative z-10"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {[
                { label: 'SYSTEM.DIAGNOSTICS', icon: Activity },
                { label: 'NEURAL.SUBSCRIPTIONS', icon: Bot }, 
                { label: 'PROTOCOL.MANAGEMENT', icon: Zap }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  className="text-luxury-gold font-inter text-sm cursor-pointer hover:text-white transition-colors relative group flex items-center justify-end space-x-3"
                >
                  <span className="relative z-10 tracking-wider">{item.label}</span>
                  <item.icon className="w-4 h-4" />
                  <motion.div
                    className="absolute inset-0 bg-luxury-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId={`menu-item-${index}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative z-10 p-6 max-w-7xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <DashboardHeader userData={userData} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <QuickActions />
            <ServiceHistory />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FeaturedOffers />
          </motion.div>
        </div>

        {/* Enhanced Interactive Controls */}
        <InteractiveControls />
      </div>

      <ChatBot 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        userData={userData}
      />

      {/* AI System Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-0 right-0 text-center z-10"
      >
        <motion.div 
          className="text-luxury-gold/60 text-xs font-inter tracking-wider relative"
          animate={{ 
            textShadow: [
              '0 0 10px rgba(212, 175, 55, 0.3)',
              '0 0 20px rgba(212, 175, 55, 0.5)',
              '0 0 10px rgba(212, 175, 55, 0.3)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          &lt; AI NEURAL ARCHITECTURE v2.7.3 • QUANTUM SYNCHRONIZATION: {systemStatus.quantumSync}% &gt;
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Dashboard;
