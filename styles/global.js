import { css } from 'styled-components';
import theme from './theme';

const GlobalStyle = css`
  :root {
    font-size: 16px;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    letter-spacing: 0.3px;
    font-size: clamp(14px, 1rem + 0.5vw, 18px);
    line-height: 1.5;

    #__next {
      min-height: 100%;
      display: grid;
      grid-template-areas:
        'header'
        'main'
        'footer';
      grid-template-rows: auto 1fr auto;
    }
  }

  main {
    width: 100%;
    letter-spacing: 0;
    margin: 0 auto;
    grid-area: main;
  }

  header {
    grid-area: header;
  }

  footer {
    grid-area: footer;
  }
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  p {
    padding-bottom: 1rem;
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;

    /* for link animation */
    transition: all 250ms;
    background-image: linear-gradient(
      ${theme.colors.link},
      ${theme.colors.link}
    );
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;

    :hover,
    :focus {
      background-size: 100% 2px;
    }
  }

  code {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: clamp(12px, 1rem + 0.5vw, 16px);
    color: ${theme.colors.white};
    background: ${theme.colors.text};
    padding: 0 0.15rem;
    margin: 0 0.1rem;
    border-radius: 5px;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    font-size: clamp(13px, 1rem + 0.5vw, 15px);
  }

  section {
    padding-top: 1.5rem;
  }

  hr {
    border-top: 1px solid ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.text};
  }

  li {
    margin-left: 20px;
  }
`;

export default GlobalStyle;
