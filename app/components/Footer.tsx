'use client';

import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Team', 'Careers', 'Blog'],
  },
  {
    title: 'Services',
    links: ['Digital Strategy', 'Social Media', 'SEO', 'Analytics'],
  },
  {
    title: 'Resources',
    links: ['Case Studies', 'Documentation', 'Support', 'FAQ'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50 pt-20 pb-10 px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent pointer-events-none" />

      {/* Animated blobs */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              3D Portfolio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming digital marketing with innovative 3D experiences and strategic excellence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: '🐦', label: 'Twitter' },
                { icon: '💼', label: 'LinkedIn' },
                { icon: '📸', label: 'Instagram' },
              ].map((social) => (
                <motion.button
                  key={social.label}
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600/50 hover:to-blue-600/50 rounded-lg flex items-center justify-center text-lg smooth-transition pointer-events-auto"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (colIndex + 1) * 0.05 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 smooth-transition text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2024 Premium 3D Portfolio. All rights reserved.
          </p>

          {/* Bottom links */}
          <div className="flex gap-6 text-sm">
            <motion.a
              href="#"
              className="text-gray-500 hover:text-gray-300 smooth-transition"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-500 hover:text-gray-300 smooth-transition"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-500 hover:text-gray-300 smooth-transition"
              whileHover={{ y: -2 }}
            >
              Sitemap
            </motion.a>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-600/50 hover:to-blue-600/50 rounded-lg text-sm font-semibold text-white smooth-transition pointer-events-auto"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
