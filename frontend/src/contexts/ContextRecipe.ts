import { createContext, useContext } from "react";
import { TypeFoodRecipesCtx } from "../types/TypeRecipes";

export const FoodRecipesContext = createContext<TypeFoodRecipesCtx>({} as TypeFoodRecipesCtx);

export const useFoodRecipeContext = () => useContext(FoodRecipesContext);