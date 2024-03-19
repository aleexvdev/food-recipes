import { motion } from 'framer-motion';
import { Input } from '../components/common/Input/Input';
import { useFoodRecipeContext } from '../contexts/ContextRecipe';
import { useEffect } from 'react';
import { fetchRecipes } from '../service/api';
import { RecipeComponent } from '../components/Recipes/RecipeComponent';
import { Footer } from '../components/common/Footer/Footer';
import { GrLinkNext } from 'react-icons/gr';
import { FilterRecipes } from '../components/Filters/FilterRecipes';

export const PageRecipes = () => {

  const { foodRecipes, dispatchRecipes } = useFoodRecipeContext();

  useEffect(() => {
    const fetchData = async () => {
      dispatchRecipes({
        type: 'RECIPE_SEARCHING'
      });
      try {
        const response = await fetchRecipes('ceviche');
        dispatchRecipes({
          type: 'RECIPE_FOUND',
          payload: response.recipe
        })
      } catch (error) {
        dispatchRecipes({
          type: 'RECIPE_ERROR',
          payload: 'error.message'
        })
      }
    }
    fetchData();
  }, []);

  return (
    <main className='h-auto'>
      <section className='mt-32 flex flex-col items-center justify-center w-full h-auto overflow-hidden bg-white/30'>
        <div className='text-center max-w-md px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl'>
          <motion.h1
            className="text-black text-5xl font-bold leading-10 tracking-wide sm:text-6xl md:text-6xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Explore Recipes
          </motion.h1>
          <motion.div
            className="text-xl  mb-8 font-medium p-5 mt-5 rounded-xl bg-white/50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <p>Discover a world of flavors, explore a vast collection of recipes, and delight your palate with exquisite dishes.</p>
          </motion.div>
        </div>
        <div className='mt-6 text-center mx-auto w-full max-w-md px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl'>
          <motion.div 
            className='w-full mb-10'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          >
            <Input key={'search'} placeholder={'Find your favorite recipe...'} />
          </motion.div>
          <motion.div 
            className='flex items-center justify-center w-full h-full'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
          >
            <FilterRecipes />
          </motion.div>
        </div>
      </section>
      <section className='h-auto w-full flex flex-col items-center justify-center pt-20 mx-auto max-w-6xl mb-10 transition-opacity'>
        <div className='text-center max-w-md px-4 sm:max-w-xl md:max-w-5xl lg:max-w-7xl'>
          <RecipeComponent foodRecipes={foodRecipes.recipes} />
          <div className='py-10 w-full flex items-center justify-between px-1'>
            {
              !foodRecipes.loading && foodRecipes?.recipes?.next ? (
                <>
                  <div className='flex-shrink-0'>
                    <span className='font-bold'>{foodRecipes?.recipes?.to} / {foodRecipes?.recipes?.from} of {foodRecipes?.recipes?.count}</span>
                  </div>
                  <button 
                    className='flex items-center justify-between bg-first rounded-lg space-x-2 px-5 py-1 hover:bg-first/85'
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 1000);
                    }}
                  >
                    <span className='font-medium text-white text-lg'>Next</span>
                    <GrLinkNext className='text-white w-5 h-5' />
                  </button>
                </>
              ) : (
                <div></div>
              )
            }
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
