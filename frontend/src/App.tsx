import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Banner } from './components/common/Banner/Banner';
import { Link } from 'react-router-dom';
import { categories } from './constans/categories';
import { CardCategory } from './components/common/Cards/CardCategory';
import { blogPosts } from './constans/data';

function App() {

  const animationControl = useAnimation();
  const [ref, inView] = useInView();

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
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident vitae harum, rem molestias cumque hic
            ullam labore eaque
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
        <div ref={ref} className='flex flex-col items-center justify-center'>
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
        <div className='flex flex-col items-center justify-center'>
          <motion.h1
            className="text-black text-5xl text-center font-bold leading-10 tracking-wide sm:text-3xl md:text-4xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Our Blog & Articles
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;