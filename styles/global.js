import { css } from 'styled-components';
import theme from './theme';

const GlobalStyle = css`
  :root {
    font-size: 16px;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    letter-spacing: 0.3px;
    font-size: clamp(14px, 1rem + 0.5vw, 19px);
    line-height: 1.4;

    /* for sticky bottom footer */
    div#__next {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  }

  main {
    width: min(1000px, 85%);
    letter-spacing: 0;
    margin: 0 auto;

    /* for sticky bottom footer */
    flex: 1 0 auto;
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
    color: ${theme.colors.background};
    background: #272822;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    font-size: clamp(13px, 1rem + 0.5vw, 17px);
  }

  section {
    padding-top: 1.5rem;
  }

  hr {
    border-top: 1px solid ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.text};
  }
`;

export default GlobalStyle;
