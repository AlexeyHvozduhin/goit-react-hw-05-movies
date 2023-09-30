import { useParams } from 'react-router-dom';
import { singleFilmById } from '../../components/API';
import { useEffect, useState } from 'react';
import {
  ErrorMessage,
  ReviewList,
  ReviewListElement,
} from './SingleFilm.styled';

export const SingleFilmReview = () => {
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
          const { results } = await singleFilmById(`${filmId}/reviews`);
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
          {review.map(reviewContent => (
            <ReviewListElement key={reviewContent.id}>
              <h3>{reviewContent.author}</h3>
              <p>{reviewContent.content ?? 'Nope'}</p>
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
