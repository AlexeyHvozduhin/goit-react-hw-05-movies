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
  const resp = await axios.get(`movie/${filmId}?${baseAPIKey}`);
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = resp.data;

  const date = {
    poster_path: poster_path,
    filmName: original_title,
    filmYear: release_date.slice(0, 4),
    vote_average: vote_average,
    overview: overview,
    filmGenres: genres.map(genre => genre.name).join(', '),
  };
  return date;
};

export const singleFilmByIdInfo = async filmId => {
  const resp = await axios.get(`movie/${filmId}?${baseAPIKey}`);
  return resp.data;
};

export const searchFilmByName = async filmName => {
  const resp = await axios.get(
    `search/movie?query=${filmName}&language=en-US&${baseAPIKey}`
  );
  return resp.data;
};
