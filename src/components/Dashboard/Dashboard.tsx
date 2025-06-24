
import { motion } from 'framer-motion';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import QuickActions from './QuickActions';
import ServiceHistory from './ServiceHistory';
import FeaturedOffers from './FeaturedOffers';
import ChatBot from '../Chat/ChatBot';

interface DashboardProps {
  userData: any;
}

const Dashboard = ({ userData }: DashboardProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-purple/10 via-transparent to-luxury-gold/5" />
      
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
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
      </div>

      <ChatBot 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        userData={userData}
      />
    </div>
  );
};

export default Dashboard;
