
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

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
}

const ChatBot = ({ isOpen, onToggle, userData }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const greeting: Message = {
        id: '1',
        text: `Hello ${userData.name}! I'm KAI, your personal AI concierge. How may I assist you today?`,
        sender: 'kai',
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen, userData.name]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate KAI response
    setTimeout(() => {
      const responses = [
        "I'd be delighted to help you with that request. Let me check the best options available for you.",
        "That's an excellent choice! I have some exclusive recommendations that would be perfect for your preferences.",
        "I understand exactly what you're looking for. Allow me to curate some premium options for you.",
        "Wonderful! Based on your interests, I have some exceptional suggestions that I think you'll love.",
      ];

      const kaiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'kai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, kaiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={onToggle}
          className="w-16 h-16 rounded-full gradient-gold shadow-2xl hover:shadow-luxury-gold/50 transition-all duration-300 flex items-center justify-center text-2xl"
        >
          💬
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-8 w-96 h-[32rem] z-50"
          >
            <Card className="glass-strong border-luxury-gold/30 h-full flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center">
                      🤖
                    </div>
                    <div>
                      <h3 className="font-playfair text-white">KAI</h3>
                      <p className="text-white/60 text-xs font-inter">Your AI Concierge</p>
                    </div>
                  </div>
                  <Button
                    onClick={onToggle}
                    variant="ghost"
                    size="sm"
                    className="text-white/60 hover:text-white"
                  >
                    ✕
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl font-inter text-sm ${
                        message.sender === 'user'
                          ? 'gradient-gold text-luxury-dark'
                          : 'glass border border-white/20 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex space-x-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask KAI anything..."
                    className="glass border-white/20 text-white placeholder:text-white/50 font-inter"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="gradient-gold text-luxury-dark hover:opacity-90 transition-opacity"
                  >
                    →
                  </Button>
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
