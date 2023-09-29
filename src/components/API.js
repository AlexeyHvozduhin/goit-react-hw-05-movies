import axios from 'axios';

// Пример API-запроса: https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=3eebfbe9c62ece5d5dd2cd2b1310950c

// API-запрос фильма по ID: https://api.themoviedb.org/3/movie/980489?api_key=3eebfbe9c62ece5d5dd2cd2b1310950c
// API-запрос фильма по названию: https://api.themoviedb.org/3/search/movie?query=batman&api_key=3eebfbe9c62ece5d5dd2cd2b1310950c
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const baseAPIKey = 'api_key=3eebfbe9c62ece5d5dd2cd2b1310950c';

export const mostPopularDay = async () => {
  const resp = await axios.get(
    `trending/movie/day?language=en-US&${baseAPIKey}`
  );
  return resp.data;
};

export const singleFilmById = async filmId => {
  // console.log(filmId);
  const resp = await axios.get(`movie/${filmId}?${baseAPIKey}`);
  return resp.data;
};

export const searchFilmByName = async filmName => {
  const resp = await axios.get(
    `search/movie?query=${filmName}&language=en-US&${baseAPIKey}`
  );
  return resp.data;
};
// export const fetchQuizess = async () => {
//   const resp = await axios.get('/todo');
//   return resp.data;
// };

// export const fetchQuizById = async quizId => {
//   const resp = await axios.get(`/todo/${quizId}`);
//   return resp.data;
// };

// export const deleteQuizById = async quizId => {
//   const resp = await axios.delete(`/todo/${quizId}`);
//   return resp.data;
// };

// export const createQuizById = async quiz => {
//   const resp = await axios.post(`/todo`, quiz);
//   return resp.data;
// };
