'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Strategy & Planning',
    description: 'Develop comprehensive digital marketing strategies tailored to your business goals',
    features: ['Market Analysis', 'Competitor Research', 'Goal Setting', 'Roadmap Creation'],
    icon: '📊',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Content Creation',
    description: 'Craft engaging, high-quality content that tells your brand story',
    features: ['Blog Writing', 'Video Production', 'Graphics Design', 'Copywriting'],
    icon: '✍️',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Social Media Management',
    description: 'Build and manage your social presence across all major platforms',
    features: ['Campaign Management', 'Community Engagement', 'Analytics', 'Growth Strategy'],
    icon: '📱',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Improve your visibility and rank higher in search engine results',
    features: ['Technical SEO', 'Keyword Research', 'Link Building', 'Performance Tracking'],
    icon: '🔍',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Paid Advertising',
    description: 'Maximize ROI through strategic paid advertising campaigns',
    features: ['PPC Management', 'Retargeting', 'Budget Optimization', 'A/B Testing'],
    icon: '💡',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Analytics & Reporting',
    description: 'Track performance and gain actionable insights from your data',
    features: ['Performance Metrics', 'Custom Reports', 'Insights Analysis', 'Recommendations'],
    icon: '📈',
    gradient: 'from-rose-500 to-pink-500',
  },
];

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        className="relative h-full cursor-pointer group"
        animate={isExpanded ? { y: -10 } : { y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none" />

        {/* Card content */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8 h-full flex flex-col overflow-hidden group-hover:border-purple-500/50 smooth-transition">
          {/* Decorative gradient background */}
          <motion.div
            className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 smooth-transition`}
            animate={isExpanded ? { scale: 1 } : { scale: 0.8 }}
          />

          {/* Icon */}
          <motion.div
            className="text-6xl mb-6"
            animate={isExpanded ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {service.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text smooth-transition">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 group-hover:text-gray-300 smooth-transition">
            {service.description}
          </p>

          {/* Features list */}
          <motion.div
            className="space-y-3 mb-8"
            initial={{ opacity: 0, height: 0 }}
            animate={isExpanded ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center text-sm text-gray-300">
                <span className="inline-block w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3" />
                {feature}
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="w-full mt-auto py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-center smooth-transition pointer-events-auto hover:shadow-lg hover:shadow-purple-500/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-purple-950/20 pointer-events-none" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand and drive sustainable growth
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
