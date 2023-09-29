import { useParams } from 'react-router-dom';
import { singleFilmById } from './API';
import { useEffect, useState } from 'react';

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
  }, []);

  return (
    <div>
      <h2>Review:</h2>
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>ERROR!</div>}
      {review.length > 0 ? (
        <ul>
          {review.map(reviewContent => (
            <li key={reviewContent.id}>
              <h3>Author: {reviewContent.author}</h3>
              {reviewContent.content ?? <p>Nope</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, we don't have a review for this movie yet</p>
      )}
    </div>
  );
};
