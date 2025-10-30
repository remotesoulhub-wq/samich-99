'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, ZoomIn } from 'lucide-react';
import PortfolioModal from '@/components/PortfolioModal';

const portfolioItems = [
  {
    id: 1,
    title: 'Fantasy Cottage',
    category: '3D Art',
    image: '/3d/slider3.jpg',
    type: 'image' as const,
  },
  {
    id: 2,
    title: 'Diamond Ring',
    category: 'Photography',
    image: '/photo/p1.jpg',
    type: 'image' as const,
  },
  {
    id: 3,
    title: 'Photo 2',
    category: 'Photography',
    image: '/photo/p2.jpg',
    type: 'image' as const,
  },
  {
    id: 4,
    title: 'Photo 3',
    category: 'Photography',
    image: '/photo/p3.jpeg',
    type: 'image' as const,
  },
  {
    id: 5,
    title: 'Photo 4',
    category: 'Photography',
    image: '/photo/p4.jpg',
    type: 'image' as const,
  },
  {
    id: 6,
    title: 'Historic Tower',
    category: 'Photography',
    image: '/photo/p5.jpg',
    type: 'image' as const,
  },
  {
    id: 7,
    title: 'Photo 6',
    category: 'Photography',
    image: '/photo/p6.jpg',
    type: 'image' as const,
  },
  {
    id: 8,
    title: 'Photo 7',
    category: 'Photography',
    image: '/photo/p7.jpg',
    type: 'image' as const,
  },
  {
    id: 9,
    title: 'Photo 8',
    category: 'Photography',
    image: '/photo/p8.jpg',
    type: 'image' as const,
  },
  {
    id: 10,
    title: 'Photo 9',
    category: 'Photography',
    image: '/photo/p9.jpg',
    type: 'image' as const,
  },
  {
    id: 11,
    title: 'Ocean View',
    category: 'Photography',
    image: '/photo/p10.jpg',
    type: 'image' as const,
  },
  {
    id: 12,
    title: 'Photo 11',
    category: 'Photography',
    image: '/photo/p11.JPG',
    type: 'image' as const,
  },
  {
    id: 13,
    title: 'Photo 12',
    category: 'Photography',
    image: '/photo/p12.jpeg',
    type: 'image' as const,
  },
  {
    id: 14,
    title: 'Photo 14',
    category: 'Photography',
    image: '/photo/p14.jpg',
    type: 'image' as const,
  },
  {
    id: 15,
    title: 'Photo 15',
    category: 'Photography',
    image: '/photo/p15.JPG',
    type: 'image' as const,
  },
  {
    id: 16,
    title: 'Photo 16',
    category: 'Photography',
    image: '/photo/p16.jpg',
    type: 'image' as const,
  },
  {
    id: 17,
    title: 'Photo 17',
    category: 'Photography',
    image: '/photo/p17.jpeg',
    type: 'image' as const,
  },
  {
    id: 18,
    title: 'Video Showcase 1',
    category: 'Videography',
    image: 'https://img.youtube.com/vi/0FVhlGuTAkk/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://youtu.be/0FVhlGuTAkk',
  },
  {
    id: 19,
    title: 'Video Showcase 2',
    category: 'Videography',
    image: 'https://img.youtube.com/vi/ELXEhA9ebQM/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://youtu.be/ELXEhA9ebQM',
  },
  {
    id: 20,
    title: 'Video Showcase 3',
    category: 'Videography',
    image: 'https://img.youtube.com/vi/OfJ9MUkfs3I/hqdefault.jpg',
    type: 'video' as const,
    videoUrl: 'https://youtu.be/OfJ9MUkfs3I',
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Videography', '3D Art', 'Photography'];

  const filteredItems =
    filter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const handleItemClick = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <section id="portfolio" ref={ref} className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-white/50">Work</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A curated selection of projects showcasing creative excellence
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              layoutId={`portfolio-${item.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-white/70 mb-2">{item.category}</p>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <motion.div
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                    >
                      {item.type === 'video' ? (
                        <Play size={20} className="text-white ml-1" />
                      ) : (
                        <ZoomIn size={20} className="text-white" />
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <PortfolioModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </section>
  );
}
