import { useEffect, useState } from 'react'
import { banners } from '../../../constans/constans';
import { motion } from 'framer-motion';

export const Banner = () => {

  const [currentBanner, setCurrentBanner] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((currentBanner + 1) % banners.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [currentBanner]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen absolute inset-0 -z-20"
    >
      <picture>
        <source />
        <img
          src={`assets/img-home/${banners[currentBanner].img}.jpg`} 
          alt={banners[currentBanner].img}
          className="w-full h-full object-cover"
        />
      </picture>
      
    </motion.div>
  );
}
