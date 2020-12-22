import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const DesktopHeader = () => {
  return (
    <StyledHeader>
      <div className='inner-container'>
        <Link href='/'>
          <a>
            <h1>Danny Little</h1>
          </a>
        </Link>
        <ul>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/music'>
              <a>Music</a>
            </Link>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default DesktopHeader;

const StyledHeader = styled.header`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  .inner-container {
    width: min(1000px, 85%);
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  ul {
    display: flex;
    align-items: center;
  }
  li {
    list-style: none;
    padding-left: 2.5rem;
    a {
      display: block;
      color: ${({ theme }) => theme.colors.text};
      :hover {
        color: ${({ theme }) => theme.colors.link};
      }
    }
  }
`;
