import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeRecipeDetails } from '../../../types/TypeRecipes';
import { IoCheckmarkOutline, IoCloseOutline, IoHeart } from 'react-icons/io5';
import { roundedDecimal, truncateLabel } from '../../../utils/functions';
import { PiForkKnifeFill, PiTimerFill } from 'react-icons/pi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { LuPrinter, LuUser2 } from 'react-icons/lu';
import { FaCaretDown, FaTag } from 'react-icons/fa';
import { FaBowlFood } from 'react-icons/fa6';
import { BiWorld } from 'react-icons/bi';

interface IModalRecipe {
  handleClose: () => void;
  recipe: TypeRecipeDetails;
};

export const ModalRecipe = ({ handleClose, recipe }: IModalRecipe) => {

  const [isActiveInfo, setIsActiveInfo] = useState<boolean>(true);
  const [isActiveIngr, setIsActiveIngr] = useState<boolean>(false);
  const [isActiveNutr, setIsActiveNutr] = useState<boolean>(false);

  const handleActiveInfo = () => {
    setIsActiveInfo(!isActiveInfo);
    if (!isActiveInfo) {
      setIsActiveIngr(false);
      setIsActiveNutr(false);
    }
  }
  
  const handleActiveIngr = () => {
    setIsActiveIngr(!isActiveIngr);
    if (!isActiveIngr) {
      setIsActiveInfo(false);
      setIsActiveNutr(false);
    } else {
      setIsActiveInfo(false);
      setIsActiveNutr(false);
    }
  }
  
  const handleActiveNutr = () => {
    setIsActiveNutr(!isActiveNutr);
    if (!isActiveNutr) {
      setIsActiveInfo(false);
      setIsActiveIngr(false);
    } else {
      setIsActiveInfo(false);
      setIsActiveIngr(false);
    }
  }

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='fixed inset-0 flex z-50 justify-center items-center transition-colors visible bg-black/90 w-full px-2'
      >
        <div className='bg-white h-[75%] md:h-auto rounded-2xl shadow transition-all max-w-md p-1.5 sm:max-w-xl md:max-w-5xl lg:max-w-7x w-full' onClick={(e) => e.stopPropagation()}>
          <button 
            className='absolute top-2 right-2 font-bold p-2 border border-neutral-200 rounded-md bg-white hover:bg-gray-300'
            onClick={handleClose}
          >
            <IoCloseOutline className='w-6 h-6 text-black' />
          </button>
          <div className='w-full h-auto min-h-20 md:min-h-[600px] border-white bg-first/50 rounded-2xl p-2 max-h-full overflow-y-scroll'>
            <div className='w-full h-full flex flex-col items-start justify-start px-5 py-8'>
              <h1 className='title font-bold text-2xl md:text-4xl w-full text-left'>{recipe.label}</h1>
              <div className='w-full h-full flex flex-col md:flex-row items-start'>
                <div className='w-full md:w-[60%] h-full flex flex-col items-start'>
                  <div className='mt-5 w-full text-left pt-4'>
                    <button 
                      type='button'
                      className='w-full md:w-[80%] border-b-2 border-first px-2 py-1 mb-3'
                      onClick={handleActiveInfo}
                    >
                      <div className='w-full flex items-center justify-between'>
                        <span className='title text-black text-2xl'>Information</span>
                        <motion.div
                          animate={{ rotate: isActiveInfo ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaCaretDown className='w-8 h-8 text-first' />
                        </motion.div>
                      </div>
                    </button>
                    <div className='w-full md:w-[80%] h-full'>
                      <AnimatePresence>
                        {
                          isActiveInfo && 
                          <>
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.5, ease: 'easeInOut' }}
                              className='w-full h-auto flex flex-wrap items-start gap-2 mt-4'
                            >
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }}  
                                className='w-36 h-16 flex items-center justify-center gap-3'
                              >
                                <div className='w-6'>
                                  <HiOutlineExternalLink className='w-6 h-6'/>
                                </div>
                                <div className='w-full flex flex-col items-center justify-center'>
                                  <span className='font-bold text-left w-full tracking-wide'>SEE MORE</span>
                                  <Link 
                                    to={recipe.url}
                                    className='w-full text-left'
                                    target='_blank'
                                  >
                                    <span className='text-gray-900 text-md md:text-md text-left w-full'>{truncateLabel(recipe.source, 10)}</span>
                                  </Link>
                                </div>
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }}  
                                className='w-36 h-16 flex items-center justify-center gap-3'
                              >
                                <div className='w-6'>
                                  <PiTimerFill className='w-6 h-6'/>
                                </div>
                                <div className='w-full flex flex-col items-center justify-center'>
                                  <span className='font-bold text-left w-full tracking-wide'>COOK TIME</span>
                                  <span className='text-gray-900 text-md md:text-md ml-2 md:ml-1 text-left w-full'>{recipe.totalTime} Minutes</span>
                                </div>
                              </motion.div>
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }} 
                                className='w-36 h-16 flex items-center justify-center gap-3'
                              >
                                <div className='w-6'>
                                  <PiForkKnifeFill className='w-6 h-6'/>
                                </div>
                                <div className='w-full flex flex-col items-center justify-center'>
                                  <span className='font-bold text-left w-full tracking-wide'>MEAL TYPE</span>
                                  <span className='text-gray-900 text-md md:text-md ml-2 md:ml-1 text-left w-full'>{recipe.mealType[0]}</span>
                                </div>
                              </motion.div>
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }} 
                                className='w-36 h-16 flex items-center justify-center gap-3'
                              >
                                <div className='w-6'>
                                  <FaBowlFood className='w-6 h-6'/>
                                </div>
                                <div className='w-full flex flex-col items-center justify-center'>
                                  <span className='font-bold text-left w-full tracking-wide'>DISH TYPE</span>
                                  <span className='text-gray-900 text-md md:text-md ml-2 md:ml-1 text-left w-full'>{recipe.dishType[0]}</span>
                                </div>
                              </motion.div>
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }} 
                                className='w-36 h-16 flex items-center justify-center gap-3'
                              >
                                <div className='w-6'>
                                  <LuUser2 className='w-6 h-6'/>
                                </div>
                                <div className='w-full flex flex-col items-center justify-center'>
                                  <span className='font-bold text-left w-full tracking-wide'>MEMBERS</span>
                                  <span className='text-gray-900 text-md md:text-md ml-2 md:ml-1 text-left w-full'>{recipe.yield}</span>
                                </div>
                              </motion.div>
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }} 
                                className='w-36 h-16 flex items-center justify-center gap-3'
                              >
                                <div className='w-6'>
                                  <BiWorld className='w-6 h-6'/>
                                </div>
                                <div className='w-full flex flex-col items-center justify-center'>
                                  <span className='font-bold text-left w-full tracking-wide'>COUNTRY</span>
                                  <span className='text-gray-900 text-md md:text-md ml-2 md:ml-1 text-left w-full'>{recipe.cuisineType[0]}</span>
                                </div>
                              </motion.div>
                            </motion.div>
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.5, ease: 'easeInOut' }}
                              className='mt-2 w-full'
                            >
                            {
                              recipe?.tags &&
                              (
                                <motion.div 
                                  className='w-full h-12 flex items-center justify-center px-1'
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  transition={{ duration: 0.5 }} 
                                >
                                  <div className='w-10'>
                                    <FaTag className='w-6 h-6 rotate-90'/>
                                  </div>
                                  <div className='w-full'>
                                    {
                                      recipe.tags?.map(tag => (
                                        <span className='text-gray-900 text-md md:text-lg font-bold ml-2 md:ml-3 text-left w-full'>#{tag}</span>
                                      ))
                                    }
                                  </div>
                                </motion.div>
                              )
                            }
                            </motion.div>
                          </>
                        }
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className='mt-5 w-full md:w-[80%] text-left pt-3'>
                    <button 
                      type='button'
                      className='w-full border-b-2 border-first  px-2 py-1 mb-3'
                      onClick={handleActiveIngr}
                    >
                      <div className='w-full flex items-center justify-between'>
                        <span className='title text-black text-2xl'>Ingredients</span>
                        <motion.div
                          animate={{ rotate: isActiveIngr ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaCaretDown className='w-8 h-8 text-first' />
                        </motion.div>
                      </div>
                    </button>
                    <div className='w-full'>
                      <AnimatePresence>
                      {
                        isActiveIngr && 
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                          className='h-full md:max-h-44 md:overflow-y-scroll scroll-ingredients'
                        >
                          {
                            recipe.ingredientLines.map((ing, key) => (
                              <motion.div 
                                key={key}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }} 
                                className='w-full h-auto py-1 border-b-2'
                              >
                                <div className='w-full h-full flex items-center justify-start gap-2'>
                                  <span className='w-10 h-full flex items-center justify-center'>
                                    <IoCheckmarkOutline className='w-6 h-6 text-first' />
                                  </span>
                                  <span className='w-full text-md font-medium text-black'>
                                    {ing}
                                  </span>
                                </div>
                              </motion.div>
                            ))
                          }
                        </motion.div>
                      }
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className='w-full md:w-[80%] mt-5 text-left pt-3'>
                    <button 
                      type='button'
                      className='w-full border-b-2 border-first  px-2 py-1 mb-3'
                      onClick={handleActiveNutr}
                    >
                      <div className='w-full flex items-center justify-between'>
                        <span className='title text-black text-2xl'>Nutritional Values</span>
                        <motion.div
                          animate={{ rotate: isActiveNutr ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaCaretDown className='w-8 h-8 text-first' />
                        </motion.div>
                      </div>
                    </button>
                    <div className='w-full'>
                      <AnimatePresence>
                      {
                        isActiveNutr && 
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                          className='h-auto'
                        >
                          <div className='mt-4 flex items-start gap-2'>
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.5 }} 
                              className='bg-white w-24 h-auto p-0.5 rounded-lg'
                            >
                              <div className='bg-first flex flex-col items-center justify-center rounded-lg h-full w-full py-2.5'>
                                <p className='font-bold text-xl'>{roundedDecimal(recipe.calories, 0)}</p>
                                <p className='font-bold text-md md:text-lg text-black'>Calories</p>
                                <p className='text-black/60 font-bold'>Kcal</p>
                              </div>
                            </motion.div>
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.5 }} 
                              className='bg-white w-24 h-auto p-0.5 rounded-lg'
                            >
                              <div className='bg-first flex flex-col items-center justify-center rounded-lg h-full w-full py-2.5'>
                                <p className='font-bold text-xl'>{roundedDecimal(recipe.protein.total, 0)}</p>
                                <p className='font-bold text-md md:text-lg'>Protein</p>
                                <p className='text-black/60 font-bold'>g</p>
                              </div>
                            </motion.div>
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.5 }} 
                              className='bg-white w-24 h-auto p-0.5 rounded-lg'
                            >
                              <div className='bg-first flex flex-col items-center justify-center rounded-lg h-full w-full py-2.5'>
                                <p className='font-bold text-xl'>{roundedDecimal(recipe.fats.total, 0)}</p>
                                <p className='font-bold text-md md:text-lg'>Fats</p>
                                <p className='text-black/60 font-bold'>g</p>
                              </div>
                            </motion.div>
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.5 }} 
                              className='bg-white w-24 h-auto p-0.5 rounded-lg'
                            >
                              <div className='bg-first flex flex-col items-center justify-center rounded-lg h-full w-full py-2.5'>
                                <p className='font-bold text-xl'>{roundedDecimal(recipe.carbs.total, 0)}</p>
                                <p className='font-bold text-md md:text-lg'>Carbs</p>
                                <p className='text-black/60 font-bold'>g</p>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      }
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-[40%] h-full flex mt-5 md:mt-0'>
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className='py-5 w-full flex items-center justify-end gap-2'>
                      <button className='bg-first p-2 rounded-lg hover:bg-first/85'>
                        <LuPrinter className='w-6 h-6 text-white' />
                      </button>
                      <button className='bg-first p-2 rounded-lg hover:bg-first/85'>
                        <IoHeart className='w-6 h-6 text-white' />
                      </button>
                    </div>
                    <img src={recipe.images.regular?.url} className='w-full h-full rounded-2xl shadow-xl' alt={recipe.label} title={recipe.label} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
