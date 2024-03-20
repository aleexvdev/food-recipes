import React, { useState } from 'react';
import { useInputState } from './useInputState';
import { TypeFilters, TypeValuesForm } from '../types/TypeRecipes';


export const useRecipeForm = (onSubmitForm: (formData: TypeValuesForm) => void) => {
  const { value, onChangeInput, clearInput } = useInputState();
  const [filters, setFilters] = useState<TypeFilters>({
    calories: { from: 0, to: 0 },
    ingredients: 0,
    diets: [],
    meals: []
  });

  const handleFilters = (newFilters: TypeFilters) => {
    setFilters(newFilters);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const params: TypeValuesForm = {
      query: value,
      filters
    };
    onSubmitForm(params);
  };

  return {
    value,
    onChangeInput,
    clearInput,
    handleSubmit,
    handleFilters
  };
};