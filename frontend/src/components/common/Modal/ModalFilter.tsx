import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { TypeFilters } from "../../../types/TypeRecipes";
import { categories, diets } from "../../../constans/categories";
import { CheckBox } from "../Checks/CheckBox";

interface IModalFilter {
  handleClose: () => void;
  filters: TypeFilters;
  handleFilterCalories: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterCheckbox: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
  handleAply: (filters: TypeFilters) => void;
}

export const ModalFilter = ({ handleClose, filters, handleFilterCalories, handleFilterCheckbox, handleAply, handleReset }: IModalFilter) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 flex z-50 justify-center items-center transition-colors visible bg-black/90 w-full px-2 select-none"
      >
        <div
          className="bg-white h-[80%] md:h-auto rounded-2xl shadow transition-all max-w-md p-1.5 md:max-w-2xl w-full overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 font-bold p-2 border border-neutral-200 rounded-full bg-white hover:bg-gray-300"
            onClick={handleClose}
          >
            <IoCloseOutline className="w-6 h-6 text-first" />
          </button>
          <motion.div
            className="w-full h-auto flex flex-col md:flex-row items-start justify-center py-10 px-5 md:py-5 md:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex md:flex-col items-start justify-start w-full h-full gap-4"
            >
              <div className="w-full flex flex-col items-start justify-start">
                <h3 className="mb-1 text-black font-medium text-xl">
                  Calories
                </h3>
                <label
                  htmlFor="from"
                  className="flex items-center gap-2 mt-3 text-left"
                >
                  <span className="text-lg text-black/85 w-20 md:w-12 font-medium">
                    From
                  </span>
                  <input
                    type="number"
                    name="from"
                    id="from"
                    value={filters.calories.from}
                    className="w-full md:w-1/2 h-10 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
                    onChange={handleFilterCalories}
                  />
                </label>
                <label
                  htmlFor="to"
                  className="flex items-center text-left gap-2 mt-3"
                >
                  <span className="text-lg text-black/85 w-20 md:w-12 font-medium">
                    To
                  </span>
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
              <div className="w-full flex flex-col items-start justify-start">
                <h3 className="mb-1 text-black font-medium text-xl">
                  Ingredients
                </h3>
                <label
                  htmlFor="from"
                  className="flex items-center gap-2 mt-3 text-left"
                >
                  <span className="text-lg text-black/85 w-20 md:w-12 font-medium">
                    Up to
                  </span>
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
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className='flex flex-col items-start justify-start w-full h-ful mt-3 md:mt-0'
            >
              <h3 className='mb-3 md:mb-1 text-black font-medium text-xl'>Meals</h3>
              <div className='w-full grid grid-cols-2 md:grid-cols-1 gap-x-5'>
              {
                categories.map(({ id, category }) => (
                  <CheckBox key={id} type={'meals'} text={category} handleChangeCheckbox={handleFilterCheckbox} />
                ))
              }
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className='flex flex-col items-start justify-start w-full h-full mt-3 md:mt-0'
            >
              <h3 className='mb-3 md:mb-1 text-black font-medium text-xl'>Diet</h3>
              <div className='w-full grid grid-cols-2 md:grid-cols-1'>
              {
                diets.map(({ id, diet }) => (
                  <CheckBox key={id} type={'diets'} text={diet} handleChangeCheckbox={handleFilterCheckbox} />
                ))
              }
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.3 }}
            className='flex w-full items-center justify-center gap-3 pb-5 md:py-5'
          >
            <button 
              className='w-32 h-10 bg-slate-500/80 hover:bg-slate-500/75 text-white rounded-lg py-2 flex items-center justify-center gap-3'
              onClick={handleReset}
              type='submit'
            >
              <span className='text-white text-lg'>Reset</span>
            </button>
            <button 
              className='w-32 h-10 bg-first hover:bg-first/85 text-white rounded-lg py-2 flex items-center justify-center gap-3'
              onClick={() => handleAply(filters)}
              type='submit'
            >
              <span className='text-white text-lg'>Apply</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
