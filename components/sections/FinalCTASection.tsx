"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FinalCTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-dark-800 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-gold opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-warm opacity-5 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 text-center space-y-8"
        >
          {/* Icon */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-5xl"
            >
              🎬
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text">Bring Back the Magic</span>
            <br />
            <span className="text-accent-cream">of Photography</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-accent-cream/80 max-w-2xl mx-auto"
          >
            Experience the intentionality and beauty of vintage film photography. Start
            your journey today and capture moments that truly matter.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12 pt-4"
          >
            {[
              { icon: "📸", label: "Instant Prints" },
              { icon: "🌆", label: "Urban Locations" },
              { icon: "💳", label: "Secure Deposits" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <span className="text-4xl">{stat.icon}</span>
                <p className="text-accent-cream/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.a
              href="#locations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              Find a Machine
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg font-semibold"
            >
              Download App
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 pt-8 text-accent-cream/60 text-sm"
          >
            {[
              "✓ No Hidden Fees",
              "✓ 24/7 Support",
              "✓ Secure Deposits",
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glassmorphism p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "36+", label: "Stations" },
                { number: "2,500+", label: "Users" },
                { number: "4.9★", label: "Rating" },
                { number: "98%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </p>
                  <p className="text-accent-cream/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
