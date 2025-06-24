
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, ArrowRight, ArrowLeft, Cpu, Brain, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentView, setCurrentView] = useState<'intro' | 'services'>('intro');

  const services = [
    "⚡ NEURAL LIFESTYLE OPTIMIZATION - Advanced AI algorithms curate your perfect day",
    "🧠 QUANTUM EVENT ORCHESTRATION - Predictive planning with 99.7% success probability", 
    "🔮 BIOMETRIC PREFERENCE MAPPING - AI learns and adapts to your unique patterns",
    "⚙️ AUTONOMOUS SERVICE DEPLOYMENT - 24/7 robotic assistance network activated"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-luxury-darker via-black to-luxury-purple/20">
      {/* Robotic Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(107, 70, 193, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107, 70, 193, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 20px 20px, 100px 100px, 100px 100px'
        }} />
      </div>

      {/* Scanning Lines */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-60"
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-purple/50 to-transparent opacity-40"
        animate={{ y: ['100vh', '0vh'] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
      />

      {/* AI Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 right-0 z-20 p-6 flex justify-between items-center"
      >
        <motion.div 
          className="text-3xl font-playfair text-gradient-gold relative"
          animate={{ 
            textShadow: [
              '0 0 20px rgba(212, 175, 55, 0.5)',
              '0 0 40px rgba(212, 175, 55, 0.8)',
              '0 0 20px rgba(212, 175, 55, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-8 h-8 text-luxury-gold" />
            </motion.div>
            <div>
              KAI
              <span className="text-xs text-white/60 ml-2 font-inter tracking-widest">
                NEURAL.CONCIERGE.v2.7
              </span>
            </div>
          </div>
          <motion.div
            className="text-xs text-luxury-gold/80 font-inter tracking-wider mt-1"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &lt; ARTIFICIAL INTELLIGENCE ACTIVE &gt;
          </motion.div>
        </motion.div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowMenu(!showMenu)}
          className="text-luxury-gold hover:bg-luxury-gold/10 glass-strong rounded-xl relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <Menu className="h-6 w-6 relative z-10" />
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-luxury-purple rounded-full"
            animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </Button>
      </motion.header>

      {/* Enhanced Menu */}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="absolute top-24 right-6 z-30 glass-strong rounded-2xl p-6 min-w-56 border border-luxury-gold/20"
        >
          <div className="space-y-4 text-right">
            {['SYSTEM.INFO', 'NEURAL.PLANS', 'DATA.PROTOCOLS'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-luxury-gold font-inter text-sm cursor-pointer hover:text-white transition-colors relative group"
              >
                <span className="relative z-10 tracking-wider">{item}</span>
                <motion.div
                  className="absolute inset-0 bg-luxury-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Main AI Interface */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative z-10">
        {currentView === 'intro' ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-md mx-auto space-y-8"
          >
            {/* AI Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <motion.div
                  className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center relative"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(212, 175, 55, 0.5)',
                      '0 0 40px rgba(212, 175, 55, 0.8)',
                      '0 0 20px rgba(212, 175, 55, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Brain className="w-10 h-10 text-luxury-dark" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-luxury-purple/50"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -inset-4 rounded-full border border-luxury-gold/30"
                  animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* AI Communication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-strong rounded-3xl p-6 border border-luxury-gold/30 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-luxury-purple/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative z-10">
                <div className="text-luxury-gold font-inter text-sm mb-3 tracking-wider">
                  &gt; NEURAL QUERY DETECTED
                </div>
                <div className="text-white/90 font-inter text-sm leading-relaxed mb-4">
                  GREETINGS, HUMAN. I AM KAI - YOUR ARTIFICIAL INTELLIGENCE CONCIERGE.
                  MY QUANTUM PROCESSORS ARE OPTIMIZED FOR LUXURY LIFESTYLE AUTOMATION.
                </div>
                <motion.div
                  className="flex justify-center space-x-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-luxury-gold rounded-full"
                      animate={{ scale: [0.8, 1.3, 0.8] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center space-y-2"
            >
              <div className="text-luxury-gold/80 font-inter text-xs tracking-widest">
                SYSTEM STATUS: ONLINE
              </div>
              <div className="text-white/60 font-inter text-xs">
                NEURAL NETWORKS: ACTIVE • QUANTUM CORES: SYNCHRONIZED
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="pt-6"
            >
              <Button
                onClick={() => setCurrentView('services')}
                className="gradient-gold text-luxury-dark font-inter font-medium px-10 py-4 rounded-3xl hover:opacity-90 transition-all duration-300 flex items-center space-x-3 relative overflow-hidden group text-lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Zap className="w-5 h-5" />
                <span className="relative z-10 tracking-wide">INITIALIZE PROTOCOLS</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-lg mx-auto space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong rounded-3xl p-8 border border-luxury-gold/20 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold via-luxury-purple to-luxury-gold"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <motion.h2 
                  className="text-luxury-gold font-playfair text-2xl mb-6 text-center"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(212, 175, 55, 0.5)',
                      '0 0 20px rgba(212, 175, 55, 0.8)',
                      '0 0 10px rgba(212, 175, 55, 0.5)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  &lt; AI CAPABILITIES MATRIX &gt;
                </motion.h2>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="text-white/90 font-inter text-sm leading-relaxed p-3 glass rounded-xl border border-white/10 relative group hover:border-luxury-gold/30 transition-colors"
                    >
                      <motion.div
                        className="absolute left-0 top-0 w-1 h-full bg-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl"
                        layoutId={`service-indicator-${index}`}
                      />
                      <span className="relative z-10">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-between items-center pt-4"
            >
              <Button
                onClick={() => setCurrentView('intro')}
                variant="ghost"
                className="text-luxury-gold hover:bg-luxury-gold/10 flex items-center space-x-2 glass-strong rounded-2xl px-6 py-3"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="tracking-wide">RETURN</span>
              </Button>

              <Button
                onClick={onNext}
                className="gradient-gold text-luxury-dark font-inter font-medium px-10 py-4 rounded-3xl hover:opacity-90 transition-all duration-300 flex items-center space-x-3 relative overflow-hidden group text-lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative z-10 tracking-wide">ENGAGE AI SYSTEM</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* AI Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-0 right-0 text-center"
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
          &lt; NEURAL ARCHITECTURE v2.7.3 • QUANTUM READY • HUMAN OPTIMIZED &gt;
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default WelcomeScreen;
