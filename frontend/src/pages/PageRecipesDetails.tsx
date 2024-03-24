import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipeId } from '../service/api';
import { TypeRecipeDetailsId } from '../types/TypeRecipes';

type TypeRecipeState = {
  success: boolean;
  message: string;
  recipe?: TypeRecipeDetailsId;
}

export const PageRecipesDetails = () => {

  const { id = '' } = useParams<{ id?: string }>();
  const [recipe, setRecipe] = useState<TypeRecipeState>();

  useEffect(() => {
    if (id) {
      const fetchRecipeIdData = async (pid: string) => {
        const response = await fetchRecipeId(pid);
        if (response.success) {
          setRecipe({
            success: true,
            message: response.message,
            recipe: response.recipe
          })
        }
      }
      fetchRecipeIdData(id);
    }
  }, [id]);
  
  console.log(recipe)
  return (
    <div>PageRecipesDetails</div>
  )
}
