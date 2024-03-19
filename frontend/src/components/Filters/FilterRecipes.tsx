import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCaretDown } from 'react-icons/fa';
import { CheckBox } from '../common/Checks/CheckBox';
import { categories, diets } from '../../constans/categories';
import { TypeFilters } from '../../types/TypeRecipes';

interface IFilterRecipes {
  getFilters: (data: TypeFilters) => void;
}

export const FilterRecipes = ({ getFilters }: IFilterRecipes) => {

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filters, setFilters] = useState<TypeFilters>({
    calories: {
      from: 0,
      to: 0,
    },
    ingredients: 0,
    fields: []
  });

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  }

  const handleFilterCheckbox = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, dataset } = evt.target
    const name = dataset.name?.toString();
    if (name) {
      setFilters((prevFilters) => {
        if (checked) {
          return { ...prevFilters, fields: [...prevFilters.fields, name] };
        } else {
          return {
            ...prevFilters,
            fields: prevFilters.fields.filter((filter) => filter !== name),
          };
        }
      });
    }
  };

  const handleFilterCalories = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    const parsedValue = parseInt(value, 10);
  
    if (name === 'from') {
      setFilters((prevState) => ({
        ...prevState,
        calories: {
          ...prevState.calories,
          from: parsedValue,
        },
      }));
    } else if (name === 'to') {
      setFilters((prevState) => ({
        ...prevState,
        calories: {
          ...prevState.calories,
          to: parsedValue,
        },
      }));
    } else if (name === 'ingredients') {
      setFilters((prevState) => ({
        ...prevState,
        ingredients: parsedValue,
      }));
    }
  };

  const handleAply = () => {
    getFilters(filters);
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
                        value={filters.calories.from}
                        className="w-full md:w-1/2 h-10 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
                        onChange={handleFilterCalories}
                      />
                    </label>
                    <label htmlFor="to" className='flex items-center text-left gap-2 mt-3'>
                      <span className="text-lg text-black/85 w-20 md:w-12 font-medium">To</span>
                      <input
                        type="number"
                        name="to"
                        id="to"
                        value={filters.calories.to}
                        className="w-full md:w-1/2 h-10 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
                        onChange={handleFilterCalories}
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
                        value={filters.ingredients}
                        className="w-full md:w-1/2 h-10 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
                        onChange={handleFilterCalories}
                      />
                    </label>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full h-ful mt-3 md:mt-0'>
                  <h3 className='mb-3 md:mb-1 text-black font-medium text-xl'>Meals</h3>
                  <div className='w-full grid grid-cols-2 md:grid-cols-1'>
                  {
                    categories.map(({ id, category }) => (
                      <CheckBox key={id} text={category} handleChangeCheckbox={handleFilterCheckbox} />
                    ))
                  }
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full h-full mt-3 md:mt-0'>
                  <h3 className='mb-3 md:mb-1 text-black font-medium text-xl'>Diet</h3>
                  <div className='w-full grid grid-cols-2 md:grid-cols-1'>
                  {
                    diets.map(({ id, diet }) => (
                      <CheckBox key={id} text={diet} handleChangeCheckbox={handleFilterCheckbox} />
                    ))
                  }
                  </div>
                </div>
              </motion.div>
              <div className='mt-2'>
                <button 
                  className='w-full h-12 bg-first text-white rounded-lg py-2 flex items-center justify-center gap-3'
                  onClick={handleAply}
                >
                  <span className='text-white text-lg'>Apply</span>
                </button>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
}
