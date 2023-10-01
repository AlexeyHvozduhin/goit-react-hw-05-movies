import { useSearchParams } from 'react-router-dom';
import { InputWrapper, SearchButton, SearchForm } from './Searching.styled';

export const Searching = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('value');

  const ChengeParams = value => {
    searchParams.set('value', value);
    setSearchParams(searchParams);
  };

  const handleSearch = evt => {
    evt.preventDefault();
    const query = evt.target.query.value.trim().toLowerCase();
    if (!query) return;
    ChengeParams(query);
  };

  return (
    <SearchForm onSubmit={handleSearch}>
      <InputWrapper
        type="text"
        defaultValue={value}
        placeholder="Enter a movie title"
        name="query"
      />
      <SearchButton type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="25px"
          width="25px"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            stroke="#fff"
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            stroke="#fff"
            d="M22 22L20 20"
          ></path>
        </svg>
      </SearchButton>
    </SearchForm>
  );
};
