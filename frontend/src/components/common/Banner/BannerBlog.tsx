import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { bannerBlogs } from '../../../constans/data';
import imagen1 from '../../../../public/assets/slider-banner-blog/image-banner-1.jpg';
import imagen2 from '../../../../public/assets/slider-banner-blog/image-banner-2.jpg';
import imagen3 from '../../../../public/assets/slider-banner-blog/image-banner-3.jpg';
import imagen4 from '../../../../public/assets/slider-banner-blog/image-banner-4.jpg';
import imagen5 from '../../../../public/assets/slider-banner-blog/image-banner-5.jpg';

const images = [imagen1, imagen2, imagen3, imagen4, imagen5];

const imageVariants = {
  initial: { x: '-100vw' },
  animate: { x: 0 },
  exit: { x: '100vw' }
};

export const BannerBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='relative w-full hidden md:block md:h-[700px]'>
      <div className="w-full h-full absolute overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={images[currentIndex]}
            className="w-full h-full banner-bg"
            style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
      <div className='absolute w-full h-full py-10 px-3 flex items-start justify-center'>
        <motion.h1
          key={bannerBlogs[currentIndex].text}
          className='text-4xl text-white font-semibold text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {bannerBlogs[currentIndex].text}
        </motion.h1>
      </div>
    </div>
  )
}