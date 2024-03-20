import React from "react";

export type TypeRecipe = {
	count: number;
	from: number;
	to: number;
	next: string | undefined;
	recipe: TypeRecipeDetails[];
}

export type TypeRecipeDetails = {
	// id: string;
	calories: number;
	cuisineType: Array<string>;
	dishType: Array<string>;
	images: {
		large?: { height: number; url: string; width: number };
		regular?: { height: number; url: string; width: number };
		small?: { height: number; url: string; width: number };
	};
	ingredientLines: string[];
	label: string;
	mealType: Array<string>;
	shareAs: string;
	source: string;
	totalTime: number;
	url: string;
	yield: number;
	fats: {
    label: string;
    unit: string;
    total: number;
	};
	carbs: {
    label: string;
    unit: string;
    total: number;
	};
	protein: {
    label: string;
    unit: string;
    total: number;
	};
	tags: string[] | null;
}

export type TypeInitialFoodRecipes = {
	error: boolean | string;
	loading: boolean;
	recipes?: TypeRecipe;
}

export type RecipeReducerAction = 
  | RecipeSearchingAction
	| RecipeFoundAction
	| RecipeErrorAction;

interface RecipeSearchingAction {
	type: 'RECIPE_SEARCHING';
}

interface RecipeFoundAction {
	type: 'RECIPE_FOUND';
	payload: TypeRecipe | undefined;
}

interface RecipeErrorAction {
  type: 'RECIPE_ERROR';
	payload: string;
}

export type TypeRecipeReducer = {
	error: string | boolean;
	loading: boolean;
	recipes?: TypeRecipe;
}

export type TypeFoodRecipesCtx = {
	foodRecipes: TypeRecipeReducer;
	dispatchRecipes: React.Dispatch<RecipeReducerAction>;
}

export type TypeValuesForm = {
  query: string;
  filters: TypeFilters;
}

export type TypeFilters = {
  calories: {
    from: number;
    to: number;
  };
  ingredients: number;
  diets: string[];
  meals: string[];
}
