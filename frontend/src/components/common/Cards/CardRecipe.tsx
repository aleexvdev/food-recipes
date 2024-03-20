import { IoMdExpand } from "react-icons/io";
import { TypeRecipeDetails } from "../../../types/TypeRecipes"
import { MdWatchLater } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";
import { useState } from "react";
import { ModalRecipe } from "../Modal/ModalRecipe";

interface ICardRecipe {
  recipe: TypeRecipeDetails;
}

export const CardRecipe = ({ recipe }: ICardRecipe) => {

  const [isModalOpenRecipe, setModalOpenRecipe] = useState<boolean>(false);

  const handleOpenModalRecipe = () => {
    setModalOpenRecipe(true);
  };

  const handleCloseModalRecipe = () => {
    setModalOpenRecipe(false);
  };
  return (
    <>
      <div className="w-full rounded-3xl shadow-lg bg-gradient-to-b from-main from-40% to-first">
        <div className="flex flex-col items-start justify-start w-full h-full px-4 py-4 sm:py-0">
          <div className="relative w-full h-40 sm:h-52">
            <img src={recipe.images.regular?.url} alt={recipe.label} className="h-full w-full rounded-2xl object-cover" />
            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-xl hover:bg-white/85">
              <IoHeart className="text-first w-6 h-6" />
            </button>
          </div>
          <div className="pt-5 text-left w-full h-20">
            <h3 className="text-xl font-semibold mb-1 md:text-lg">{recipe.label.length > 40 ? recipe.label.slice(0, 40) + "..." : recipe.label}</h3>
          </div>
          <div className="w-full mt-3 flex items-start justify-between h-10 pb-2 md:pb-4">
            <div className="text-left w-[80%] flex items-center justify-start h-full">
              <div className="flex items-center mr-4 md:mr-6 lg:mr-2">
                <MdWatchLater className="w-5 h-5" />
                <span className="text-gray-900 text-md md:text-sm ml-2 md:ml-1">{recipe.totalTime} Min.</span>
              </div>
              <div className="flex items-center">
                <PiForkKnifeFill className="w-5 h-5" />
                <span className="text-gray-900 text-md md:text-sm ml-2 md:ml-1">{recipe.mealType[0]}</span>
              </div>
            </div>
            <div className="text-right w-[20%] h-full flex items-center justify-center">
              <button className="w-full h-full flex items-center justify-end" onClick={handleOpenModalRecipe}>
                <IoMdExpand className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpenRecipe && <ModalRecipe handleClose={handleCloseModalRecipe} recipe={recipe} />}
    </>
  );
}
