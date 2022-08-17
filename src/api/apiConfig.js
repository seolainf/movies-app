export const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3",
  apiKey: "1fa5c1f1a0c5a40ff8904e7e5383f760",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
