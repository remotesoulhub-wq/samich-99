'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'samichouiyakh99@gmail.com',
      href: 'mailto:samichouiyakh99@gmail.com'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+1 (506) 999-3149',
      href: 'tel:+15069993149'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Fredericton, NB, CA',
      href: null
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/birdyy_vision' },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-white/50">Collaborate</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind? Let's bring your vision to life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="group block"
                  >
                    <motion.div
                      className="mb-4 inline-block"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <info.icon size={32} className="text-white/70 group-hover:text-white transition-colors" />
                    </motion.div>
                    <p className="text-sm text-white/50 mb-2 uppercase tracking-wider">{info.label}</p>
                    <p className="text-lg group-hover:text-white transition-colors">{info.value}</p>
                  </a>
                ) : (
                  <>
                    <div className="mb-4">
                      <info.icon size={32} className="text-white/70 mx-auto" />
                    </div>
                    <p className="text-sm text-white/50 mb-2 uppercase tracking-wider">{info.label}</p>
                    <p className="text-lg">{info.value}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-sm text-white/50 mb-6 uppercase tracking-wider">Follow Me</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 pt-12 border-t border-white/10 text-center text-white/50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>&copy; 2025 QLF Studio. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
