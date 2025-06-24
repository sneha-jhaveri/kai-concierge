
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene3D from '@/components/3D/Scene3D';
import GoogleAuth from '@/components/Auth/GoogleAuth';
import OnboardingWizard from '@/components/Onboarding/OnboardingWizard';
import Dashboard from '@/components/Dashboard/Dashboard';
import WelcomeScreen from '@/components/Welcome/WelcomeScreen';

type AppState = 'welcome' | 'auth' | 'onboarding' | 'dashboard';

const Index = () => {
  console.log('Index component rendering');
  const [appState, setAppState] = useState<AppState>('welcome');
  const [userData, setUserData] = useState(null);

  const handleLogin = () => {
    console.log('Login initiated');
    setAppState('onboarding');
  };

  const handleOnboardingComplete = (data: any) => {
    console.log('Onboarding completed with data:', data);
    setUserData(data);
    setAppState('dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-luxury-dark via-luxury-darker to-black">
      <Scene3D />
      
      <AnimatePresence mode="wait">
        {appState === 'welcome' && (
          <WelcomeScreen onNext={() => setAppState('auth')} />
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
