import { useReducer } from 'react'
import NavBar from '../components/common/NavBar/NavBar'
import { FoodRecipesContext } from '../contexts/ContextRecipe'
import { AnimatedOutlet } from '../components/AnimatedOutlet'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router'

export const PageHero = () => {

  // const [foodRecipes, dispatchRecipes] = useReducer({});
	const location = useLocation();

  return (
    <div className='relative'>
      <NavBar />
      <FoodRecipesContext.Provider value={{  }}>
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
