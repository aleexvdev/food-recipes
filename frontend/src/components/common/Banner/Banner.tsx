import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IBanner {
  images: any[];
}

export const Banner = ({ images }: IBanner) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [images.length]);

  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={images[currentIndex]}
          className="w-full h-full banner-bg"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
        />
      </AnimatePresence>
    </div>
  );
};

