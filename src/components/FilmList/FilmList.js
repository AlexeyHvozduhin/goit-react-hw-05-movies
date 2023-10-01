import { useLocation } from 'react-router-dom';
import {
  ListPageBox,
  ListHomePage,
  StyledLink,
  TitleElement,
  ListHomePageElement,
} from './FilmList.styled';

import { getPoster } from 'components/functional';

export const FilmList = ({ filmList, pageTitle }) => {
  const location = useLocation();
  return (
    <ListPageBox>
      <div className="_film_list_box">
        <TitleElement>{pageTitle}</TitleElement>
        <ListHomePage>
          {filmList.map(({ id, title, poster_path, overview }) => (
            <StyledLink
              to={`/movies/${id}`}
              state={{ from: location }}
              key={id}
            >
              <ListHomePageElement>
                <img
                  src={getPoster(poster_path, 'film')}
                  width={'100px'}
                  alt={`Poster ${title}`}
                ></img>
                <div>
                  <h4>{title}</h4>
                  <p>{overview}</p>
                </div>
              </ListHomePageElement>
            </StyledLink>
          ))}
        </ListHomePage>
      </div>
    </ListPageBox>
  );
};
