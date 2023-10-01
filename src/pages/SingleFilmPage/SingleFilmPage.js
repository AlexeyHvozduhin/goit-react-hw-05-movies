import { Outlet, useLocation, useParams } from 'react-router-dom';
import { singleFilmById } from '../../components/API';
import { SingleFilmWrapper } from '../../components/SingleFilmWrapper/SingleFilmWrapper';
import { useEffect, useRef, useState } from 'react';
import { SingleFilmBackground, GoBackLink } from './SingleFilm.styled';

const SingleFilmPage = () => {
  const { filmId } = useParams();
  const [singleFilm, setSingleFilm] = useState(null);
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const back = useRef(location?.state?.from ?? '/movies');

  useEffect(() => {
    async function getQuizess() {
      try {
        setLoading(true);
        setError(false);
        if (filmId) {
          const singleFilm = await singleFilmById(filmId);
          setSingleFilm(singleFilm);
        }
      } catch (error) {
        console.log('error');
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getQuizess();
  }, [filmId]);

  return (
    <SingleFilmBackground>
      {loading && <div>LOADING...</div>}
      <div>
        <GoBackLink to={back.current}>&#8249;</GoBackLink>
      </div>
      {singleFilm && <SingleFilmWrapper singleFilm={singleFilm} />}
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>ERROR!</div>}
      <Outlet />
    </SingleFilmBackground>
  );
};

export default SingleFilmPage;
