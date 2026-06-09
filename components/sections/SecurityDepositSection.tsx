"use client";

import { motion } from "framer-motion";
import { Check, AlertCircle, Shield } from "lucide-react";

const SecurityDepositSection = () => {
  const securityFeatures = [
    {
      title: "User Verification",
      description: "KYC verification ensures security and accountability for all users",
      icon: "🔐",
    },
    {
      title: "Secure Deposit System",
      description:
        "Digital deposit system with real-time tracking and smart contracts",
      icon: "💳",
    },
    {
      title: "Automatic Refund",
      description: "Instant deposit refund upon successful camera return",
      icon: "✅",
    },
    {
      title: "Damage Protection",
      description: "Fair damage assessment policy protects both users and cameras",
      icon: "🛡️",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Secure & Protected</span>
              <br />
              Deposits Made Simple
            </h2>
            <p className="text-lg text-accent-cream/70 mb-8">
              Your trust is our priority. Obscura uses advanced security protocols to
              ensure every transaction is safe, transparent, and fair.
            </p>

            {/* Security Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-gold/30 to-accent-warm/20 flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-accent-cream mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-accent-cream/70 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-accent-warm/5 rounded-3xl blur-3xl"></div>

            {/* Content Box */}
            <div className="relative glassmorphism p-12 rounded-3xl space-y-8">
              {/* Deposit Example */}
              <div>
                <h3 className="text-xl font-bold text-accent-cream mb-4">
                  Deposit Breakdown
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Instax Camera", amount: "$20" },
                    { label: "Analog Camera", amount: "$30" },
                    { label: "Disposable Camera", amount: "$10" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-accent-cream/70">{item.label}</span>
                      <span className="font-bold text-accent-gold">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Refund Timeline */}
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-xl font-bold text-accent-cream mb-4">
                  Refund Timeline
                </h3>
                <div className="space-y-3">
                  {[
                    { step: "Camera Returned", time: "Instant" },
                    { step: "Condition Check", time: "2-5 mins" },
                    { step: "Deposit Refunded", time: "Immediately" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="text-accent-gold" size={20} />
                      <div className="flex-1">
                        <p className="text-accent-cream text-sm">{item.step}</p>
                      </div>
                      <span className="text-accent-gold font-semibold text-sm">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-accent-warm/10 border border-accent-warm/30 rounded-xl p-4 flex gap-3">
                <AlertCircle className="text-accent-warm flex-shrink-0" size={20} />
                <p className="text-sm text-accent-cream/80">
                  <strong>No Hidden Fees:</strong> The deposit amount shown is the exact
                  amount you'll receive back upon successful return.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Damage Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glassmorphism p-8 md:p-12 rounded-2xl"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="text-accent-gold flex-shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-2xl font-bold text-accent-cream mb-2">
                Damage Policy
              </h3>
              <p className="text-accent-cream/70">
                We understand accidents happen. Our fair damage policy covers minor
                wear and tear.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                condition: "No Damage",
                refund: "100%",
                description: "Full deposit refunded",
              },
              {
                condition: "Minor Damage",
                refund: "80-90%",
                description: "Small scratches, minor issues",
              },
              {
                condition: "Major Damage",
                refund: "50-70%",
                description: "Broken lens, major issues",
              },
            ].map((policy, index) => (
              <div key={index} className="text-center">
                <p className="font-bold text-accent-cream mb-2">{policy.condition}</p>
                <p className="text-3xl font-bold gradient-text mb-2">{policy.refund}</p>
                <p className="text-accent-cream/70 text-sm">{policy.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityDepositSection;
