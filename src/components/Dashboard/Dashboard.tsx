
import { motion } from 'framer-motion';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import QuickActions from './QuickActions';
import ServiceHistory from './ServiceHistory';
import FeaturedOffers from './FeaturedOffers';
import ChatBot from '../Chat/ChatBot';
import InteractiveControls from './InteractiveControls';

interface DashboardProps {
  userData: any;
}

const Dashboard = ({ userData }: DashboardProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-purple/10 via-transparent to-luxury-gold/5" />
      
      {/* Header with Menu */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 right-0 z-20 p-6 flex justify-between items-center"
      >
        <motion.div 
          className="text-3xl font-playfair text-gradient-gold"
          animate={{ 
            textShadow: [
              '0 0 20px rgba(212, 175, 55, 0.5)',
              '0 0 40px rgba(212, 175, 55, 0.8)',
              '0 0 20px rgba(212, 175, 55, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Kai
          <span className="text-xs text-white/60 ml-2 font-inter">CONCIERGE</span>
        </motion.div>
        
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-luxury-gold hover:bg-luxury-gold/10 p-2 rounded-lg transition-colors"
        >
          ☰
        </button>
      </motion.header>

      {/* Menu Dropdown */}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 right-6 z-30 glass-strong rounded-2xl p-4 min-w-48"
        >
          <div className="space-y-2 text-right">
            <div className="text-luxury-gold font-inter text-sm cursor-pointer hover:opacity-80">About</div>
            <div className="text-luxury-gold font-inter text-sm cursor-pointer hover:opacity-80">Subscriptions</div>
            <div className="text-luxury-gold font-inter text-sm cursor-pointer hover:opacity-80">Legal</div>
          </div>
        </motion.div>
      )}
      
      <div className="relative z-10 p-6 max-w-7xl mx-auto pt-20">
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
            className="lg:col-span-2"
          >
            <QuickActions />
            <div className="mt-8">
              <ServiceHistory />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FeaturedOffers />
          </motion.div>
        </div>

        {/* Interactive Controls */}
        <InteractiveControls />
      </div>

      <ChatBot 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        userData={userData}
      />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-0 right-0 text-center z-10"
      >
        <div className="text-luxury-gold/60 text-xs font-inter tracking-wider">
          &lt; AI PREMIUM CONCIERGE SERVICES &gt;
        </div>
      </motion.footer>
    </div>
  );
};

export default Dashboard;
