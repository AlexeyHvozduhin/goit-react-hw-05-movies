import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const StyledLink = styled(NavLink)`
  color: black;
  font-family: math;
  text-decoration: auto;

  &.active {
    color: orange;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 30px;
  border-style: solid;
  border-color: gray;
  padding: 30px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <header>
        <HeaderList>
          <li>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </HeaderList>
      </header>
      <Outlet />
    </Wrapper>
  );
};
