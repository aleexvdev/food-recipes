import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
interface ISliderHero {
  subtitle: string;
  title: string;
  text?: string;
}

export const SliderHero = ({ title, subtitle, text }: ISliderHero) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.span
        className="text-first text-2xl font-bold tracking-wide md:text-3xl mb-4 banner-title slider-reveal opacity-0"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
      >
        {subtitle}
      </motion.span>
      <motion.h1
        className="text-white text-6xl font-bold tracking-wide sm:text-3xl md:text-8xl mb-4 banner-title slider-reveal opacity-0"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-xl sm:text-base md:text-2xl mb-8 font-medium p-5 mt-2 rounded-xl text-white slider-reveal opacity-0"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: 'easeInOut' }}
      >
        {text}
      </motion.p>
      <Link to={'/recipes'}>
        <motion.button
          className="bg-first text-white py-2 px-5 hover:bg-first/85 transition-colors text-2xl md:text-2xl rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
        >
          Explore Recipes
        </motion.button>
      </Link>
    </div>
  );
}
