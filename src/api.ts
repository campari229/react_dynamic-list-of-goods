const link = 'https://mate.academy/students-api/goods';

export const getGoods = async <T>(): Promise<{data: T[]}> => {
  const response = await fetch(link);

  return response.json();
};
