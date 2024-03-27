import { foods } from "../constans/constans";

export const roundedDecimal = (numero:number, decimales:number): number|string => {
  if (typeof numero !== 'number' || isNaN(numero)) {
    return 'Unknown';
  }
  const factor = 10 ** decimales;
  return Math.round(numero * factor) / factor;
}

export const truncateLabel = (label: string, maxLength: number) => {
  if (label.length <= maxLength) {
    return label;
  } else {
    return label.slice(0, maxLength - 3) + '...';
  }
};

export function getRecipeIdFromUrl(url: string) {
  const urlParts = url.split('/');
  const idIndex = urlParts.findIndex(part => part.includes('v2'));
  if (idIndex !== -1 && urlParts.length > idIndex + 1) {
    const recipeIdWithParams = urlParts[idIndex + 1];
    const recipeId = recipeIdWithParams.split('?')[0];
    return recipeId;
  }
  return null;
}

export function getMealByTime(): string {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 6 && currentHour < 10) {
    return foods[0]; // Breakfast
  } else if (currentHour >= 10 && currentHour < 14) {
    return foods[1]; // Lunch
  } else if (currentHour >= 14 && currentHour < 18) {
    return foods[2]; // Dinner
  } else if (currentHour >= 18 && currentHour < 20) {
    return foods[3]; // Snack
  } else {
    return foods[4]; // Teatime
  }
}

export function formatDate(dateString: string): string {
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error('Formato de fecha inválido');
  }

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayOfWeek}, ${day} de ${month} ${year}`;
}
