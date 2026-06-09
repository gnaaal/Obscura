"use client";

import { motion } from "framer-motion";

const WhyObscuraSection = () => {
  const reasons = [
    {
      title: "Authentic Memories",
      description:
        "Smartphone photos often feel disposable. Film photography creates memories that matter.",
      icon: "📸",
    },
    {
      title: "Beyond Photobooths",
      description:
        "Limited to fixed locations? Explore the city with your vintage camera, capturing genuine moments.",
      icon: "🌆",
    },
    {
      title: "Intentional Photography",
      description:
        "Every shot becomes meaningful. No endless scrolling, just pure creative expression.",
      icon: "✨",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-dark-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Choose</span> Vintage Photography?
          </h2>
          <p className="text-lg text-accent-cream/70 max-w-2xl mx-auto">
            In a world of infinite digital captures, analog photography stands out as
            something special and intentional.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glassmorphism p-8 rounded-2xl group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-accent-cream mb-3">
                {reason.title}
              </h3>
              <p className="text-accent-cream/70">{reason.description}</p>
              <div className="mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-accent-gold to-accent-warm transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center glassmorphism p-8 rounded-2xl"
        >
          <p className="text-lg text-accent-cream">
            Obscura brings back the magic of vintage photography by making it
            <span className="gradient-text font-semibold"> accessible, affordable</span>,
            and integrated into your urban lifestyle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyObscuraSection;
