
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Bot, Send, Mic, MicOff, Sparkles } from 'lucide-react';

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: '1',
        text: `Welcome back, ${userData?.name || 'Guest'}. I'm KAI, your premium AI concierge. How may I elevate your experience today?`,
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

    // Simulate AI thinking with typing indicator
    const typingMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: '',
      sender: 'kai',
      timestamp: new Date(),
      typing: true
    };
    
    setTimeout(() => {
      setMessages(prev => [...prev, typingMessage]);
    }, 500);

    // Generate sophisticated AI responses
    setTimeout(() => {
      const responses = [
        "Excellent choice. I've curated several premium options that align perfectly with your sophisticated preferences. Shall I proceed with the arrangements?",
        "I understand your requirements completely. Based on our previous interactions and your profile, I recommend three exclusive alternatives that exceed industry standards.",
        "Absolutely exquisite taste. I have access to exclusive partnerships that can deliver exceptional results. Would you like me to initiate the premium service protocol?",
        "Perfect timing. I've been monitoring optimal opportunities in this category, and I have several high-caliber recommendations ready for your consideration.",
        "Outstanding request. My predictive algorithms suggest this aligns with your luxury lifestyle preferences. I can arrange something truly exceptional.",
      ];

      const kaiResponse: Message = {
        id: (Date.now() + 2).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'kai',
        timestamp: new Date(),
      };

      setMessages(prev => prev.filter(m => !m.typing).concat([kaiResponse]));
      setIsTyping(false);
    }, 2000);
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
      {/* Futuristic Chat Toggle Button */}
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
            className="w-16 h-16 rounded-full gradient-gold shadow-2xl hover:shadow-luxury-gold/50 transition-all duration-300 flex items-center justify-center text-2xl relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-luxury-purple/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <Bot className="w-8 h-8 text-luxury-dark relative z-10" />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-luxury-purple rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>

      {/* Advanced Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9, rotateX: -15 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-8 w-96 h-[32rem] z-50"
          >
            <Card className="glass-strong border-luxury-gold/30 h-full flex flex-col relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-purple/5 via-transparent to-luxury-gold/5" />
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Futuristic Header */}
              <div className="p-4 border-b border-white/10 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center relative"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Bot className="w-6 h-6 text-luxury-dark" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-luxury-purple/50"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-playfair text-white text-lg">KAI</h3>
                      <motion.p 
                        className="text-luxury-gold text-xs font-inter"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        AI Concierge • Online
                      </motion.p>
                    </div>
                  </div>
                  <Button
                    onClick={onToggle}
                    variant="ghost"
                    size="sm"
                    className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    ✕
                  </Button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl font-inter text-sm relative ${
                        message.sender === 'user'
                          ? 'gradient-gold text-luxury-dark p-3'
                          : 'glass border border-white/20 text-white p-3'
                      }`}
                    >
                      {message.typing ? (
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
                      ) : (
                        message.text
                      )}
                      {message.sender === 'kai' && !message.typing && (
                        <motion.div
                          className="absolute -bottom-1 -left-1 w-3 h-3 bg-luxury-purple rounded-full"
                          animate={{ scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Advanced Input Area */}
              <div className="p-4 border-t border-white/10 relative z-10">
                <div className="flex space-x-2 items-end">
                  <div className="flex-1 relative">
                    <Input
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Message KAI..."
                      className="glass border-white/20 text-white placeholder:text-white/50 font-inter pr-12 rounded-2xl"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={toggleVoice}
                      variant="ghost"
                      size="sm"
                      className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full ${
                        isListening ? 'text-luxury-gold bg-luxury-gold/20' : 'text-white/60 hover:text-white'
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
                      className="gradient-gold text-luxury-dark hover:opacity-90 transition-opacity rounded-2xl p-3"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
                
                {/* Status Indicators */}
                <div className="flex justify-between items-center mt-2 text-xs">
                  <motion.span 
                    className="text-white/40 font-inter"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    KAI is powered by advanced AI
                  </motion.span>
                  {isListening && (
                    <motion.span 
                      className="text-luxury-gold font-inter flex items-center space-x-1"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span>Listening...</span>
                      <motion.div 
                        className="w-2 h-2 bg-luxury-gold rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                    </motion.span>
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
