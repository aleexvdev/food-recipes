import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { fetchRecipeId } from '../service/api';
import { TypeRecipeDetailsId } from '../types/TypeRecipes';
import { Footer } from '../components/common/Footer/Footer';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { LuPrinter } from 'react-icons/lu';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { PiBowlFood, PiForkKnifeFill } from 'react-icons/pi';
import { BiDish } from 'react-icons/bi';
import { TfiWorld } from 'react-icons/tfi';

type TypeRecipeState = {
  success: boolean;
  message: string;
  recipe?: TypeRecipeDetailsId;
}

export const PageRecipesDetails = () => {

  const { id = '' } = useParams<{ id?: string }>();
  const [recipe, setRecipe] = useState<TypeRecipeState>();

  useEffect(() => {
    if (id) {
      const fetchRecipeIdData = async (pid: string) => {
        const response = await fetchRecipeId(pid);
        if (response.success) {
          setRecipe({
            success: true,
            message: response.message,
            recipe: response.recipe
          })
        }
      }
      fetchRecipeIdData(id);
    }
  }, [id]);

  return (
    <main className='h-auto'>
      <section className='h-auto min-h-screen w-full mx-auto max-w-6xl transition-opacity'>
        <div className='w-full h-full flex items-start justify-start pt-32 pb-20'>
          <div className='w-[30%]'>
            <img 
              src={recipe?.recipe?.images.regular?.url} 
              alt={recipe?.recipe?.label}  
              title={recipe?.recipe?.label}  
              className='w-full h-96 object-cover rounded-lg'
            />
          </div>
          <div className='w-[70%] h-full pl-5'>
            <AnimatePresence>
              <div className='flex items-start justify-between'>
                <h1 className='text-5xl banner-title font-bold'>{recipe?.recipe?.label}</h1>
                <div className='flex items-center justify-end gap-3'>
                  <button className="flex items-center justify-center gap-1 rounded-lg bg-first hover:bg-first/90 text-white py-1 px-3">
                    <MdOutlineBookmarkAdd className="w-6 h-6" />
                    <span>Save</span>
                  </button>
                  <button className='flex items-center justify-center gap-1 rounded-lg bg-first hover:bg-first/90 text-white py-1 px-3'>
                    <LuPrinter className='w-6 h-6 text-white' />
                    <span>Print</span>
                  </button>
                </div>
              </div>
              <div className='pt-3 w-full'>
                <Link to={recipe?.recipe?.url ? recipe.recipe.url : '/'} target='_blank'>
                  <span className='w-full'>by <span className='w-full font-medium text-lg'>{recipe?.recipe?.source}</span></span>
                </Link>
              </div>
              <div className='py-5 w-full'>
                <div className='grid grid-cols-3'>
                  <div className='flex flex-col items-center justify-center'>
                    <span className='font-bold text-7xl banner-title'>{recipe?.recipe?.ingredientLines.length}</span>
                    <span className='font-medium'>Ingredients</span>
                  </div>
                  <div className='flex flex-col items-center justify-center border-x-2 border-gray-300'>
                    <span className='font-bold text-7xl banner-title'>{recipe?.recipe?.totalTime}</span>
                    <span className='font-medium'>Minutes</span>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <span className='font-bold text-7xl banner-title'>{recipe?.recipe?.calories.toFixed(0)}</span>
                    <span className='font-medium'>Calories</span>
                  </div>
                </div>
              </div>
              <div className='pt-4 w-full'>
                <div className='w-full flex items-center justify-start gap-3'>
                  <button className='border-2 px-2 rounded-md border-first bg-first/50 hover:bg-first/40 flex items-center justify-center gap-2 h-8'>
                    <TfiWorld className='w-5 h-4' />
                    <span className='text-sm font-medium text-black'>{recipe?.recipe?.cuisineType[0]}</span>
                  </button>
                  <button className='border-2 px-2 rounded-md border-first bg-first/50 hover:bg-first/40 flex items-center justify-center gap-2 h-8'>
                    <BiDish className='w-5 h-5' />
                    <span className='text-sm font-medium text-black'>{recipe?.recipe?.dishType[0]}</span>
                  </button>
                  <button className='border-2 px-2 rounded-md border-first bg-first/50 hover:bg-first/40 flex items-center justify-center gap-2 h-8'>
                    <PiBowlFood className='w-5 h-5' />
                    <span className='text-sm font-medium text-black'>{recipe?.recipe?.mealType[0]}</span>
                  </button>
                </div>
              </div>
              <div className='w-full pt-6 flex items-center justify-between border-b-2 border-gray-300 pb-3'>
                <div className='flex items-center gap-2'>
                  <PiForkKnifeFill className='w-6 h-6 text-black'/>
                  <span className='font-bold text-xl banner-title'>Ingredients</span>
                </div>
                <span className='text-sm'>for {recipe?.recipe?.yield.toFixed(0)} servings</span>
              </div>
              <div className='w-full pt-3 flex flex-col items-center justify-center'>
                {
                  recipe?.recipe?.ingredientLines.map((ingredient, index) => {
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }} 
                        className='w-full h-auto py-1 border-b-0'
                      >
                        <div className='w-full h-full flex items-center justify-start gap-2'>
                          <span className='w-10 h-full flex items-center justify-center'>
                            <IoCheckmarkOutline className='w-6 h-6 text-first' />
                          </span>
                          <span className='w-full text-md font-normal text-black'>
                            {ingredient}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })
                }
              </div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
