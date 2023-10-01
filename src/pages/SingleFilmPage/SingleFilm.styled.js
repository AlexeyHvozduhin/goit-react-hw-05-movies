import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const SingleFilmBackground = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  &::before {
    content: '';
    position: absolute;
    width: 750px;
    height: 750px;
    background: linear-gradient(#9763db, #3494e2);
    border-radius: 50%;
    transform: translate(20px, 0px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  }
`;

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    width: 750px;
    height: 750px;
    background: linear-gradient(#9763db, #3494e2);
    border-radius: 50%;
    transform: translate(343px, 430px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  }
`;

export const CastListElement = styled.li`
  position: relative;
  display: flex;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
  color: white;
  backdrop-filter: blur(25px);

  & img {
    position: relative;
    border-radius: 10px;
    min-width: 100px;
    overflow: hidden;
    margin-right: 10px;
    object-fit: cover;
  }

  & div h4 {
    line-height: 1.2em;
    font-weight: 600;
    transition: 0.5s;
  }

  & div p {
    font-size: 0.75em;
    transition: 0.5s;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ReviewList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    width: 750px;
    height: 750px;
    background: linear-gradient(#9763db, #3494e2);
    border-radius: 50%;
    transform: translate(343px, 430px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  }
`;

export const ReviewListElement = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
  color: white;
  backdrop-filter: blur(25px);

  & h3 {
    text-align: center;
    font-size: 20px;
  }

  & div p {
    font-size: 0.75em;
    transition: 0.5s;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ErrorMessage = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
  color: white;
  backdrop-filter: blur(25px);
`;

export const GoBackLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: #f1f1f1c4;
  color: black;
  border-radius: 50%;
  font-size: 20px;
  position: absolute;
  transform: translate(-18px, -18px);
  z-index: 100;

  &:hover {
    background-color: #ddd;
    color: black;
  }
`;
