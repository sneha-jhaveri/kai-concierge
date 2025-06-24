
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene3D from '@/components/3D/Scene3D';
import GoogleAuth from '@/components/Auth/GoogleAuth';
import OnboardingWizard from '@/components/Onboarding/OnboardingWizard';
import Dashboard from '@/components/Dashboard/Dashboard';

type AppState = 'welcome' | 'auth' | 'onboarding' | 'dashboard';

const Index = () => {
  console.log('Index component rendering');
  const [appState, setAppState] = useState<AppState>('welcome');
  const [userData, setUserData] = useState(null);

  const handleLogin = () => {
    console.log('Login initiated');
    // Simulate Google login
    setAppState('onboarding');
  };

  const handleOnboardingComplete = (data: any) => {
    console.log('Onboarding completed with data:', data);
    setUserData(data);
    setAppState('dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Scene3D />
      
      <AnimatePresence mode="wait">
        {appState === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-playfair text-gradient-gold mb-6"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(212, 175, 55, 0.5)',
                    '0 0 40px rgba(212, 175, 55, 0.8)',
                    '0 0 20px rgba(212, 175, 55, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                KAI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-white/80 font-inter mb-4"
              >
                Your Premium AI Concierge
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-white/60 font-inter max-w-2xl mx-auto"
              >
                Experience luxury services with artificial intelligence. 
                From reservations to experiences, KAI curates your perfect lifestyle.
              </motion.p>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring', stiffness: 300 }}
              onClick={() => setAppState('auth')}
              className="glass-strong border-2 border-luxury-gold/50 hover:border-luxury-gold transition-all duration-500 px-12 py-4 rounded-2xl font-inter font-medium text-xl text-white hover:bg-luxury-gold/10 group"
            >
              <span className="group-hover:text-gradient-gold transition-all duration-300">
                Begin Experience
              </span>
            </motion.button>
          </motion.div>
        )}

        {appState === 'auth' && (
          <motion.div
            key="auth"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="min-h-screen flex items-center justify-center p-4 relative z-10"
          >
            <GoogleAuth onLogin={handleLogin} />
          </motion.div>
        )}

        {appState === 'onboarding' && (
          <motion.div
            key="onboarding"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="relative z-10"
          >
            <OnboardingWizard onComplete={handleOnboardingComplete} />
          </motion.div>
        )}

        {appState === 'dashboard' && userData && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10"
          >
            <Dashboard userData={userData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
