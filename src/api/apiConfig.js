const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'cc4faa4fac7a1fb3146732b2d5ea6dba',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
