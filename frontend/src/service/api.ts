import axios from 'axios';
import { TypeRecipe } from '../types/TypeRecipes';
import { mapperRecipe } from '../lib/mappers/MapperRecipe';

const API_URL = 'https://api.edamam.com/api/recipes/v2';

export const fetchRecipes = async (search: string) => {

	const appId = '36e9f9c6';
  const appKey = '70ac2415662bab240cd5e51a585507c4';
	try {
    const response = await axios.get(`${API_URL}?type=public&q=${search}&random=true&app_key=${appKey}&app_id=${appId}&cuisineType=American&beta=false`);
		if (response.status === 200) {
			const filterRecipe: TypeRecipe = {
				count: response.data.count,
        from: response.data.from,
        to: response.data.to,
        next: response.data['_links'].next?.href,
				recipe: response.data.hits.map((item: any) => mapperRecipe(item.recipe))
			}
			console.log(filterRecipe)
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
