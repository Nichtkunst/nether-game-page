export const getRandomImage = (imgAr: string[], path?: string) => {
  path = path || "./assets/"; // default path here
  const num = Math.floor(Math.random() * imgAr.length);
  return imgAr[num];
};
