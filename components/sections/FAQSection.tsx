"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much is the deposit?",
      answer:
        "Deposit amounts vary by camera type: Instax cameras require $20, Analog cameras require $30, and Disposable cameras require $10. All deposits are fully refundable upon successful camera return.",
    },
    {
      question: "What happens if I return the camera late?",
      answer:
        "Late fees are $5 per hour after the rental period ends. We'll send you notifications as the return time approaches. Deposits are only refunded after the camera is returned and inspected.",
    },
    {
      question: "Can tourists rent cameras?",
      answer:
        "Yes! Tourists are welcome. You'll need a valid passport or international ID for verification. Tourist rentals can be extended with additional proof of stay.",
    },
    {
      question: "What if the camera is damaged?",
      answer:
        "We have a fair damage assessment policy. Minor wear and tear (small scratches) results in 90% refund. Major damage (broken lens) results in 50-70% refund. Our team conducts transparent damage checks.",
    },
    {
      question: "How do I receive my photos?",
      answer:
        "For Instax cameras, you receive physical prints with your rental. For analog cameras, you can process film at our partner labs or any professional lab. Digital scans are available upon request.",
    },
    {
      question: "Is insurance available?",
      answer:
        "Yes, optional insurance covers accidental damage up to the full camera value. It costs $5-8 depending on the camera and covers drops, water damage, and other accidents.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Frequently Asked</span> Questions
          </h2>
          <p className="text-lg text-accent-cream/70">
            Everything you need to know about Obscura camera rentals
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-accent-cream text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="text-accent-gold" size={24} />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 border-t border-white/10">
                  <p className="text-accent-cream/80">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glassmorphism p-8 md:p-12 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-accent-cream mb-4">
            Didn't find your answer?
          </h3>
          <p className="text-accent-cream/70 mb-6">
            Our support team is here to help. Reach out anytime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:hello@obscura.rental"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Email Us
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Live Chat
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
