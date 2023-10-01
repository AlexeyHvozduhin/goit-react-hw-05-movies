import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

export const InputWrapper = styled.input`
  border-style: none;
  outline: none;
  box-shadow: none;
  width: 250px;
  border-radius: 10px;
  padding: 5px;
  background-color: transparent;
  border-bottom: 3px solid #7e4fd4;
  color: #fff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  outline: none;
  border-style: none;
  border-radius: 50%;
  pointer-events: painted;
  background-color: transparent;
  transition: 0.2s linear;

  &:hover {
    transform: scale(1.15);
  }
`;
