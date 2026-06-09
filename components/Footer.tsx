"use client";

import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Locations", href: "#locations" },
        { label: "Pricing", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact", href: "#" },
        { label: "FAQ", href: "#faq" },
        { label: "Terms", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-dark-900/80 backdrop-blur-md border-t border-white/10 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-gold to-accent-warm rounded-lg flex items-center justify-center font-bold text-dark-900">
                O
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-accent-gold to-accent-warm bg-clip-text text-transparent">
                Obscura
              </span>
            </div>
            <p className="text-accent-cream/70 text-sm mb-4">
              Bringing back the magic of vintage photography through smart rental stations.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent-gold/20 flex items-center justify-center text-accent-gold hover:text-accent-gold transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-accent-cream mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-accent-cream/70 hover:text-accent-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-accent-gold">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-accent-cream/70 text-sm">Email</p>
                <p className="text-accent-cream font-semibold">hello@obscura.rental</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-accent-gold">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-accent-cream/70 text-sm">Phone</p>
                <p className="text-accent-cream font-semibold">+62 123-456-7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-cream/70 text-sm">
            © {currentYear} Obscura. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-accent-cream/70 hover:text-accent-gold text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-accent-cream/70 hover:text-accent-gold text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-accent-cream/70 hover:text-accent-gold text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
