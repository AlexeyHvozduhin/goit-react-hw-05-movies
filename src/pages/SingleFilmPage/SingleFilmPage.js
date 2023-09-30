import { Outlet, useLocation, useParams } from 'react-router-dom';
import { singleFilmById } from '../../components/API';
import { useEffect, useState } from 'react';
import {
  SingleFilmBox,
  SingleFilmDescription,
  SingleFilmDetails,
  StyledLink,
  SingleFilmBackground,
  GoBackLink,
} from './SingleFilm.styled';

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
  }, [filmId]);

  return (
    <SingleFilmBackground>
      {loading && <div>LOADING...</div>}
      <div>
        <GoBackLink to={location?.state?.from ?? '/movies'}>&#8249;</GoBackLink>
      </div>
      <SingleFilmBox>
        <img
          src={`${img_irl}${singleFilm.poster_path}`}
          alt="Poster"
          width={'400px'}
        ></img>
        <SingleFilmDescription>
          <h2> {`${filmName} (${filmYear})`}</h2>
          <h3>User rate: {singleFilm.vote_average}</h3>
          <p>Overview: {singleFilm.overview}</p>
          <h3>Genres: {filmGenres}.</h3>
          <SingleFilmDetails>
            <StyledLink to="cast">casting</StyledLink>
            <StyledLink to="reviews">reviews</StyledLink>
          </SingleFilmDetails>
        </SingleFilmDescription>
      </SingleFilmBox>

      {loading && <div>LOADING...</div>}
      {error && !loading && <div>ERROR!</div>}
      <Outlet />
    </SingleFilmBackground>
  );
};
