import { Dispatch, useEffect, useRef, useState } from 'react';
import { useFoodRecipeContext } from '../contexts/ContextRecipe';
import { fetchRecipes, fetchRecipesNext } from '../service/api';
import { AnimatePresence, motion } from 'framer-motion';
import { GrLinkNext } from 'react-icons/gr';
import { RecipeReducerAction, TypeValuesForm } from '../types/TypeRecipes';
import { FormRecipe } from '../components/common/Form/FormRecipe';
import { RecipeComponent } from '../components/Recipes/RecipeComponent';
import { Footer } from '../components/common/Footer/Footer';
import imagen1 from '../../public/assets/slider-banner/hero-slider-1.jpg';
import imagen2 from '../../public/assets/slider-banner/hero-slider-2.jpg';
import imagen3 from '../../public/assets/slider-banner/hero-slider-3.jpg';
import { ScrollDown } from '../components/ScrollDown';

const imagenes = [imagen1, imagen2, imagen3];

export const PageRecipes = () => {

  const nextSectionRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % imagenes.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, imagenes.length]);

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
  };

  return (
    <main className='h-auto'>
      <section className='flex flex-col items-center justify-center w-full min-h-[100vh] overflow-hidden relative'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              transition: {
                type: "tween",
                duration: 0.5,
                ease: "circOut",
              },
            }}
          >
            <img
              key={imagenes[currentImageIndex]}
              src={imagenes[currentImageIndex]}
              alt="Food Recipes"
              className="w-screen h-screen object-cover banner-bg"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center flex flex-col items-center justify-center max-w-md px-4 sm:max-w-lg md:max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <motion.h1
              className="text-white text-5xl font-bold leading-10 tracking-wide md:text-8xl mb-4 banner-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              Explore Recipes
            </motion.h1>
            <motion.div
              className="text-white text-xl mb-8 font-medium p-5 mt-5 rounded-xl md:text-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <p>Discover a world of flavors, explore a vast collection of recipes, and delight your palate with exquisite dishes.</p>
            </motion.div>
            <div className='mt-6 text-center mx-auto w-full max-w-md px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl'>
              <FormRecipe onSubmitForm={handleFormSubmit} />
            </div>
            <ScrollDown targetRef={nextSectionRef} />
          </motion.div>
        </div>
      </section>
      <section 
        ref={nextSectionRef}
        className='h-auto w-full flex flex-col items-center justify-center mx-auto max-w-6xl py-20 transition-opacity'
      >
        <div className='w-full text-center max-w-md px-4 sm:max-w-lg md:max-w-4xl'>
          <motion.h1
            className="text-black text-5xl font-bold leading-10 tracking-wide md:text-8xl mb-4 banner-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Latest Recipes
          </motion.h1>
        </div>
        <div className='text-center max-w-md px-4 sm:max-w-xl md:max-w-5xl lg:max-w-7xl pt-10'>
          <RecipeComponent foodRecipes={foodRecipes.recipes} />
          <div className='pt-10 w-full flex items-center justify-between px-1'>
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


