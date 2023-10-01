import React, { useEffect, useState } from 'react';
import { searchFilmByName } from '../components/API';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FilmList } from 'components/FilmList/FilmList';
import { Searching } from 'components/Searching/Searching';

const SearchPage = () => {
  const [filmList, setFilmList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('value');

  useEffect(() => {
    if (!value) return;

    async function getQuizess() {
      try {
        setLoading(true);
        setError(false);
        const films = await searchFilmByName(value);
        setFilmList(films.results);
      } catch (error) {
        console.log('error');
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getQuizess();
  }, [searchParams]);

  return (
    <section>
      <Searching />

      {filmList.length > 0 && (
        <FilmList filmList={filmList} pageTitle={'Result'} />
      )}

      {loading && <div>LOADING...</div>}
      {error && !loading && <div>ERROR!</div>}
    </section>
  );
};

export default SearchPage;
