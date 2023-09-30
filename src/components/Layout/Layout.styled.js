import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const HeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 30px;
  border-style: solid;
  border-color: gray;
  padding: 30px;

  position: relative;
  min-width: 350px;
  min-width: 400px;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  z-index: 10;
  padding: 20px;
  backdrop-filter: blur(25px);

  & li {
    transition: 0.2s linear;
  }
  & li:hover {
    transform: scale(1.15);
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  text-decoration: auto;
  line-height: 1.2em;
  font-weight: 600;
  position: relative;

  &:after {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    bottom: -4px;
    right: 0;
    background: linear-gradient(#9763db, #3494e2);
    transition: width 0.5s, left 0.5s;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  &.active {
    color: #9763db;
  }

  &.active::after {
    width: 100%;
    left: 0;
  }
`;
