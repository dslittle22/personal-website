import styled from 'styled-components';

export default function GridLayout({ children }) {
  let gtc = `
  calc((100% - 1200px) / 2) 3fr 11fr 3fr calc(
    (100% - 1200px) / 2
  )
  `;
  if (
    typeof window !== 'undefined' &&
    window.location.pathname.startsWith('/blog')
  ) {
    gtc = `
    calc((100% - 1100px) / 2) 3fr 11fr 3fr calc(
      (100% - 1100px) / 2
    )
    `;
  }
  return <Grid gtc={gtc}>{children}</Grid>;
}

const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 10px;
  grid-template-columns: ${props => props.gtc};

  p {
    padding: 0;
    margin: 0;
    padding-bottom: calc(1rem - 10px);
    :last-of-type {
      padding: 0;
    }
  }
  > * {
    grid-column: 3 / -3;
  }
  .full-span {
    grid-column: 1 / -1;
    img {
      grid-column: 1 / -1;
    }
  }
  .sidebar-span {
    grid-column: 2 / -2;
  }

  .sidebar {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    grid-row: span 10;
    align-self: flex-start;
    > * {
      padding: 5px;
    }
  }
  .left {
    grid-column: 2 / span 1;
    text-align: right;
    border-right: ${({ theme }) => `2px solid ${theme.colors.link}`};
  }
  .right {
    grid-column: -3 / span 1;
    text-align: left;
    border-left: ${({ theme }) => `2px solid ${theme.colors.link}`};
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 10fr 1fr;
    .sidebar {
      text-align: left;
      grid-column: 2 / -2;
      border: ${({ theme }) => `1px solid ${theme.colors.link}`};
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    padding: 0 6%;
  }
`;
