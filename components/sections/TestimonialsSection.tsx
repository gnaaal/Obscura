"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Photography Enthusiast",
      image: "👩‍💼",
      content:
        "Obscura brought back the joy of film photography for me. The instant cameras are perfect for capturing genuine moments with friends. It's nostalgic, fun, and affordable!",
      rating: 5,
      focus: "Nostalgia & Fun",
    },
    {
      name: "Adi & Bella",
      role: "Couple Explorers",
      image: "👫",
      content:
        "Our date night in Jakarta became so much more memorable with Obscura cameras. We explored Kota Tua, took amazing photos, and have tangible prints to remember it by. Highly recommended!",
      rating: 5,
      focus: "Date Activity",
    },
    {
      name: "Marcus Rodriguez",
      role: "Urban Photographer",
      image: "👨‍🎨",
      content:
        "As someone who loves analog photography, Obscura is a game-changer. The quality cameras and convenient rental stations make it so easy to explore Jakarta through a film lens.",
      rating: 5,
      focus: "Urban Exploration",
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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-800/30 to-transparent">
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
            <span className="gradient-text">What Our Users</span> Say
          </h2>
          <p className="text-lg text-accent-cream/70 max-w-2xl mx-auto">
            Real stories from people experiencing vintage photography with Obscura
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glassmorphism p-8 rounded-2xl flex flex-col"
            >
              {/* Header with Avatar and Rating */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-gold/30 to-accent-warm/20 flex items-center justify-center text-3xl">
                    {testimonial.image}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="#d4af37"
                        className="text-accent-gold"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-bold text-accent-cream text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-accent-cream/60">{testimonial.role}</p>
              </div>

              {/* Quote */}
              <p className="text-accent-cream/80 flex-grow mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Focus Tag */}
              <div className="border-t border-white/10 pt-4">
                <span className="inline-block px-3 py-1 bg-accent-gold/20 text-accent-gold text-xs font-semibold rounded-full">
                  {testimonial.focus}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { number: "2,500+", label: "Happy Users" },
            { number: "4.9★", label: "Average Rating" },
            { number: "5,000+", label: "Photos Taken" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-6 rounded-xl text-center"
            >
              <p className="text-3xl font-bold gradient-text mb-2">{stat.number}</p>
              <p className="text-accent-cream/70 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-accent-cream/70 mb-6">
            Join thousands of users sharing their Obscura experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Read More Stories
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Share Your Experience
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
