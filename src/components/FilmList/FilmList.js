import {
  ListPageBox,
  ListHomePage,
  StyledLink,
  TitleElement,
  ListHomePageElement,
} from './FilmList.styled';

export const FilmList = ({ filmList, location, pageTitle }) => {
  const img_irl = 'https://image.tmdb.org/t/p/w500/';
  // console.log(filmList[0].overview);
  return (
    <ListPageBox>
      <div className="_film_list_box">
        <TitleElement>{pageTitle}</TitleElement>
        <ListHomePage>
          {filmList.map(({ id, title, backdrop_path, overview }) => (
            <StyledLink
              to={`/movies/${id}`}
              state={{ from: location }}
              key={id}
            >
              <ListHomePageElement>
                <img
                  src={`${img_irl}${backdrop_path}`}
                  onError={e => {
                    e.target.src =
                      'https://celes.club/uploads/posts/2022-05/1653089639_2-celes-club-p-znaki-voprosa-fon-krasivie-2.jpg';
                  }}
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
