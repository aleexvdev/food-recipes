import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from './constans/categories';
import { CardCategory } from './components/common/Cards/CardCategory';
import { Footer } from './components/common/Footer/Footer';
// import { CarouselComponent } from './components/Carousel/CarouselComponent';
import imagen1 from '../public/assets/slider-banner/hero-slider-1.jpg';
import imagen2 from '../public/assets/slider-banner/hero-slider-2.jpg';
import imagen3 from '../public/assets/slider-banner/hero-slider-3.jpg';
import { fadeIn } from './constans/motionVars';
import { textBanner } from './constans/constans';

function App() {

  const controls = useAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagenes = [imagen1, imagen2, imagen3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % imagenes.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, imagenes.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0 },
      }).then(() =>
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeInOut', delay: 0.4 },
        })
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [controls]);

  /* return (
    <main className="h-auto">
      <section className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-white/30">
        <Banner />
        <motion.div
          className="text-center flex flex-col items-center justify-center max-w-md px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-black text-6xl font-bold tracking-wide sm:text-3xl md:text-7xl mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Healthy Food Recipes
          </motion.h1>
          <motion.div
            className="text-xl sm:text-base md:text-2xl mb-8 font-medium p-5 mt-5 rounded-xl bg-white/50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          </motion.div>
          <Link to={'/recipes'}>
            <motion.button
              className="bg-first text-white py-2 px-5 rounded-xl hover:bg-first/85 transition-colors text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              Explore Recipes
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <section data-aos="zoom-in-up" className='h-auto w-full flex items-center justify-center pt-20'>
        <div className='flex flex-col items-center justify-center'>
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
        </div>
      </section>
      <section data-aos="zoom-in-right" className='h-auto w-full flex flex-col items-center justify-center mt-20 mx-auto max-w-5xl'>
        <div className='flex flex-col lg:flex-row items-center justify-center w-full'>
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
        </div>
      </section>
      <Footer />
    </main>
  ); */

  return (
    <main className="h-auto">
      <section className='relative h-screen flex items-center justify-center w-full overflow-hidden bg-white/30'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              transition: {
                type: "tween",
                duration: 0.5,
                ease: "circOut",
              },
            }}
          >
            <img
              key={imagenes[currentImageIndex]}
              src={imagenes[currentImageIndex]}
              alt="Food Recipes"
              className="w-screen h-screen object-cover banner-bg"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center flex flex-col items-center justify-center max-w-md px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <motion.h1
              key={textBanner[currentImageIndex]}
              className="text-white text-6xl font-medium tracking-wide sm:text-3xl md:text-8xl mb-4 banner-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            >
              {textBanner[currentImageIndex]}
            </motion.h1>
            <motion.div
              className="text-xl sm:text-base md:text-2xl mb-8 font-medium p-5 mt-2 rounded-xl text-white"
              animate={controls}
            >
              <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            </motion.div>
            <Link to={'/recipes'}>
              <motion.button
                className="bg-first text-white py-2 px-5 hover:bg-first/85 transition-colors text-2xl md:text-2xl"
                animate={controls}
              >
                Explore Recipes
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <section className='h-auto w-full flex items-center justify-center pt-20'>
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
      <Footer />
    </main>
  );
}

export default App;