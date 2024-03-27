import { motion } from "framer-motion"
import { TypeBlogPosts } from '../../../types/typeConstans'
import { Link } from "react-router-dom";

interface ICardBlog {
  blog: TypeBlogPosts;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imgVariants = {
  hidden: { scale: 0.8 },
  visible: { scale: 1, transition: { duration: 0.5 } },
};

export const CardBlogDetails = ({ blog }: ICardBlog) => {
  // const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <motion.div 
      className="w-full h-[130px] md:h-[150px] max-h-[130px] md:max-h-[150px] lg:h-[150px] lg:max-h-[130px] rounded-xl shadow-2xl bg-main"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full h-full flex items-start justify-start">
        <motion.img
          src={'https://c.ndtvimg.com/2021-06/pqpb282_pizza_625x300_13_June_21.jpg'}
          alt={blog.title}
          className="w-[150px] md:w-1/2 h-[130px] md:h-[150px] lg:w-[150px] lg:h-[130px] rounded-l-xl object-cover"
          variants={imgVariants}
          initial="hidden"
          animate="visible"
        />
        <div className="w-full h-full px-2 md:px-4 py-4 flex flex-col items-start justify-between">
          <Link to={`/blog/${blog.id}`}>
            <motion.h3 
              className="font-semibold text-lg md:text-3xl lg:text-xl text-black hover:text-first"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {blog.title}
            </motion.h3>
          </Link>
          <div className="h-full w-full flex items-end">
            <motion.p 
              className="text-base text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              {blog.date}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
