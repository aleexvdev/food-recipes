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
