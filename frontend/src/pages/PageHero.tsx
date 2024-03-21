import { useReducer } from 'react'
import { INITIAL_FOOD_RECIPES, recipeReducer } from '../reducers/recipesReducer'
import { FoodRecipesContext } from '../contexts/ContextRecipe'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router'
import { AnimatedOutlet } from '../components/AnimatedOutlet'
import { Header } from '../components/common/Header/Header'

export const PageHero = () => {

  const [foodRecipes, dispatchRecipes] = useReducer(recipeReducer, INITIAL_FOOD_RECIPES);
	const location = useLocation();

  return (
    <div className='relative'>
      <Header />
      <FoodRecipesContext.Provider value={{ foodRecipes, dispatchRecipes }}>
        <AnimatePresence mode='popLayout'>
					<motion.div
						key={location.pathname}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1 } }}
						exit={{ opacity: 0, transition: { duration: 0.4 } }}
					>
						<AnimatedOutlet />
					</motion.div>
				</AnimatePresence>
      </FoodRecipesContext.Provider>
    </div>
  )
}
