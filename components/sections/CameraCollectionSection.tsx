"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const CameraCollectionSection = () => {
  const cameras = [
    {
      name: "Fujifilm Instax Mini",
      description: "Instant color prints with vintage charm. Perfect for events and memories.",
      price: "$8",
      period: "per day",
      features: ["Instant Prints", "Color Film", "Easy to Use"],
      image: "📷",
      rating: 4.9,
    },
    {
      name: "Fujifilm Analog Camera",
      description:
        "Classic 35mm film camera for the serious photographer. Adjustable settings and timeless quality.",
      price: "$12",
      period: "per day",
      features: ["35mm Film", "Manual Controls", "Professional"],
      image: "📸",
      rating: 4.8,
      featured: true,
    },
    {
      name: "Disposable Film Camera",
      description:
        "Single-use film camera with 400 ISO film. Lightweight and perfect for casual exploration.",
      price: "$5",
      period: "per day",
      features: ["400 ISO Film", "Lightweight", "No Batteries"],
      image: "🎥",
      rating: 4.7,
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
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
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
            <span className="gradient-text">Our Camera</span> Collection
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Premium vintage and instant cameras curated for the perfect shoot
          </p>
        </motion.div>

        {/* Camera Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cameras.map((camera, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                camera.featured
                  ? "md:col-span-1 border-2 border-primary glassmorphism scale-105 md:scale-110"
                  : "glassmorphism"
              }`}
            >
              {/* Featured Badge */}
              {camera.featured && (
                <div className="bg-primary text-white py-2 text-center font-bold text-sm">
                  ⭐ MOST POPULAR
                </div>
              )}

              {/* Camera Image Area */}
              <div className="w-full h-48 bg-red-100 flex items-center justify-center text-6xl">
                {camera.image}
              </div>

              {/* Camera Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {camera.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(camera.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{camera.rating}</span>
                </div>

                <p className="text-gray-700 mb-6">{camera.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {camera.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold gradient-text">
                      {camera.price}
                    </span>
                    <span className="text-gray-700 text-sm">{camera.period}</span>
                  </div>
                </div>

                {/* Book Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    camera.featured
                      ? "bg-primary text-white hover:bg-red-700 hover:shadow-lg hover:shadow-primary/50"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 glassmorphism p-8 rounded-2xl text-center"
        >
          <p className="text-black mb-4">
            💡 All cameras include basic film, protective case, and user guide
          </p>
          <p className="text-gray-700">
            Deposit protection covers accidental damage. See our damage policy for details.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CameraCollectionSection;
