import { useRecipeForm } from '../../../hooks/UseForm';
import { motion } from 'framer-motion';
import { Input } from '../Input/Input';
import { TypeValuesForm } from '../../../types/TypeRecipes';
import { FilterRecipes } from '../../Filters/FilterRecipes';

interface IFormRecipe {
  onSubmitForm: (formData: TypeValuesForm) => void;
}

export const FormRecipe = ({ onSubmitForm }: IFormRecipe) => {

  const { value, handleSubmit, onChangeInput, handleFilters } = useRecipeForm(onSubmitForm);

  return (
    <form onSubmit={handleSubmit}>
      <motion.div 
        className='w-full'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
      >
        <Input 
          key={'search'} 
          placeholder={'Find your favorite recipe...'} 
          value={value} 
          onChangeInput={onChangeInput} 
        />
      </motion.div>
      <motion.div 
        className='flex items-center justify-center w-full h-full'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
      >
        <FilterRecipes getFilters={handleFilters} />
      </motion.div>
    </form>
  )
}
