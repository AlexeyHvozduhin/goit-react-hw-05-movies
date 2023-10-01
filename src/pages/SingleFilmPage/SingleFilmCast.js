import { useParams } from 'react-router-dom';
import { singleFilmByIdInfo } from '../../components/API';
import { useEffect, useState } from 'react';
import { CastList, CastListElement } from './SingleFilm.styled';
import { getPoster } from 'components/functional';

const SingleFilmCast = () => {
  const [casting, setCasting] = useState([]);
  const { filmId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const img_irl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    async function getQuizess() {
      try {
        setLoading(true);
        setError(false);
        if (filmId) {
          // Запрос на актёров, снимающихся в конкретном фильме
          const { cast } = await singleFilmByIdInfo(`${filmId}/credits`);
          setCasting(cast);
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
    <div>
      <CastList>
        {casting.map(({ id, profile_path, name, character }) => (
          <CastListElement key={id}>
            <img
              src={getPoster(profile_path, 'actor')}
              width={'100px'}
              alt={`Poster ${name}`}
            ></img>
            <div>
              <h3>Name: {name}</h3>
              <p>Character: {character}</p>
            </div>
          </CastListElement>
        ))}
        {loading && <div>LOADING...</div>}
        {error && !loading && <div>ERROR!</div>}
      </CastList>
    </div>
  );
};

export default SingleFilmCast;
