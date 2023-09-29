import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { singleFilmById } from './API';
import { useEffect, useState } from 'react';

export const SingleFilmPage = () => {
  const { filmId } = useParams();
  const [singleFilm, setSingleFilm] = useState('');
  const location = useLocation();
  const img_irl = 'https://image.tmdb.org/t/p/w500/';

  const [filmName, setFilmName] = useState('');
  const [filmGenres, setFilmGenres] = useState('');
  const [filmYear, setFilmYear] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getQuizess() {
      try {
        setLoading(true);
        setError(false);
        if (filmId) {
          const singleFilm = await singleFilmById(`${filmId}`);
          setSingleFilm(singleFilm);

          const name = singleFilm.original_title;
          setFilmName(name);

          const genres = singleFilm.genres.map(genre => genre.name).join(', ');
          setFilmGenres(genres);

          const filmYear = singleFilm.release_date.slice(0, 4);
          setFilmYear(filmYear);
        }
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
      <div>
        <Link to={location?.state?.from ?? '/movies'}>Go Back</Link>
      </div>
      <div>
        <img
          src={`${img_irl}${singleFilm.poster_path}`}
          alt="Poster"
          width={'400px'}
        ></img>
        <div>
          <div> {`${filmName} (${filmYear})`}</div>
          <div>User rate: {singleFilm.vote_average}</div>
          <div>Overview: {singleFilm.overview}</div>
          <div>Genres: {filmGenres}.</div>
        </div>
      </div>
      <Link to="cast">Cast</Link>
      <div></div>
      <Link to="reviews">Reviews</Link>

      {loading && <div>LOADING...</div>}
      {error && !loading && <div>ERROR!</div>}
      <Outlet />
    </div>
  );
};
