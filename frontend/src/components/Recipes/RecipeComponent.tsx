import { TypeRecipe } from "../../types/TypeRecipes"
import { CardRecipe } from "../common/Cards/CardRecipe";

interface IRecipeComponent {
  foodRecipes: TypeRecipe;
}

export const RecipeComponent = ({ foodRecipes }: IRecipeComponent) => {

  if (!foodRecipes) {
    return (
      <div>sads</div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-4 gap-6 w-full">
        {
          foodRecipes.recipe.map((recipe) => {
            return <CardRecipe key={recipe.label} recipe={recipe} />
          })
        }
      </div>
    </div>
  )
}
