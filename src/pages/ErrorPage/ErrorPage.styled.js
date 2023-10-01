import { Link } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const ErrorBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/media/a683df6fd0b57db02968b6194c88d868.gif);
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  background-color: white;

  & p {
    position: absolute;
    top: 3rem;
    font-size: 7rem;
    color: #00000060;
  }

  & h2 {
    position: absolute;
    bottom: 8rem;
    font-size: 34px;
    color: #00000060;
  }

  & h5 {
    position: absolute;
    bottom: 6rem;
    color: #9c9c9c;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  bottom: 1rem;
  background: linear-gradient(45deg, #0737c5, #c800d5);
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 23px;
  border-radius: 13px;
`;
