import { motion } from 'framer-motion';
import { Banner } from './components/common/Banner/Banner';
import { Link } from 'react-router-dom';
import { categories } from './constans/categories';
import { CardCategory } from './components/common/Cards/CardCategory';
import { Footer } from './components/common/Footer/Footer';
import { CarouselComponent } from './components/Carousel/CarouselComponent';

function App() {

  return (
    <main className="h-auto">
      <section className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-white/30">
        <Banner />
        <motion.div
          className="text-center max-w-md px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-black text-5xl font-bold leading-10 tracking-wide sm:text-3xl md:text-4xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Healthy Food Recipes
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
          </motion.p>
          <Link to={'/recipes'}>
            <motion.button
              className="bg-first text-white py-2 px-4 rounded-xl hover:bg-first/85 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              Explore Recipes
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <section className='h-auto w-full flex items-center justify-center pt-20'>
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
      <section className='h-auto w-full flex items-center justify-center mt-20'>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <motion.h1
              className="text-black text-5xl text-center font-bold leading-10 tracking-wide sm:text-3xl md:text-4xl lg:text-7xl mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              Blog & Articles
            </motion.h1>
          </div>
          <div className='flex items-center justify-center mx-auto max-w-3xl w-full h-full mt-10'>
            <CarouselComponent />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;