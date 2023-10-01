import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const SingleFilmBox = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 30px;
  border-style: solid;
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
  color: white;

  & img {
    width: 350px;
    border-radius: 10px;
  }
`;

export const SingleFilmDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px 0;
  transition: 0.5s;
  overflow: hidden;
  padding-bottom: 0px;
  backdrop-filter: blur(25px);
`;

export const SingleFilmDetails = styled.div`
  margin: auto -10px 0 -10px;
  display: flex;
  gap: auto;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  background-color: #585e643f;
  width: 50%;
  height: 30px;
  border: solid 1px #293037;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  transition: 0.5s;
  backdrop-filter: blur(25px);

  &:hover {
    transform: translateY(-5px);
    background-color: #a0adb97f;
  }

  &:first-of-type {
    border-radius: 0 0 0 10px;
  }
  &:last-of-type {
    border-radius: 0 0 10px 0px;
  }
`;
