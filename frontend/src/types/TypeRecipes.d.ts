
export type TypeInitialFoodRecipes = {
	error: boolean,
	loading: boolean,
	recipes?: any[]
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
	payload: any[];
}

interface RecipeErrorAction {
  type: 'RECIPE_ERROR';
	payload: string;
}