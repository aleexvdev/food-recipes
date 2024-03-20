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
