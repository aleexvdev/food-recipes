import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from "react-router";
import { TypeBlogPosts } from "../types/typeConstans";
import { fetchBlogs } from "../service/api";
import { Footer } from "../components/common/Footer/Footer";
import { blogPosts } from "../constans/data";
import { CardBlogDetails } from "../components/common/Cards/CardBlogDetails";
import { IoSend } from "react-icons/io5";
import { formatDate } from "../utils/functions";
import { IoMdShare } from "react-icons/io";
import { CardShareBlog } from "../components/common/Cards/CardShareBlog";

type TypeBlogState = {
  success: boolean;
  message: string;
  blog?: TypeBlogPosts;
}

export const PageBlogsDetails = () => {

  const { id = '' } = useParams<{ id?: string }>();
  const [blog, setBlog] = useState<TypeBlogState>();
  const [valueName, setValueName] = useState('');
  const [valueComment, setValueComment] = useState('');
  const [isFocusedName, setIsFocusedName] = useState<boolean>(false);
  const [isFocusedComment, setIsFocusedComment] = useState<boolean>(false);
  const [activeShare, setActiveShare] = useState<boolean>(false);

  useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

  useEffect(() => {
    if (id) {
      const fetchBlogsIdData = async (pid: string) => {
        const response = await fetchBlogs(pid);
        if (response) {
          setBlog({
            success: true,
            message: response.message,
            blog: response?.blogs
          })
        }
      }
      fetchBlogsIdData(id);
    }
  }, [id]);

  const handleFocusName = () => {
    setIsFocusedName(true);
  };

  const handleBlurName = () => {
    
    if (valueName.trim() === '') {
      setIsFocusedName(false);
    }
  };

  const handleFocusComment = () => {
    setIsFocusedComment(true);
  };

  const handleBlurComment = () => {
    if (valueComment.trim() === '') {
      setIsFocusedComment(false);
    }
  };

  const handleActiveShare = () => {
    setActiveShare(!activeShare);
  }


  const labelAnimationName = {
    initial: { top: '50%', left: '1.4rem', transform: 'translateY(-50%)', opacity: 1 },
    animate: { top: '-0.6rem', left: '1.1rem', transform: 'translateY(0)', opacity: 1 },
  };
  const labelAnimationComment = {
    initial: { top: '25%', left: '1.4rem', transform: 'translateY(-50%)', opacity: 1 },
    animate: { top: '-0.6rem', left: '1.1rem', transform: 'translateY(0)', opacity: 1 },
  };
  const validateNameAnimation = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
  };
  const validateCommentAnimation = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
  };

  const filteredBlogPosts = blogPosts.filter(post => post.id !== id);
  const limitedBlogPosts = filteredBlogPosts.slice(0, 3);

  return (
    <main className="h-auto">
      <section className="relative h-[400px] sm:h-[500px]">
        <img 
          src={blog?.blog?.imageUrl} 
          alt={blog?.blog?.title}  
          title={blog?.blog?.title}  
          className='absolute h-[400px] w-screen object-cover sm:h-[500px] z-1'
        />
        <div className="absolute w-full bottom-[-50px] left-1/2 transform -translate-x-1/2 transition-opacity mx-auto max-w-7xl px-2 md:px-5 lg:px-10">
          <div className="bg-first rounded-xl pl-2 shadow-2xl relative">
            <div className="w-full px-10 py-8 bg-white rounded-xl">
              <span className="text-black text-3xl font-semibold title">F<span className="text-first">oo</span>dy Blogs</span>
              <h1 className="text-4xl md:text-5xl banner-title font-bold pt-3">
                {blog?.blog?.title}
              </h1>
            </div>
            <div className="absolute top-6 right-3">
              <button 
                className={`rounded-full p-2 hover:bg-first/30 ${activeShare ? 'bg-first/30' : 'bg-transparent'} relative w-10`}
                onClick={handleActiveShare}
              >
                <IoMdShare className="w-6 h-6 text-first" />
              </button>
              {
                activeShare && (
                  <div className="absolute -bottom-2 -left-52">
                    <CardShareBlog />
                  </div>
                )
              }
            </div>            
          </div>
        </div>
      </section>
      <section className="h-auto min-h-screen w-full mx-auto max-w-6xl transition-opacity pt-24 mb-20">
        
        <div className="flex flex-col lg:flex-row items-start justify-start gap-3 w-full h-full">
          <div className="w-full lg:w-[60%] h-full">
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-5 md:px-8 lg:px-0">
              <span className="text-[17px] text-gray-500">Author: Alor Alexander</span>
              <span className="text-[17px] text-gray-500">{blog?.blog?.date && formatDate(blog?.blog?.date)}</span>
            </div>
            <AnimatePresence>
              <div className="w-full h-auto min-h-56 px-5 md:px-8 lg:px-0">
                {
                  blog?.blog?.content?.map((blog) => (
                    <p className="py-2 text-lg md:text-xl">{blog}</p>
                  ))
                }
              </div>
            </AnimatePresence>
            <div className="w-full h-full">
              <div className="w-full my-5 md:px-8 lg:px-0 px-5">
                <h3 className="text-4xl md:text-5xl py-5 text-black font-semibold">Leave a comment!</h3>
                <form>
                  <div className="flex flex-col w-full items-start justify-start">
                    <div className="w-full py-5">
                      <div className="w-full rounded-l-lg rounded-r-xl bg-first h-12 pl-1 relative shadow-xl">
                        <input
                          type="text"
                          className="w-full h-12 rounded-lg bg-white outline-none relative px-5 text-xl"
                          name="name"
                          id="name"
                          value={valueName}
                          onChange={ (e) => e.target.value.trim().length <= 16 && setValueName(e.target.value)}
                          onFocus={handleFocusName}
                          onBlur={handleBlurName}
                        />
                        <motion.span
                          className={`absolute pointer-events-none ${isFocusedName ? 'text-first bg-white px-2 rounded-lg text-sm' : 'text-gray-500 text-base'}`}
                          initial="initial"
                          animate={isFocusedName || valueName.trim() !== '' ? 'animate' : 'initial'}
                          variants={labelAnimationName}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                        >
                          Name
                        </motion.span>
                      </div>
                      <AnimatePresence>
                        {valueName.trim().length > 0 && (
                          <motion.div
                            className="w-full pt-2"
                            variants={validateNameAnimation}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            <span className="text-red-600 font-medium">** Between 4 and 16 characters</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="w-full pt-2">
                      <div className="w-full h-32 rounded-l-lg rounded-r-xl bg-first pl-1 relative shadow-xl">
                        <textarea
                          id="comment"
                          cols={20}
                          rows={3}
                          className="ext-xl w-full min-h-32 resize-none rounded-lg px-5 py-4 placeholder-transparent outline-none transition-all focus:border-b-red"
                          value={valueComment}
                          onChange={(e) => e.target.value.trim().length <= 150 && setValueComment(e.target.value)}
                          onFocus={handleFocusComment}
                          onBlur={handleBlurComment}
                        />
                        <motion.span
                          className={`absolute pointer-events-none ${isFocusedComment ? 'text-first bg-white px-2 rounded-lg text-sm' : 'text-gray-500 text-base'}`}
                          initial="initial"
                          animate={isFocusedComment || valueComment.trim() !== '' ? 'animate' : 'initial'}
                          variants={labelAnimationComment}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                        >
                          Comment
                        </motion.span>
                      </div>
                      <AnimatePresence>
                        {valueComment.trim().length > 0 && (
                          <motion.div
                            className="w-full pt-2"
                            variants={validateCommentAnimation}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            <span className="text-red-600 font-medium">** Between 5 and 150 characters</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button type="submit" className="bg-first hover:bg-first/85 px-4 rounded-lg py-1 flex items-center justify-center gap-3">
                      <span className="text-white text-xl">Post Comment</span>
                      <IoSend className="w-6 h-6 text-white" />
                    </button>
                  </div>
                  </form>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] h-auto px-5 md:px-8">
            <h3 className="pb-4 text-4xl md:text-5xl font-semibold banner-title">Latest Post</h3>
            <div className="w-full h-full flex flex-col items-center justify-center gap-5">
            {
              limitedBlogPosts.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  className="w-full"
                >
                  <CardBlogDetails key={index} blog={item} />
                </motion.div>
              ))
            }
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );

}
