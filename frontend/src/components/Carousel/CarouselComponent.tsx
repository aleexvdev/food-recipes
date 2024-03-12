import { useState } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../constans/data';
import { Link } from 'react-router-dom';
export const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div key={currentIndex} className='relative w-[600px] h-[430px] flex items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg border border-gray-300'>
      <div className='w-full h-full flex flex-col items-start justify-between'>
        <img 
          src={blogPosts[currentIndex].imageUrl} 
          alt={blogPosts[currentIndex].title} 
          className="w-full h-64 object-cover"
        />
        <div className='p-5 flex flex-col items-start justify-center w-full h-full'>
          <span className='text-md text-gray-600'>{blogPosts[currentIndex].date}</span>
          <h3 className='text-lg font-semibold my-2'>{blogPosts[currentIndex].title}</h3>
          <div className='w-full h-full flex items-center justify-between'>
            <p className="text-gray-900">{blogPosts[currentIndex].description.slice(0, 50) + "..."}</p>
            <Link to={'/blog'}>
              <motion.button
                className="bg-first text-white py-2 px-4 rounded-xl hover:bg-first/85 transition-colors"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.3 }}
              >
                See more
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <button 
        className='absolute top-[50%] left-1 text-white rounded-full bg-first hover:bg-first/80 p-1'
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button 
        className='absolute top-[50%] right-1 text-white rounded-full bg-first hover:bg-first/80 p-1'
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

/* 
<div className="absolute bottom-4 flex space-x-2">
        {blogPosts.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
*/
