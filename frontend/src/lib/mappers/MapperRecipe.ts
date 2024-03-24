import { getRecipeIdFromUrl } from "../../utils/functions";

export const mapperRecipe = (objectRecipe: any) => ({
	calories: objectRecipe.recipe.calories,
	cuisineType: objectRecipe.recipe.cuisineType,
	dishType: objectRecipe.recipe.dishType,
	images: {
		large: objectRecipe.recipe.images['LARGE'] || 'NotFound',
		regular: objectRecipe.recipe.images['REGULAR'] || 'NotFound',
		small: objectRecipe.recipe.images['SMALL'] || 'NotFound'
	},
	ingredientLines: objectRecipe.recipe.ingredientLines,
	label: objectRecipe.recipe.label,
	mealType: objectRecipe.recipe.mealType,
	shareAs: objectRecipe.recipe.shareAs,
	source: objectRecipe.recipe.source.slice(
		0,
		objectRecipe.recipe.source.indexOf('.') > 0
			? objectRecipe.recipe.source.indexOf('.')
			: objectRecipe.recipe.source.length
	),
	totalTime: objectRecipe.recipe.totalTime,
	url: objectRecipe.recipe.url,
	yield: objectRecipe.recipe.yield,
	fats: {
		label: objectRecipe.recipe.digest.find((item: any) => item.label === 'Fat').label,
		unit: objectRecipe.recipe.digest.find((item: any) => item.label === 'Fat').unit,
		total: objectRecipe.recipe.digest.find((item: any) => item.label === 'Fat').total
	},
	carbs: {
		label: objectRecipe.recipe.digest.find((item: any) => item.label === 'Carbs').label,
		unit: objectRecipe.recipe.digest.find((item: any) => item.label === 'Carbs').unit,
		total: objectRecipe.recipe.digest.find((item: any) => item.label === 'Carbs').total
	},
	protein: {
		label: objectRecipe.recipe.digest.find((item: any) => item.label === 'Protein').label,
		unit: objectRecipe.recipe.digest.find((item: any) => item.label === 'Protein').unit,
		total: objectRecipe.recipe.digest.find((item: any) => item.label === 'Protein').total
	},
	tags: objectRecipe.recipe.tags,
	id: getRecipeIdFromUrl(objectRecipe._links.self.href)
});

export const mapperRecipeDetails = (objectRecipe: any) => ({
	calories: objectRecipe.calories,
	cuisineType: objectRecipe.cuisineType,
	dishType: objectRecipe.dishType,
	images: {
		large: objectRecipe.images['LARGE'] || 'NotFound',
		regular: objectRecipe.images['REGULAR'] || 'NotFound',
		small: objectRecipe.images['SMALL'] || 'NotFound'
	},
	ingredientLines: objectRecipe.ingredientLines,
	label: objectRecipe.label,
	mealType: objectRecipe.mealType,
	shareAs: objectRecipe.shareAs,
	source: objectRecipe.source.slice(
		0,
		objectRecipe.source.indexOf('.') > 0
			? objectRecipe.source.indexOf('.')
			: objectRecipe.source.length
	),
	totalTime: objectRecipe.totalTime,
	url: objectRecipe.url,
	yield: objectRecipe.yield,
	fats: {
		label: objectRecipe.digest.find((item: any) => item.label === 'Fat').label,
		unit: objectRecipe.digest.find((item: any) => item.label === 'Fat').unit,
		total: objectRecipe.digest.find((item: any) => item.label === 'Fat').total
	},
	carbs: {
		label: objectRecipe.digest.find((item: any) => item.label === 'Carbs').label,
		unit: objectRecipe.digest.find((item: any) => item.label === 'Carbs').unit,
		total: objectRecipe.digest.find((item: any) => item.label === 'Carbs').total
	},
	protein: {
		label: objectRecipe.digest.find((item: any) => item.label === 'Protein').label,
		unit: objectRecipe.digest.find((item: any) => item.label === 'Protein').unit,
		total: objectRecipe.digest.find((item: any) => item.label === 'Protein').total
	},
	tags: objectRecipe.tags
});