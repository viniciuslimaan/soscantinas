import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased !important;

    background: ${(p) => p.theme.colors.backgroundLight};
    color: ${(p) => p.theme.colors.fontLight};
  }

  ::selection {
    color: ${(p) => p.theme.colors.background};
    background: ${(p) => p.theme.colors.primary};
  }

  h1, h2, h3 {
    font-weight: 700;
    line-height: 100%;
    color: ${(p) => p.theme.colors.font};
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    color: ${(p) => p.theme.colors.primary};
    text-decoration: none;

    &:hover {
        transition: .5s ease;
        color: ${(p) => p.theme.colors.yellow};
    }
  }
`;

export default GlobalStyle;
