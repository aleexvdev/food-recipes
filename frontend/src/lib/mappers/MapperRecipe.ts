export const mapperRecipe = (objectRecipe: any) => ({
	id: objectRecipe.uri.slice(objectRecipe.uri.indexOf('recipe')),
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
	yield: objectRecipe.yield
});