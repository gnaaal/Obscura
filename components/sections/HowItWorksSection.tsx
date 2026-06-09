"use client";

import { motion } from "framer-motion";
import { MapPin, Camera, CreditCard, Smile, RotateCcw } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Find an Obscura Station",
      description: "Locate the nearest rental machine using our mobile app or website",
      icon: MapPin,
    },
    {
      number: "02",
      title: "Choose Your Camera",
      description: "Browse available vintage and Instax cameras at the station",
      icon: Camera,
    },
    {
      number: "03",
      title: "Pay & Deposit",
      description: "Secure rental with payment and refundable deposit protection",
      icon: CreditCard,
    },
    {
      number: "04",
      title: "Capture Memories",
      description: "Explore the city and take amazing photos with your vintage camera",
      icon: Smile,
    },
    {
      number: "05",
      title: "Return & Refund",
      description: "Return the camera and instantly receive your deposit back",
      icon: RotateCcw,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-800/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-lg text-accent-cream/70 max-w-2xl mx-auto">
            5 simple steps to start your vintage photography adventure
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline connector */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-32 w-1 h-16 bg-gradient-to-b from-primary/50 to-primary/20 hidden md:block"></div>
                )}

                <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="glassmorphism p-8 rounded-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary mb-2">
                            STEP {step.number}
                          </p>
                          <h3 className="text-2xl font-bold text-accent-cream mb-2">
                            {step.title}
                          </h3>
                          <p className="text-accent-cream/70">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-20 h-20 rounded-full bg-primary flex items-center justify-center"
                    >
                      <span className="text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Placeholder for responsive layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-accent-cream/70 mb-6">
            Ready to experience vintage photography?
          </p>
          <motion.a
            href="#locations"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg"
          >
            Find a Machine Near You
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
