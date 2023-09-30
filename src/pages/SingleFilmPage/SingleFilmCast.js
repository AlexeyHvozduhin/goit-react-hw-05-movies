import { useParams } from 'react-router-dom';
import { singleFilmById } from '../../components/API';
import { useEffect, useState } from 'react';
import { CastList, CastListElement } from './SingleFilm.styled';

export const SingleFilmCast = () => {
  const [casting, setCasting] = useState([]);
  const { filmId } = useParams();
  const img_irl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    async function getQuizess() {
      try {
        // setLoading(true);
        // setError(false);
        if (filmId) {
          // Запрос на актёров, снимающихся в конкретном фильме
          const { cast } = await singleFilmById(`${filmId}/credits`);
          // console.log(cast);
          setCasting(cast);
        }
      } catch (error) {
        console.log('error');
        // setError(true);
      } finally {
        // setLoading(false);
      }
    }
    getQuizess();
  }, [filmId]);

  return (
    <div>
      <CastList>
        {casting.map(actor => (
          <CastListElement key={actor.id}>
            <img
              src={`${img_irl}${actor.profile_path}`}
              onError={e => {
                e.target.src =
                  'https://i1.sndcdn.com/avatars-000348889688-vvjlm3-t240x240.jpg';
              }}
              width={'100px'}
              alt={`Poster ${actor.name}`}
            ></img>
            <div>
              <h3>Name: {actor.name}</h3>
              <p>Character: {actor.character}</p>
            </div>
          </CastListElement>
        ))}
      </CastList>
    </div>
  );
};
