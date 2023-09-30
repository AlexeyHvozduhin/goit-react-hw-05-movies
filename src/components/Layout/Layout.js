import { Outlet } from 'react-router-dom';
import { HeaderList, StyledLink, Wrapper } from './Layout.styled';

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
