export const mapperRecipe = (objectRecipe: any) => ({
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