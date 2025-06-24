
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import QuickActions from './QuickActions';
import ServiceHistory from './ServiceHistory';
import FeaturedOffers from './FeaturedOffers';
import ChatBot from '../Chat/ChatBot';
import InteractiveControls from './InteractiveControls';
import FuturisticBackground from './FuturisticBackground';

interface DashboardProps {
  userData: any;
}

const Dashboard = ({ userData }: DashboardProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Advanced Background System */}
      <FuturisticBackground />
      
      {/* Futuristic Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 right-0 z-20 p-6"
      >
        <div className="flex justify-between items-center">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="text-3xl font-playfair text-gradient-gold relative"
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
              KAI
              <motion.span 
                className="text-xs text-white/60 ml-2 font-inter tracking-widest"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                CONCIERGE
              </motion.span>
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-luxury-purple rounded-full"
                animate={{ 
                  scale: [0.8, 1.3, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
          
          <motion.button
            onClick={() => setShowMenu(!showMenu)}
            className="glass-strong text-luxury-gold hover:bg-luxury-gold/10 p-3 rounded-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"
              layoutId="menu-bg"
            />
            <div className="relative z-10">☰</div>
          </motion.button>
        </div>
      </motion.header>

      {/* Enhanced Menu Dropdown */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute top-20 right-6 z-30 glass-strong rounded-2xl p-6 min-w-56 border border-luxury-gold/20"
          >
            <motion.div 
              className="space-y-4 text-right"
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
              {['About', 'Subscriptions', 'Legal'].map((item, index) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  className="text-luxury-gold font-inter text-sm cursor-pointer hover:text-white transition-colors relative group"
                >
                  <span className="relative z-10">{item}</span>
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
      
      <div className="relative z-10 p-6 max-w-7xl mx-auto pt-24">
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

      {/* Futuristic Footer */}
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
          &lt; AI PREMIUM CONCIERGE SERVICES &gt;
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Dashboard;
