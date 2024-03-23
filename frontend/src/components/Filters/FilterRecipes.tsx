import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCaretDown } from 'react-icons/fa';
import { TypeFilters } from '../../types/TypeRecipes';
import { ModalFilter } from '../common/Modal/ModalFilter';

interface IFilterRecipes {
  getFilters: (data: TypeFilters) => void;
}

export const FilterRecipes = ({ getFilters }: IFilterRecipes) => {

  const [showModalFilter, setModalShowFilter] = useState<boolean>(false);
  const [filters, setFilters] = useState<TypeFilters>({
    calories: {
      from: 0,
      to: 0,
    },
    ingredients: 0,
    diets: [],
    meals: []
  });

  const handleFilterCheckbox = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name, value } = evt.target;
    if (name === "diets") {
      if (checked) {
        if (!filters.diets.includes(value)) {
          setFilters((prevFilters) => ({
            ...prevFilters,
            diets: [...prevFilters.diets, value],
          }));
        }
      } else {
        if (filters.diets.includes(value)) {
          setFilters((prevFilters) => ({
            ...prevFilters,
            diets: prevFilters.diets.filter((diet) => diet !== value),
          }));
        }
      }
    }
    if (name === "meals") {
      if (checked) {
        if (!filters.meals.includes(value)) {
          setFilters((prevFilters) => ({
            ...prevFilters,
            meals: [...prevFilters.meals, value],
          }));
        }
      } else {
        if (filters.meals.includes(value)) {
          setFilters((prevFilters) => ({
            ...prevFilters,
            meals: prevFilters.meals.filter((meal) => meal !== value),
          }));
        }
      }
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
    setModalShowFilter(false);
  }

  const handleReset = () => {
    setModalShowFilter(false);
    setFilters({
      calories: {
        from: 0,
        to: 0,
      },
      ingredients: 0,
      diets: [],
      meals: []
    });
  }

  const handleShowFilter = () => {
    setModalShowFilter(true);
  }

  const handleClose = () => {
    setModalShowFilter(false);
  }

  return (
    <div className='w-full h-auto'>
      <div className='flex items-center justify-center w-full'>
        <button 
          className='bg-first w-auto rounded-b-lg py-2 flex items-center justify-center gap-3 h-7 px-5'
          onClick={handleShowFilter}
          type='button'
        >
          <span className='text-white text-md'>Filter your search by...</span>
          <motion.div
            animate={{ rotate: showModalFilter ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaCaretDown className='w-7 h-7 text-white' />
          </motion.div>
        </button>
      </div>
        {
          showModalFilter && 
          <ModalFilter
            handleClose={handleClose} 
            filters={filters} 
            handleFilterCalories={handleFilterCalories} 
            handleFilterCheckbox={handleFilterCheckbox} 
            handleReset={handleReset}
            handleAply={handleAply}
          />
        }
    </div>
  );
}