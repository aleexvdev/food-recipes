import { AnimatePresence, motion } from 'framer-motion'
import { Banner } from "../components/common/Banner/Banner"
import imagen1 from "../../public/assets/slider-banner/banner-blog.jpg"
import imagen2 from "../../public/assets/slider-banner/banner-blog-1.jpg"

const imagenes = [imagen1, imagen2];

export const PageBlogs = () => {
  return (
    <main className="h-auto">
      <section className="relative h-screen">
        <Banner images={imagenes} />
        <AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center flex flex-col items-center justify-center max-w-md px-4 sm:max-w-lg md:max-w-3xl bg-black/90 rounded-xl py-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <motion.h1
                className="text-first text-5xl font-bold leading-10 tracking-wide md:text-8xl mb-4 banner-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                Blog & Articles
              </motion.h1>
              <motion.div
                className="text-white text-xl font-medium p-5 mt-5 rounded-xl md:text-2xl"
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
    </main>
  )
}
