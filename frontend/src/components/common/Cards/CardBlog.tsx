import { motion } from "framer-motion"
import { TypeBlogPosts } from '../../../types/typeConstans'
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";

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

export const CardBlog = ({ blog }: ICardBlog) => {

  // const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <motion.div 
      className="w-full mb-10 lg:h-64 lg:max-h-64 rounded-xl shadow-2xl"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full h-full flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-[30%] h-full">
          <motion.img
            src={'https://c.ndtvimg.com/2021-06/pqpb282_pizza_625x300_13_June_21.jpg'}
            alt={blog.title}
            className="w-full h-full rounded-t-lg lg:rounded-l-lg object-cover"
            variants={imgVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
        <div className="w-full lg:w-[70%] h-full p-4">
          <div className="w-full h-full flex flex-col items-center justify-between bg-main">
            <div className="w-full h-full flex-col items-start justify-start">
              <Link to={blog.id}>
                <motion.h3 
                  className="font-semibold text-2xl text-black hover:text-black/85"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {blog.title}
                </motion.h3>
              </Link>
              <motion.div 
                className="w-full py-2 flex items-center justify-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <Link to={blog.url} target="_blank">
                  <span className="text-sm text-gray-500 hover:text-gray-700">By {blog.author}</span>
                </Link>
                <span className="text-sm text-gray-500">{blog.date}</span>
              </motion.div>
              <motion.p 
                className="text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              >
                {blog.description}
              </motion.p>
            </div>
            <motion.div 
              className="w-full h-full flex items-center justify-between pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Link
                to={blog.id}
              >
                <button className="w-full h-full bg-first text-white py-2 px-4 flex items-center justify-center gap-3 rounded-lg hover:bg-first/85 transition-colors">
                  <span className="text-base">READ MORE</span>
                  <MdOutlineArrowRightAlt className="w-6 h-6" />
                </button>
              </Link>
              <div className="w-20 h-full flex items-center justify-end">
                <button className="rounded-full bg-transparent p-2 hover:bg-gray-300/50">
                  <RiShareForwardLine className="w-6 h-6 text-first" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
