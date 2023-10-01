import { ErrorBox, StyledLink } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <ErrorBox>
      <p>404</p>
      <h2>Look like you`re lost</h2>
      <h5>the page are looking for not available</h5>
      <StyledLink to="/">Go to Home!</StyledLink>
    </ErrorBox>
  );
};

export default ErrorPage;
