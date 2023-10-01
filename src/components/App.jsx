import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { lazy } from 'react';
const HomePage = lazy(() => import('../pages/HomePage'));
const SingleFilmPage = lazy(() =>
  import('../pages/SingleFilmPage/SingleFilmPage')
);
const SingleFilmCast = lazy(() =>
  import('../pages/SingleFilmPage/SingleFilmCast')
);
const SingleFilmReview = lazy(() =>
  import('../pages/SingleFilmPage/SingleFilmReview')
);
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchPage />} />
        <Route path="movies/:filmId" element={<SingleFilmPage />}>
          <Route path="cast" element={<SingleFilmCast />} />
          <Route path="reviews" element={<SingleFilmReview />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
