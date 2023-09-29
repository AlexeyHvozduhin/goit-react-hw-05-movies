import React, { useEffect, useState } from 'react';
import { searchFilmByName } from './API';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('value') ?? '');
  const [value, setValue] = useState('');
  const [filmList, setFilmList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchParams.get('value')) {
      async function getQuizess() {
        try {
          setLoading(true);
          setError(false);
          const films = await searchFilmByName(searchParams.get('value'));
          setFilmList(films.results);
        } catch (error) {
          console.log('error');
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      getQuizess();
    }
  }, []);

  const ChengeParams = value => {
    searchParams.set('value', value);
    setSearchParams(searchParams);
  };

  const handleSearch = evt => {
    evt.preventDefault();
    setValue(searchTerm);
    ChengeParams(searchTerm);
  };

  useEffect(() => {
    async function getQuizess() {
      try {
        setLoading(true);
        setError(false);
        if (value) {
          const films = await searchFilmByName(`${value}`);
          setFilmList(films.results);
        }
      } catch (error) {
        console.log('error');
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getQuizess();
  }, [value]);

  const location = useLocation();

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={evt => setSearchTerm(evt.target.value)}
        placeholder="Enter a movie title"
      />
      <button type="submit">Search</button>
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>ERROR!</div>}

      {filmList.length > 0 && (
        <ul>
          {filmList.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
