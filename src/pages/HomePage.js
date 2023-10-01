import { useLocation } from 'react-router-dom';
import { mostPopularDay } from '../components/API';
import { useState, useEffect } from 'react';

import { FilmList } from 'components/FilmList/FilmList';

// import { ListHomePage } from 'components/ListHomePage/ListHomePage';
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
const HomePage = () => {
  const [filmItems, setFilmItems] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getQuizess() {
      try {
        setLoading(true);
        setError(false);
        const filmlist = await mostPopularDay();
        setFilmItems(filmlist.results);
      } catch (error) {
        console.log('error');
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getQuizess();
  }, []);

  return (
    <div>
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>ERROR!</div>}
      <FilmList filmList={filmItems} pageTitle={'Trending Today'} />
    </div>
  );
};

export default HomePage;
