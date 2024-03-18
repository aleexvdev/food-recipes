import { RecipeReducerAction, TypeInitialFoodRecipes } from "../types/TypeRecipes";

export const INITIAL_FOOD_RECIPES: TypeInitialFoodRecipes = {
  error: false,
  loading: false,
  recipes: undefined
}

export const recipeReducer = (state: TypeInitialFoodRecipes, action: RecipeReducerAction): TypeInitialFoodRecipes  => {
  switch (action.type) {
    case 'RECIPE_SEARCHING':
      return {
        ...state,
        loading: true,
        error: false,
        recipes: undefined
      }
    case 'RECIPE_FOUND':
      return {
        ...state,
        loading: false,
        error: false,
        recipes: action.payload
      }
    case 'RECIPE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        recipes: undefined
      }
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}