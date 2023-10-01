import {
  SingleFilmBox,
  SingleFilmDescription,
  SingleFilmDetails,
  StyledLink,
} from './SingleFilmWrapper.styled';
import { getPoster } from '../functional';

export const SingleFilmWrapper = ({ singleFilm }) => {
  const {
    poster_path,
    filmName,
    filmYear,
    vote_average,
    overview,
    filmGenres,
  } = singleFilm;
  return (
    <SingleFilmBox>
      <img
        src={getPoster(poster_path, 'film')}
        alt="Poster"
        width={'400px'}
      ></img>
      <SingleFilmDescription>
        <h2> {`${filmName} (${filmYear})`}</h2>
        <h3>User rate: {vote_average}</h3>
        <p>Overview: {overview}</p>
        <h3>Genres: {filmGenres}.</h3>
        <SingleFilmDetails>
          <StyledLink to="cast">casting</StyledLink>
          <StyledLink to="reviews">reviews</StyledLink>
        </SingleFilmDetails>
      </SingleFilmDescription>
    </SingleFilmBox>
  );
};
