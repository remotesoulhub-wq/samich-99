'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, Box, BarChart3, Camera } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Videography',
    description: 'Cinematic storytelling that captures emotion and drives engagement through compelling visual narratives.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Box,
    title: '3D Artistry',
    description: 'Photorealistic 3D models and animations that bring imagination to life with stunning detail.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Infographics',
    description: 'Data visualization and information design that transforms complex concepts into clear, engaging visuals.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography that captures authentic moments and creates powerful brand imagery.',
    color: 'from-violet-500 to-pink-500',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" ref={ref} className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            What I <span className="text-white/50">Create</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Specialized services tailored to elevate your brand and tell your story
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm hover:border-white/20 transition-colors">
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
