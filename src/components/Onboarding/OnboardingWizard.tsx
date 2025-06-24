
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface OnboardingWizardProps {
  onComplete: (userData: any) => void;
}

const OnboardingWizard = ({ onComplete }: OnboardingWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    interests: '',
    services: '',
  });

  const steps = [
    {
      title: "What should I call you?",
      subtitle: "Your personal concierge experience begins here",
      field: 'name',
      placeholder: 'Enter your preferred name',
      type: 'text'
    },
    {
      title: "What are your interests?",
      subtitle: "Help me curate experiences just for you",
      field: 'interests',
      placeholder: 'e.g., Fine dining, Art, Travel, Technology',
      type: 'text'
    },
    {
      title: "Preferred services?",
      subtitle: "What can I assist you with most often?",
      field: 'services',
      placeholder: 'e.g., Reservations, Travel, Shopping, Events',
      type: 'text'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(userData);
    }
  };

  const handleInputChange = (value: string) => {
    setUserData(prev => ({
      ...prev,
      [steps[currentStep].field]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-strong rounded-3xl p-8 max-w-lg w-full"
      >
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index <= currentStep ? 'bg-luxury-gold' : 'bg-white/20'
                }`}
                animate={{
                  scale: index === currentStep ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-playfair text-gradient-gold mb-3">
              {steps[currentStep].title}
            </h2>
            <p className="text-white/70 font-inter">
              {steps[currentStep].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          key={`input-${currentStep}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Label htmlFor="input" className="text-white/80 font-inter mb-2 block">
            {steps[currentStep].field === 'name' ? 'Name' : 
             steps[currentStep].field === 'interests' ? 'Interests' : 'Services'}
          </Label>
          <Input
            id="input"
            type={steps[currentStep].type}
            placeholder={steps[currentStep].placeholder}
            value={userData[steps[currentStep].field as keyof typeof userData]}
            onChange={(e) => handleInputChange(e.target.value)}
            className="h-14 glass border-white/20 text-white placeholder:text-white/50 font-inter text-lg rounded-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            onClick={handleNext}
            disabled={!userData[steps[currentStep].field as keyof typeof userData]}
            className="w-full h-14 gradient-gold text-luxury-dark hover:opacity-90 transition-all duration-300 font-inter font-medium text-lg rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {currentStep < steps.length - 1 ? 'Continue' : 'Enter KAI'}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OnboardingWizard;
