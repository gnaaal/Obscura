"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Lock,
  Zap,
  RotateCcw,
  Smartphone,
  Shield,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Camera Rental",
      description: "Quick QR-based access to premium vintage cameras 24/7",
    },
    {
      icon: Lock,
      title: "QR-Based Unlock System",
      description:
        "Secure smart locking mechanism for hassle-free access to machines",
    },
    {
      icon: Shield,
      title: "Deposit Protection",
      description: "Refundable deposit system that protects both users and cameras",
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      description: "Premium rental stations in key urban areas across Jakarta",
    },
    {
      icon: RotateCcw,
      title: "Easy Camera Return",
      description: "Simple return process with automatic deposit refund",
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Manage rentals, locate cameras, and track photos via app",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Features</span> That Matter
          </h2>
          <p className="text-lg text-accent-cream/70 max-w-2xl mx-auto">
            Everything you need for a seamless vintage camera rental experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glassmorphism p-8 rounded-2xl group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-gold/30 to-accent-warm/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-accent-gold" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-accent-cream mb-3">
                  {feature.title}
                </h3>
                <p className="text-accent-cream/70">{feature.description}</p>

                {/* Accent Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-8 bg-gradient-to-r from-accent-gold to-accent-warm transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "50+", label: "Machines Across Jakarta" },
            { number: "$8-12", label: "Daily Rental Rates" },
            { number: "24/7", label: "Access & Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold gradient-text mb-2">{stat.number}</p>
              <p className="text-accent-cream/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
