import { useParams } from 'react-router-dom';
import { singleFilmByIdInfo } from '../../components/API';
import { useEffect, useState } from 'react';
import {
  ErrorMessage,
  ReviewList,
  ReviewListElement,
} from './SingleFilm.styled';

const SingleFilmReview = () => {
  const [review, setReviews] = useState([]);
  const { filmId } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getQuizess() {
      try {
        setLoading(true);
        setError(false);
        if (filmId) {
          // Запрос на актёров, снимающихся в конкретном фильме
          const { results } = await singleFilmByIdInfo(`${filmId}/reviews`);
          setReviews(results);
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
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>ERROR!</div>}
      {review.length > 0 ? (
        <ReviewList>
          {review.map(({ id, author, content }) => (
            <ReviewListElement key={id}>
              <h3>{author}</h3>
              <p>{content ?? 'Nope'}</p>
            </ReviewListElement>
          ))}
        </ReviewList>
      ) : (
        <ErrorMessage>
          Sorry, we don't have a review for this movie yet
        </ErrorMessage>
      )}
    </div>
  );
};

export default SingleFilmReview;
