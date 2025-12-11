'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '250+', icon: '✅' },
  { label: 'Happy Clients', value: '150+', icon: '😊' },
  { label: 'Years Experience', value: '10+', icon: '⭐' },
  { label: 'Team Members', value: '25+', icon: '👥' },
];

const expertise = [
  { title: 'Digital Strategy', level: 95 },
  { title: 'Social Media Marketing', level: 92 },
  { title: 'SEO & SEM', level: 90 },
  { title: 'Content Marketing', level: 88 },
  { title: 'Brand Development', level: 94 },
  { title: 'Analytics & Data', level: 89 },
];

interface StatItemProps {
  stat: (typeof stats)[0];
  index: number;
}

function StatItem({ stat, index }: StatItemProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-5xl mb-3"
        whileInView={{ rotate: 360 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {stat.icon}
      </motion.div>
      <motion.p
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.15 }}
        viewport={{ once: true }}
      >
        {stat.value}
      </motion.p>
      <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
    </motion.div>
  );
}

interface ExpertiseItemProps {
  item: (typeof expertise)[0];
  index: number;
}

function ExpertiseItem({ item, index }: ExpertiseItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
        <span className="text-purple-400 font-bold">{item.level}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${item.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-slate-950 to-slate-950 pointer-events-none" />

      {/* Animated blobs */}
      <motion.div
        className="absolute -bottom-64 -left-64 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
                Why Choose Us
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We&apos;re not just another digital marketing agency. We&apos;re a team of passionate strategists, creatives, and technologists dedicated to transforming your brand&apos;s digital presence.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              With over a decade of experience working with brands across industries, we&apos;ve mastered the art and science of digital marketing. From strategy to execution, we deliver results that exceed expectations.
            </p>

            <div className="space-y-4">
              {[
                'Data-driven strategy & insights',
                'Creative excellence & innovation',
                'Transparent reporting & communication',
                'Dedicated account management',
              ].map((point, index) => (
                <motion.div
                  key={point}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-4" />
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right stats */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <StatItem key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Expertise section */}
        <motion.div
          className="mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Expertise list */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-10 text-white">
              Our Expertise
            </h3>
            {expertise.map((item, index) => (
              <ExpertiseItem key={item.title} item={item} index={index} />
            ))}
          </motion.div>

          {/* Decorative element */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
            <div className="relative w-64 h-64 border-2 border-purple-500/30 rounded-3xl flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 border border-gradient-to-r from-purple-500 to-blue-500 rounded-2xl"
              />
              <div className="relative text-center z-10">
                <p className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  100%
                </p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
