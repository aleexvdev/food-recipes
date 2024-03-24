import axios from 'axios';
import { TypeRecipe, TypeValuesForm } from '../types/TypeRecipes';
import { mapperRecipe } from '../lib/mappers/MapperRecipe';

const API_URL = 'https://api.edamam.com/api/recipes/v2';

export const fetchRecipes = async (formData: TypeValuesForm) => {
  try {
    const { query, filters } = formData;
    var calories = "";
    var igr = "";
    var dietsType = "";
    var mealsType = "";

    if (filters.calories.to > 0 && filters.calories.to > 0) {
      calories = "calories="+filters.calories.from+"-"+filters.calories.to+"&";
    }

    if (filters.ingredients > 0) {
      igr = "ingr="+filters.ingredients+"&";
    }

    if (filters.diets.length > 0) {
      filters.diets.map((diet) => dietsType+="diet="+diet+"&")
    }

    if (filters.meals.length > 0) {
      filters.meals.map((meal) => mealsType+="mealType="+meal+"&")
    }

    const response = await axios.get(`${API_URL}?type=public&q=${query}&random=false&${calories}${igr}${mealsType}${dietsType}app_key=${import.meta.env.VITE_APP_KEY}&app_id=${import.meta.env.VITE_APP_ID}&beta=false`);
		if (response.status === 200) {
			const filterRecipe: TypeRecipe = {
				count: response.data.count,
        from: response.data.from,
        to: response.data.to,
        next: response.data['_links'].next?.href,
				recipe: response.data.hits.map((item: any) => mapperRecipe(item.recipe))
			}
			return {
				success: true,
        message: response.statusText,
        recipe: filterRecipe
      }
		}
		return {
      success: false,
      message: response.statusText
    }
  } catch (error) {
		return {
			success: false,
      message: 'Error fetching recipes:', error
		}
  }
}

export const fetchRecipesNext = async (url: string) => {

	try {
    const response = await axios.get(url);
		if (response.status === 200) {
			const filterRecipe: TypeRecipe = {
				count: response.data.count,
        from: response.data.from,
        to: response.data.to,
        next: response.data['_links'].next?.href,
				recipe: response.data.hits.map((item: any) => mapperRecipe(item.recipe))
			}
			return {
				success: true,
        message: response.statusText,
        recipe: filterRecipe
      }
		}
		return {
      success: false,
      message: response.statusText
    }
  } catch (error) {
		return {
			success: false,
      message: 'Error fetching recipes:', error
		}
  }
}
