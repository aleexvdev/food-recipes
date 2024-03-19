import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaCaretDown } from 'react-icons/fa'
import { CheckBox } from '../common/Checks/CheckBox'
import { categories, diets } from '../../constans/categories'

export const FilterRecipes = () => {

  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  }

  return (
    <div className='pt-1 w-full h-auto'>
      <button 
        className='bg-first w-full rounded-lg py-2 flex items-center justify-center gap-3'
        onClick={handleShowFilter}
      >
        <span className='text-white text-lg'>Filter your search by...</span>
        <motion.div
          animate={{ rotate: showFilter ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaCaretDown className='w-7 h-7 text-white' />
        </motion.div>
      </button>
      <AnimatePresence>
        {
          showFilter && (
            <motion.div
              className='mt-4 w-full h-auto bg-white px-5 py-5 rounded-lg transition-colors border-gray-400 border-2 shadow-xl'
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              <motion.div 
                className='w-full h-auto flex flex-col md:flex-row items-start justify-between'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <div className='flex flex-col items-center justify-start w-full h-full'>
                  <div className='w-full flex flex-col items-start'>
                    <h3 className='mb-1 text-black font-medium text-xl'>Calories</h3>
                    <label htmlFor="from" className='flex items-center gap-2 mt-3 text-left'>
                      <span className="text-lg text-black/85 w-20 md:w-12 font-medium">From</span>
                      <input
                        type="number"
                        name="from"
                        id="from"
                        className="w-full md:w-1/2 h-10 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
                      />
                    </label>
                    <label htmlFor="to" className='flex items-center text-left gap-2 mt-3'>
                      <span className="text-lg text-black/85 w-20 md:w-12 font-medium">To</span>
                      <input
                        type="number"
                        name="to"
                        id="to"
                        className="w-full md:w-1/2 h-10 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
                      />
                    </label>
                  </div>
                  <div className='w-full flex flex-col items-start mt-2'>
                    <h3 className='mb-1 text-black font-medium text-xl'>Ingredients</h3>
                    <label htmlFor="from" className='flex items-center gap-2 mt-3 text-left'>
                      <span className="text-lg text-black/85 w-20 md:w-12 font-medium">Up to</span>
                      <input
                        type="number"
                        name="ingredients"
                        id="ingredients"
                        className="w-full md:w-1/2 h-10 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
                      />
                    </label>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full h-ful mt-3 md:mt-0'>
                  <h3 className='mb-3 md:mb-1 text-black font-medium text-xl'>Meals</h3>
                  <div className='w-full grid grid-cols-2 md:grid-cols-1'>
                  {
                    categories.map(({ id, category }) => (
                      <CheckBox key={id} text={category} />
                    ))
                  }
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full h-full mt-3 md:mt-0'>
                  <h3 className='mb-3 md:mb-1 text-black font-medium text-xl'>Diet</h3>
                  <div className='w-full grid grid-cols-2 md:grid-cols-1'>
                  {
                    diets.map(({ id, diet }) => (
                      <CheckBox key={id} text={diet} />
                    ))
                  }
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
}
