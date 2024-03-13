import { useEffect, useState } from 'react';
import { banners } from '../../../constans/constans';
import { motion, AnimatePresence } from 'framer-motion';

export const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((currentBanner + 1) % banners.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentBanner]);

  return (
    <div className="w-full min-h-screen absolute overflow-hidden inset-0 -z-20">
      <AnimatePresence initial={false}>
        <motion.div
          key={banners[currentBanner].img}
          className="w-full h-full absolute inset-0"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <picture>
            <source src={`assets/img-home/${banners[currentBanner].img}.avif`} className="w-full h-full object-cover" type='image/avif' />
            <source src={`assets/img-home/${banners[currentBanner].img}.webp`} className="w-full h-full object-cover" type='image/webp' />
          </picture>
          <img
            src={`assets/img-home/${banners[currentBanner].img}.jpg`}
            alt={banners[currentBanner].img}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

