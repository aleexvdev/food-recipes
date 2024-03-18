import { IoMdExpand } from "react-icons/io";
import { TypeRecipeDetails } from "../../../types/TypeRecipes"
import { MdWatchLater } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";

interface ICardRecipe {
  recipe: TypeRecipeDetails;
}

export const CardRecipe = ({ recipe }: ICardRecipe) => {
  return (
    <div className="w-full h-[280px] rounded-3xl shadow-lg bg-gradient-to-b from-main from-40% to-first">
      <div className="flex flex-col items-start justify-start w-full h-full px-4">
        <div className="relative w-full h-40">
          <img src={recipe.images.regular?.url} alt={recipe.label} className="h-full w-full rounded-2xl object-cover" />
          <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-xl hover:bg-white/85">
            <IoHeart className="text-first w-6 h-6" />
          </button>
        </div>
        <div className="pt-5 text-left h-16 w-full">
          <h3 className="text-md font-semibold mb-1">{recipe.label.length > 50 ? recipe.label.slice(0, 50) + "..." : recipe.label}</h3>
        </div>
        <div className="w-full mt-3 flex items-center justify-between h-10">
          <div className="text-left w-[80%] h-full flex items-center">
            <div className="flex items-center w-full h-full">
              <MdWatchLater className="w-5 h-5" />
              <span className="text-gray-900 text-sm ml-1">{recipe.totalTime} Min.</span>
            </div>
            <div className="flex items-center w-full h-full">
              <PiForkKnifeFill className="w-5 h-5" />
              <span className="text-gray-900 text-sm ml-1">{recipe.mealType[0]}</span>
            </div>
          </div>
          <div className="text-left w-[20%] flex items-center justify-center">
            <button className="w-full h-full flex justify-end">
              <IoMdExpand className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
