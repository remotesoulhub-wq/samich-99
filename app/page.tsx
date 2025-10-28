'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Video, Box, Image, Mail, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
