import { createContext, useContext } from "react";

export const FoodRecipesContext = createContext({});

export const useFoodRecipeContext = () => useContext(FoodRecipesContext);