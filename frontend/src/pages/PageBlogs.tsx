import { AnimatePresence, motion } from 'framer-motion'
import { Banner } from "../components/common/Banner/Banner"
import imagen1 from "../../public/assets/slider-banner/banner-blog.jpg"
import imagen2 from "../../public/assets/slider-banner/banner-blog-1.jpg"
import { BlogComponent } from '../components/Blogs/BlogComponent';
import { blogPosts } from '../constans/data';
import { Footer } from '../components/common/Footer/Footer';
import { BannerBlog } from '../components/common/Banner/BannerBlog';

const imagenes = [imagen1, imagen2];

export const PageBlogs = () => {
  return (
    <main className="h-auto">
      <section className="relative h-screen">
        <Banner images={imagenes} />
        <AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <motion.div
              className="text-center flex flex-col items-center justify-center max-w-md px-4 sm:max-w-lg md:max-w-3xl bg-black/90 rounded-xl py-8 md:py-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <motion.h1
                className="text-first text-6xl font-bold leading-10 tracking-wide md:text-8xl mb-4 banner-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                Foody Blog
              </motion.h1>
              <motion.div
                className="text-white text-2xl font-medium pt-5 rounded-xl md:text-3xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              >
                <p>Discover a world of flavors, explore a vast collection of recipes, and delight your palate with exquisite dishes.</p>
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>
      </section>
      <section className='h-auto w-full flex flex-col items-center justify-center mx-auto max-w-6xl py-20 transition-opacity'>
        <div className='w-full text-center max-w-md px-4 sm:max-w-lg md:max-w-4xl'>
          <motion.h1
            className="text-black text-5xl font-bold leading-10 tracking-wide md:text-8xl mb-4 banner-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Recent Blog Posts
          </motion.h1>
        </div>
        <div className='max-w-md px-4 sm:max-w-xl md:max-w-5xl lg:max-w-7xl pt-10 w-full'>
          <div className="w-full h-full pb-10">
            <div className="w-full h-full flex flex-col gap-5 md:flex-row items-start justify-start">
              <BlogComponent blogPosts={blogPosts} />
              <div className='w-full md:w-80'>
                <BannerBlog />
              </div>
            </div>
            <div className='w-full h-full flex items-center justify-center'>
              <button className="bg-first text-white py-2 px-4 flex items-center justify-center gap-3 rounded-lg hover:bg-first/85 transition-colors">
                <span className='font-medium'>Load more</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
