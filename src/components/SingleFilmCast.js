import { useParams } from 'react-router-dom';
import { singleFilmById } from './API';
import { useEffect, useState } from 'react';

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
  }, []);

  return (
    <div>
      <h2>Cast:</h2>
      <ul>
        {casting.map(actor => (
          <li key={actor.id}>
            <img
              src={`${img_irl}${actor.profile_path}`}
              onError={e => {
                e.target.src =
                  'https://i1.sndcdn.com/avatars-000348889688-vvjlm3-t240x240.jpg';
              }}
              width={'100px'}
              alt={`Photo ${actor.name}`}
            ></img>
            <h3>Name: {actor.name}</h3>
            <h4>Character: {actor.character}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};