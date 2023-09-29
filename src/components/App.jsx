import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './HomePage';
import { SingleFilmPage } from './SingleFilmPage';
import { SingleFilmCast } from './SingleFilmCast';
import { SingleFilmReview } from './SingleFilmReview';
import { SearchPage } from './SearchPage';

export const App = () => {
  return (
    <div
      style={
        {
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
        }
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchPage />} />
          <Route path="movies/:filmId" element={<SingleFilmPage />}>
            <Route path="cast" element={<SingleFilmCast />} />
            <Route path="reviews" element={<SingleFilmReview />} />
          </Route>
          <Route path="*" element={<div>???</div>} />
        </Route>
      </Routes>
    </div>
  );
};
