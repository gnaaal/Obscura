"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "Blok M",
      district: "South Jakarta",
      description: "Shopping and entertainment hub with diverse visitor base",
      machines: 8,
      hours: "24/7",
      icon: "🛍️",
    },
    {
      name: "SCBD",
      district: "Central Jakarta",
      description: "Business district perfect for lunch break photo sessions",
      machines: 12,
      hours: "6 AM - 11 PM",
      icon: "🏢",
    },
    {
      name: "Senayan",
      district: "South Jakarta",
      description: "Sports and recreation complex ideal for active explorers",
      machines: 6,
      hours: "24/7",
      icon: "⚽",
    },
    {
      name: "Kota Tua",
      district: "West Jakarta",
      description: "Historic area perfect for vintage photography enthusiasts",
      machines: 10,
      hours: "7 AM - 10 PM",
      icon: "🏛️",
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
    <section id="locations" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-800/30 to-transparent">
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
            <span className="gradient-text">Featured</span> Locations
          </h2>
          <p className="text-lg text-accent-cream/70 max-w-2xl mx-auto">
            Find Obscura rental stations in prime locations across Jakarta
          </p>
        </motion.div>

        {/* Locations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-8 rounded-2xl group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {location.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-black mb-2">
                {location.name}
              </h3>
              <p className="text-sm text-primary mb-4">{location.district}</p>
              <p className="text-gray-700 mb-6">{location.description}</p>

              {/* Stats */}
              <div className="space-y-3 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-3 text-gray-800">
                  <Users size={18} className="text-primary" />
                  <span>{location.machines} Rental Machines</span>
                </div>
                <div className="flex items-center gap-3 text-gray-800">
                  <Clock size={18} className="text-primary" />
                  <span>{location.hours}</span>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                View on Map
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center justify-center h-96 bg-red-100 rounded-xl mb-6">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-gray-800 text-lg">
                Interactive Map Coming Soon
              </p>
              <p className="text-gray-600 mt-2">
                View all Obscura stations on our digital map
              </p>
            </div>
          </div>

          {/* Map Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Total Stations", value: "36+" },
              { label: "Coverage Area", value: "Jakarta" },
              { label: "Expanding to", value: "Bandung, Surabaya" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-black mb-8">Download App</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Google Play Store</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Apple Store</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
