import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background: ${(props) => props.theme.colors.backgroundLight};
    color: ${(props) => props.theme.colors.fontLight};
    -webkit-font-smoothing: antialiased !important;
  }

  ::selection {
    color: ${(props) => props.theme.colors.background};
    background: ${(props) => props.theme.colors.primary};
  }

  h1, h2, h3 {
    font-weight: 700;
    line-height: 100%;
    color: ${(props) => props.theme.colors.font};
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
    line-height: 100%;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
        transition: .5s ease;
        color: ${(props) => props.theme.colors.yellow};
    }
  }
`;

export default GlobalStyle;
