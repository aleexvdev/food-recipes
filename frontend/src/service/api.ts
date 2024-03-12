// import axios, { AxiosResponse } from 'axios';
// import { mapperRecipe } from '../lib/mappers/mapperRecipe';
// import { RecipeType } from '../types/TypeRecipes';

export const getRandomRecipes = async (url: string) => {
  console.log(url)
  /* try {
    const response: AxiosResponse = await axios.get(url);
    if (response.status === 200) {
      const filterRecipes: RecipeType = {
				count: response.data.count,
				from: response.data.from,
				to: response.data.to,
				next: response.data._links.next.href,
				recipe: response.data.hits.map((item: any) => mapperRecipe(item.recipe))
			};
			return { 
        success: true, 
        message: 
        response.statusText, 
        filterRecipes 
      }
    } else {
      return { 
        success: false, 
        message: response.statusText 
      }
    }
    return { 
      success: false,
      message: response.statusText 
    };
  } catch (error) {
    return { 
      success: false, 
      message: `Something went wrong, ${error}` 
    }
  } */
}