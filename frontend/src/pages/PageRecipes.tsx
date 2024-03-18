import { motion } from 'framer-motion';
import { categories } from '../constans/categories';
import { Button } from '../components/common/Buttons/Button';
import { Input } from '../components/common/Input/Input';
import { useFoodRecipeContext } from '../contexts/ContextRecipe';
import { useEffect } from 'react';
import { fetchRecipes } from '../service/api';
import { RecipeComponent } from '../components/Recipes/RecipeComponent';

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
            <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
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
            className='flex items-center justify-center gap-5 w-full flex-wrap md:flex-nowrap'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          >
            {
              categories.map(({ id, category }) => (
                <Button key={id} text={category} className={'rounded-2xl border px-5 py-1 font-medium w-auto md:min-w-32'} />
              ))
            }
          </motion.div>
        </div>
      </section>
      <section className='h-auto w-full flex items-center justify-center mt-20 mx-auto max-w-6xl mb-10'>
        <RecipeComponent foodRecipes={foodRecipes.recipes} />
      </section>
    </main>
  );
}
