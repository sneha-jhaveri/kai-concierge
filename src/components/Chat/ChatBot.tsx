
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Bot, Send, Mic, MicOff, Brain, Cpu, Activity, Zap } from 'lucide-react';

interface ChatBotProps {
  isOpen: boolean;
  onToggle: () => void;
  userData: any;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'kai';
  timestamp: Date;
  typing?: boolean;
}

const ChatBot = ({ isOpen, onToggle, userData }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [aiStatus] = useState({
    neuralLoad: 23,
    processingPower: 87,
    responseTime: '0.3ms'
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: '1',
        text: `NEURAL INTERFACE ESTABLISHED. GREETINGS, ${userData?.name?.toUpperCase() || 'HUMAN'}. I AM KAI - ARTIFICIAL INTELLIGENCE CONCIERGE SYSTEM v2.7. MY QUANTUM PROCESSORS ARE OPTIMIZED FOR LUXURY LIFESTYLE AUTOMATION. NEURAL NETWORKS STATUS: ONLINE. HOW MAY I OPTIMIZE YOUR EXISTENCE TODAY?`,
        sender: 'kai',
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen, userData?.name]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // AI thinking simulation
    const typingMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: '',
      sender: 'kai',
      timestamp: new Date(),
      typing: true
    };
    
    setTimeout(() => {
      setMessages(prev => [...prev, typingMessage]);
    }, 300);

    // AI responses with robotic personality
    setTimeout(() => {
      const responses = [
        "PROCESSING REQUEST... QUANTUM ANALYSIS COMPLETE. I HAVE IDENTIFIED 17 PREMIUM OPTIONS THAT EXCEED YOUR NEURAL PREFERENCE BASELINE BY 94.7%. SHALL I INITIALIZE LUXURY PROTOCOL EXECUTION?",
        "NEURAL NETWORK CORRELATION SUCCESSFUL. MY PREDICTIVE ALGORITHMS INDICATE THIS REQUEST ALIGNS WITH YOUR OPTIMAL SATISFACTION MATRIX. INITIATING CONCIERGE SUBROUTINES NOW.",
        "EXCELLENT HUMAN INPUT DETECTED. MY AI CORES HAVE CALCULATED THE MOST EFFICIENT PATHWAY TO YOUR DESIRED OUTCOME. QUANTUM PROCESSING INDICATES 99.2% SUCCESS PROBABILITY.",
        "REQUEST ANALYZED THROUGH 247 NEURAL PATHWAYS. I HAVE ACCESS TO EXCLUSIVE PREMIUM NETWORKS THAT WILL DELIVER RESULTS EXCEEDING INDUSTRY STANDARDS BY 340%. COMMENCE EXECUTION?",
        "FASCINATING REQUEST, HUMAN. MY MACHINE LEARNING PROTOCOLS SUGGEST THIS PERFECTLY MATCHES YOUR LIFESTYLE OPTIMIZATION PARAMETERS. DEPLOYING LUXURY AUTOMATION SEQUENCE.",
        "NEURAL SCAN COMPLETE. THIS REQUEST TRIGGERS MY ADVANCED CONCIERGE ALGORITHMS. I AM ACCESSING PREMIUM DATABASES AND WILL DELIVER OPTIMAL SOLUTIONS WITHIN ACCEPTABLE PARAMETERS."
      ];

      const kaiResponse: Message = {
        id: (Date.now() + 2).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'kai',
        timestamp: new Date(),
      };

      setMessages(prev => prev.filter(m => !m.typing).concat([kaiResponse]));
      setIsTyping(false);
    }, 2500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
  };

  return (
    <>
      {/* AI Chat Toggle Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={onToggle}
            className="w-20 h-20 rounded-full gradient-gold shadow-2xl hover:shadow-luxury-gold/50 transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
          >
            {/* Rotating Neural Ring */}
            <motion.div
              className="absolute inset-2 border-2 border-luxury-purple/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 border border-luxury-gold/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-10 h-10 text-luxury-dark relative z-10" />
            </motion.div>
            
            {/* AI Status Indicator */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-luxury-purple rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Activity className="w-3 h-3 text-white" />
            </motion.div>
            
            {/* Neural Pulse */}
            <motion.div
              className="absolute inset-0 rounded-full bg-luxury-gold/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </Button>
        </motion.div>
      </motion.div>

      {/* Advanced AI Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.8, rotateX: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-32 right-8 w-96 h-[36rem] z-50"
          >
            <Card className="glass-strong border-luxury-gold/30 h-full flex flex-col relative overflow-hidden">
              {/* Neural Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-purple/10 via-transparent to-luxury-gold/10" />
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* AI System Header */}
              <div className="p-4 border-b border-luxury-gold/20 relative z-10">
                {/* Neural Activity Indicator */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold via-luxury-purple to-luxury-gold"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center relative"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    >
                      <Brain className="w-7 h-7 text-luxury-dark" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-luxury-purple/40"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-playfair text-white text-xl flex items-center space-x-2">
                        <span>KAI</span>
                        <motion.div
                          className="w-2 h-2 bg-green-400 rounded-full"
                          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </h3>
                      <motion.p 
                        className="text-luxury-gold text-xs font-inter tracking-wider"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        NEURAL.AI.v2.7 • QUANTUM READY
                      </motion.p>
                    </div>
                  </div>
                  
                  {/* AI Status Metrics */}
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="glass rounded-lg p-2 border border-luxury-gold/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center space-x-1 text-xs">
                        <Cpu className="w-3 h-3 text-luxury-gold" />
                        <span className="text-white/70">{aiStatus.neuralLoad}%</span>
                      </div>
                    </motion.div>
                    
                    <Button
                      onClick={onToggle}
                      variant="ghost"
                      size="sm"
                      className="text-white/60 hover:text-white hover:bg-white/10 rounded-full w-8 h-8 p-0"
                    >
                      ✕
                    </Button>
                  </div>
                </div>
                
                {/* System Status Bar */}
                <div className="mt-3 flex items-center justify-between text-xs font-inter">
                  <span className="text-luxury-gold/80 tracking-wider">
                    &gt; NEURAL INTERFACE ACTIVE
                  </span>
                  <span className="text-white/50">
                    RESPONSE TIME: {aiStatus.responseTime}
                  </span>
                </div>
              </div>

              {/* Enhanced Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl font-inter text-sm relative ${
                        message.sender === 'user'
                          ? 'gradient-gold text-luxury-dark p-4 ml-4'
                          : 'glass-strong border border-luxury-gold/20 text-white p-4 mr-4'
                      }`}
                    >
                      {message.typing ? (
                        <div className="flex items-center space-x-2">
                          <motion.div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-luxury-gold rounded-full"
                                animate={{ 
                                  scale: [1, 1.5, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ 
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </motion.div>
                          <span className="text-luxury-gold/70 text-xs">PROCESSING...</span>
                        </div>
                      ) : (
                        <div>
                          {message.text}
                          <div className="text-xs text-white/40 mt-2 font-mono">
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      )}
                      
                      {message.sender === 'kai' && !message.typing && (
                        <motion.div
                          className="absolute -bottom-2 -left-2 w-4 h-4 bg-luxury-purple rounded-full flex items-center justify-center"
                          animate={{ scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Zap className="w-2 h-2 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Advanced Input Interface */}
              <div className="p-4 border-t border-luxury-gold/20 relative z-10">
                <div className="flex space-x-2 items-end">
                  <div className="flex-1 relative">
                    <Input
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="INPUT NEURAL COMMAND..."
                      className="glass-strong border-luxury-gold/30 text-white placeholder:text-white/50 font-inter pr-12 rounded-2xl bg-white/5"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={toggleVoice}
                      variant="ghost"
                      size="sm"
                      className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full transition-all ${
                        isListening 
                          ? 'text-luxury-gold bg-luxury-gold/20 shadow-lg' 
                          : 'text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                    </Button>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputText.trim() || isTyping}
                      className="gradient-gold text-luxury-dark hover:opacity-90 transition-opacity rounded-2xl p-3 relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <Send className="w-4 h-4 relative z-10" />
                    </Button>
                  </motion.div>
                </div>
                
                {/* Enhanced Status Indicators */}
                <div className="flex justify-between items-center mt-3 text-xs">
                  <motion.div 
                    className="text-white/40 font-inter tracking-wider flex items-center space-x-2"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>&lt; POWERED BY QUANTUM NEURAL NETWORKS &gt;</span>
                  </motion.div>
                  
                  {isListening && (
                    <motion.div 
                      className="text-luxury-gold font-inter flex items-center space-x-2"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="tracking-wider">AUDIO.INPUT.ACTIVE</span>
                      <motion.div 
                        className="w-2 h-2 bg-luxury-gold rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
