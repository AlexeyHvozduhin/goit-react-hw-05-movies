import { NavLink, useLocation } from 'react-router-dom';
import { mostPopularDay } from './API';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
// ///////////////////////////////////////////////////////////////////////////////////////////
const ListHomePage = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledLink = styled(NavLink)`
  color: #001689;
  font-family: math;
  text-decoration: auto;

  &:focus,
  &:hover {
    color: orange;
    padding-left: 5px;
  }
`;
// ///////////////////////////////////////////////////////////////////////////////////////////
export const HomePage = () => {
  const [filmItems, setFilmItems] = useState([]);

  useEffect(() => {
    async function getQuizess() {
      try {
        // setLoading(true);
        // setError(false);
        const filmlist = await mostPopularDay();
        setFilmItems(filmlist.results);
      } catch (error) {
        console.log('error');
        // setError(true);
      } finally {
        // setLoading(false);
      }
    }
    getQuizess();
  }, []);

  const location = useLocation();

  return (
    <div>
      <h2>Trending Today</h2>
      <ListHomePage>
        {filmItems.map(item => {
          return (
            <li key={item.id}>
              <StyledLink to={`/movies/${item.id}`} state={{ from: location }}>
                {item.original_title}
              </StyledLink>
            </li>
          );
        })}
      </ListHomePage>
    </div>
  );
};
