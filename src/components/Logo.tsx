"use client";

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ className = '', size = 'md', showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon - Magnifying Glass */}
      <motion.div
        className={`relative ${sizeClasses[size]} mr-3`}
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Magnifying Glass Circle */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Magnifying Glass Frame */}
          <div className="relative w-full h-full">
            {/* Outer Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 rounded-full blur-sm opacity-60 animate-pulse"></div>

            {/* Main Frame Ring */}
            <div className="relative w-full h-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 rounded-full p-0.5 shadow-lg shadow-blue-500/30">
              {/* Inner Frame */}
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full p-1">
                {/* Glass Lens */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100/20 via-cyan-100/30 to-blue-200/20 rounded-full border border-blue-300/30 backdrop-blur-sm relative overflow-hidden">
                  {/* Lens Reflection */}
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white/40 rounded-full blur-sm"></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-200/60 rounded-full"></div>

                  {/* Lens Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-0.5 bg-blue-400 absolute top-1/2 transform -translate-y-1/2"></div>
                    <div className="h-full w-0.5 bg-blue-400 absolute left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Handle */}
            <motion.div
              className="absolute -bottom-1 -right-1 w-3 h-7 origin-top-left"
              style={{ transformOrigin: 'top left' }}
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              {/* Handle Shadow */}
              <div className="absolute inset-0 bg-blue-800 rounded-full blur-sm opacity-50 transform translate-x-0.5 translate-y-0.5"></div>

              {/* Handle Main */}
              <div className="relative w-full h-full bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 rounded-full shadow-lg border border-blue-300/50">
                {/* Handle Highlight */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-blue-200/60 rounded-full"></div>
              </div>
            </motion.div>

            {/* Magnification Effect Lines */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Search Lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-0.5 bg-blue-400/40 rounded-full rotate-45"></div>
                <div className="w-4 h-0.5 bg-cyan-400/40 rounded-full -rotate-45 mt-1"></div>
              </div>
            </motion.div>

            {/* Sparkle Effects - Blue Theme */}
            <motion.div
              className="absolute -top-1 -left-1 w-2 h-2"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            >
              <div className="w-full h-full bg-blue-300 rounded-full shadow-lg shadow-blue-400/50"></div>
            </motion.div>

            <motion.div
              className="absolute -top-2 right-1 w-1.5 h-1.5"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1.2
              }}
            >
              <div className="w-full h-full bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"></div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 w-1 h-1"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 90, 180]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 0.8
              }}
            >
              <div className="w-full h-full bg-blue-500 rounded-full shadow-lg shadow-blue-600/50"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Text Logo */}
      {showText && (
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            className={`font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent ${textSizeClasses[size]}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Please
          </motion.span>
          <motion.span
            className={`font-bold ml-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent ${textSizeClasses[size]}`}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Scan
          </motion.span>
        </motion.div>
      )}
    </div>
  );
};

export default Logo;
