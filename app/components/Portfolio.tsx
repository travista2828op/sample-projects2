'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Digital Transformation',
    category: 'Strategy',
    description: 'Complete brand overhaul with cutting-edge digital marketing',
    gradient: 'from-purple-600 to-pink-600',
    icon: '🚀',
  },
  {
    id: 2,
    title: 'Social Media Growth',
    category: 'Marketing',
    description: 'Scaled client audience from 50K to 500K followers',
    gradient: 'from-blue-600 to-cyan-600',
    icon: '📱',
  },
  {
    id: 3,
    title: 'E-commerce Optimization',
    category: 'Analytics',
    description: 'Increased conversions by 350% through data-driven optimization',
    gradient: 'from-emerald-600 to-teal-600',
    icon: '💰',
  },
  {
    id: 4,
    title: 'Brand Storytelling',
    category: 'Content',
    description: 'Crafted compelling narratives that resonate with target audience',
    gradient: 'from-orange-600 to-red-600',
    icon: '✨',
  },
  {
    id: 5,
    title: 'Influencer Campaigns',
    category: 'Partnerships',
    description: 'Connected brands with perfect influencers for maximum impact',
    gradient: 'from-indigo-600 to-purple-600',
    icon: '⭐',
  },
  {
    id: 6,
    title: 'Video Marketing',
    category: 'Production',
    description: 'Created viral video content with millions of views',
    gradient: 'from-rose-600 to-pink-600',
    icon: '🎬',
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* 3D perspective effect */}
      <motion.div
        animate={isHovered ? { rotateY: 10, rotateX: -10 } : { rotateY: 0, rotateX: 0 }}
        transition={{ duration: 0.3 }}
        style={{ perspective: '1000px' }}
        className="h-full"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none" />

        <div className={`relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full flex flex-col overflow-hidden group-hover:border-purple-500/50 smooth-transition`}>
          {/* Animated background gradient */}
          <motion.div
            className={`absolute -inset-full bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 smooth-transition`}
            animate={isHovered ? { x: 0 } : { x: -100 }}
            transition={{ duration: 0.6 }}
          />

          {/* Icon */}
          <motion.div
            className="text-5xl mb-4"
            animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.icon}
          </motion.div>

          {/* Category badge */}
          <span className={`inline-block w-fit px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-bold rounded-full mb-3`}>
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text smooth-transition">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 flex-grow group-hover:text-gray-300 smooth-transition">
            {project.description}
          </p>

          {/* CTA */}
          <motion.button
            className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 smooth-transition pointer-events-auto"
            animate={isHovered ? { y: 0 } : { y: 10 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Case Study
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 pointer-events-none" />

      {/* Animated blob background */}
      <motion.div
        className="absolute top-20 -left-64 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 -right-64 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
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
            <span className="gradient-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
              Featured Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing our most impactful projects that transformed brands and drove measurable results
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
