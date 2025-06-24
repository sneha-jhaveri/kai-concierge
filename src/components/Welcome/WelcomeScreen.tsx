
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, ArrowRight, ArrowLeft } from 'lucide-react';

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentView, setCurrentView] = useState<'intro' | 'services'>('intro');

  const services = [
    "Bespoke services in luxury lifestyle management",
    "Lifestyle services, exclusive event planning and travel curation", 
    "Tailored to your preferences and available 24/7",
    "Prioritized efficiency, discretion, and precision"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
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
          kai
          <span className="text-xs text-white/60 ml-2 font-inter">CONCIERGE</span>
        </motion.div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowMenu(!showMenu)}
          className="text-luxury-gold hover:bg-luxury-gold/10"
        >
          <Menu className="h-6 w-6" />
        </Button>
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
            <div className="text-luxury-gold font-inter">About</div>
            <div className="text-luxury-gold font-inter">Subscriptions</div>
            <div className="text-luxury-gold font-inter">Legal</div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative z-10">
        {currentView === 'intro' ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-md mx-auto space-y-8"
          >
            {/* Chat Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="glass-strong rounded-3xl p-6 border border-luxury-gold/30 relative"
            >
              <div className="text-luxury-gold font-inter text-sm mb-2">Tell me about Kai Concierge</div>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white/10 rotate-45 border-b border-r border-luxury-gold/30"></div>
            </motion.div>

            {/* Response Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-3xl p-6 text-left"
            >
              <div className="text-luxury-gold font-inter text-sm mb-3">Welcome to Kai Concierge!</div>
              <div className="text-white/80 font-inter text-sm leading-relaxed">
                I'm your AI-powered CONCIERGE assistant, designed to streamline luxury lifestyle management.
              </div>
            </motion.div>

            {/* Interactive Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center space-x-4"
            >
              <motion.div 
                className="w-8 h-6 gradient-gold rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div 
                className="w-6 h-6 bg-luxury-purple/60 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-white/60 font-inter text-sm"
            >
              How may I assist you today?
            </motion.p>

            {/* Next Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="pt-8"
            >
              <Button
                onClick={() => setCurrentView('services')}
                className="gradient-gold text-luxury-dark font-inter font-medium px-8 py-3 rounded-2xl hover:opacity-90 transition-opacity flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-md mx-auto space-y-8"
          >
            {/* Services Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-8 text-left space-y-4"
            >
              <h2 className="text-luxury-gold font-playfair text-2xl mb-6">I specialize in:</h2>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-white/80 font-inter text-sm leading-relaxed"
                >
                  • {service}
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-between items-center pt-4"
            >
              <Button
                onClick={() => setCurrentView('intro')}
                variant="ghost"
                className="text-luxury-gold hover:bg-luxury-gold/10 flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>

              <Button
                onClick={onNext}
                className="gradient-gold text-luxury-dark font-inter font-medium px-8 py-3 rounded-2xl hover:opacity-90 transition-opacity flex items-center space-x-2"
              >
                <span>At your service</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-0 right-0 text-center"
      >
        <div className="text-luxury-gold/60 text-xs font-inter tracking-wider">
          &lt; AI PREMIUM CONCIERGE SERVICES &gt;
        </div>
      </motion.footer>
    </div>
  );
};

export default WelcomeScreen;
