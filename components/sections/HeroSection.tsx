"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const floatingVariants = {
    initial: { y: 0 },
    animate: { y: -20, transition: { duration: 3, repeat: Infinity, repeatType: "reverse" as const } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="glassmorphism px-4 py-2 rounded-full inline-block">
              <p className="text-primary text-sm font-semibold">
                🎬 Reviving Vintage Photography Culture
              </p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Capture Moments</span>
            <br />
            <span className="text-black">Beyond the Screen</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Rent Instax and Analog Cameras from Smart Rental Stations and experience
            photography the way it was meant to be.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.a
              href="#locations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg font-semibold"
            >
              Find a Machine
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg font-semibold"
            >
              How It Works
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Camera Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative mt-20 h-64 md:h-80"
        >
          {/* Card 1 */}
          <motion.div
            variants={floatingVariants}
            className="absolute left-4 top-0 md:left-20"
          >
            <div className="glassmorphism p-4 rounded-xl w-40 h-48 flex flex-col items-center justify-center space-y-2">
              <div className="w-full h-32 bg-gradient-to-br from-primary/30 to-red-600/20 rounded-lg"></div>
              <p className="text-sm text-black font-semibold">Instax Camera</p>
              <p className="text-xs text-gray-600">$8/day</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={floatingVariants}
            className="absolute right-4 top-12 md:right-20"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="glassmorphism p-4 rounded-xl w-40 h-48 flex flex-col items-center justify-center space-y-2">
              <div className="w-full h-32 bg-gradient-to-br from-red-600/30 to-primary/20 rounded-lg"></div>
              <p className="text-sm text-black font-semibold">Film Camera</p>
              <p className="text-xs text-gray-600">$12/day</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-primary/50" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
