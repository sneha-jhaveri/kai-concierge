
import { motion } from 'framer-motion';

const FuturisticBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-purple/20 via-transparent to-luxury-gold/10" />
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 bg-luxury-purple/10 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-luxury-rose/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Flowing particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-luxury-gold/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"
        animate={{ y: ['0vh', '100vh', '0vh'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default FuturisticBackground;
