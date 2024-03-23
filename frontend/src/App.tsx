import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { categories } from './constans/categories';
import { CardCategory } from './components/common/Cards/CardCategory';
import { Footer } from './components/common/Footer/Footer';
import { CarouselComponent } from './components/Carousel/CarouselComponent';
import imagen1 from '../public/assets/slider-banner/hero-slider-1.jpg';
import imagen2 from '../public/assets/slider-banner/hero-slider-2.jpg';
import imagen3 from '../public/assets/slider-banner/hero-slider-3.jpg';
import { fadeIn } from './constans/motionVars';
import { textBanner } from './constans/constans';
import { Banner } from './components/common/Banner/Banner';
import { SliderHero } from './components/common/Slider/SliderHero';

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagenes = [imagen1, imagen2, imagen3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textBanner.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [currentIndex, textBanner.length]);

  return (
    <main className="h-auto">
      <section className='relative h-screen flex items-center justify-center w-full overflow-hidden bg-white/30'>
        <Banner images={imagenes} />
        <AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center flex flex-col items-center justify-center max-w-md px-4 sm:max-w-lg md:max-w-4xl slider-reveal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              <SliderHero key={currentIndex} title={textBanner[currentIndex].title} subtitle={textBanner[currentIndex].subtitle} text={textBanner[currentIndex].text} />
            </motion.div>
          </div>
        </AnimatePresence>
      </section>
      <section className='h-auto w-full flex items-center justify-center pt-20 pb-5'>
        <motion.div 
          className='flex flex-col items-center justify-center'
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <motion.h1
            className="text-black text-5xl text-center font-bold leading-10 tracking-wide sm:text-3xl md:text-4xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Browse Our Menu
          </motion.h1>
          <div className='flex items-center justify-center mx-auto max-w-7xl w-full h-full flex-wrap gap-4 mt-10'>
            {categories.map((category) => (
              <CardCategory key={category.id} props={category} />
            ))}
          </div>
        </motion.div>
      </section>
      <section className='h-auto w-full flex flex-col items-center justify-center py-20 mx-auto max-w-5xl'>
        <motion.div 
          className='flex flex-col lg:flex-row items-center justify-center w-full'
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <motion.h1
            className="text-black text-4xl md:text-5xl lg:text-7xl text-center font-bold leading-10 tracking-wide mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Blog & Articles
          </motion.h1>
          <div className='flex items-center justify-center mx-auto max-w-full w-full mt-10 px-4'>
            <CarouselComponent />
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}

export default App;