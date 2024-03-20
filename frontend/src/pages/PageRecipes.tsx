import { Dispatch, useEffect, useState } from 'react';
import { useFoodRecipeContext } from '../contexts/ContextRecipe';
import { fetchRecipes, fetchRecipesNext } from '../service/api';
import { motion } from 'framer-motion';
import { GrLinkNext } from 'react-icons/gr';
import { RecipeReducerAction, TypeValuesForm } from '../types/TypeRecipes';
import { FormRecipe } from '../components/common/Form/FormRecipe';
import { RecipeComponent } from '../components/Recipes/RecipeComponent';
import { Footer } from '../components/common/Footer/Footer';

export const PageRecipes = () => {

  const { foodRecipes, dispatchRecipes } = useFoodRecipeContext();
  const [formValues, setFormValues] = useState<TypeValuesForm>({
    query: 'ceviche',
    filters: {
      calories: {
        from: 0,
        to: 0
      },
      ingredients: 0,
      diets: [],
      meals: []
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatchRecipes({
        type: 'RECIPE_SEARCHING'
      });
      loadFoodRecipes(dispatchRecipes);
    }
    fetchData();
  }, [formValues]);

  const loadFoodRecipes = async (dispatchRecipes: Dispatch<RecipeReducerAction>) => {
    const response = await fetchRecipes(formValues);
    try {
      dispatchRecipes({
        type: 'RECIPE_FOUND',
        payload: response.recipe
      })
    } catch (error) {
      dispatchRecipes({
        type: 'RECIPE_ERROR',
        payload: response.message
      })
    }
  };

  const nextPageFoodRecipe = async (dispatchRecipes: Dispatch<RecipeReducerAction>, url?: string) => {
    const response = await fetchRecipesNext(url || 'https');
    try {
      dispatchRecipes({
        type: 'RECIPE_FOUND',
        payload: response.recipe
      })
    } catch (error) {
      dispatchRecipes({
        type: 'RECIPE_ERROR',
        payload: response.message
      })
    }
  };

  const handleFormSubmit = (formData: TypeValuesForm) => {
    setFormValues(formData);
    console.log(formData)
    console.log(formValues)
  };

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
          <FormRecipe onSubmitForm={handleFormSubmit} />
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
                      nextPageFoodRecipe(dispatchRecipes, foodRecipes?.recipes?.next)
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


