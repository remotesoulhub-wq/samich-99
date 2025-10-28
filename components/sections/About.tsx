'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting Visual
              <br />
              <span className="text-white/50">Experiences</span>
            </motion.h2>

            <motion.p
              className="text-lg text-white/70 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With over a decade of experience in visual storytelling, I transform ideas into compelling narratives through video, 3D art, infographics, and photography.
            </motion.p>

            <motion.p
              className="text-lg text-white/70 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Every project is an opportunity to push creative boundaries and deliver work that resonates, inspires, and leaves a lasting impact.
            </motion.p>
          </div>

          <motion.div
            className="relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-orange-500/30 rounded-2xl"
              animate={{
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute inset-4 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center px-8">
                <motion.div
                  className="text-7xl font-bold mb-4"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8, type: 'spring' }}
                >
                  10+
                </motion.div>
                <div className="text-xl text-white/70">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
