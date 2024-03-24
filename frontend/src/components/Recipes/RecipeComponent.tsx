import { useEffect, useState } from "react";
import { TypeRecipe } from "../../types/TypeRecipes";
import { CardRecipe } from "../common/Cards/CardRecipe";
import { CardSkeleton } from "../common/Skeleton/CardSkeleton";

interface IRecipeComponent {
  foodRecipes?: TypeRecipe;
}

export const RecipeComponent = ({ foodRecipes }: IRecipeComponent) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {[...Array(10)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!foodRecipes) {
    return (
      <div className="w-full h-full pb-10">
        loading..
      </div>
    );
  }

  return (
    <div className="w-full h-full pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {
          foodRecipes.recipe.map((recipe) => {
            return <CardRecipe key={recipe.label} recipe={recipe} />
          })
        }
      </div>
    </div>
  );
}
