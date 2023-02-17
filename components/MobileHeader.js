import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader open={open}>
      <Link href='/'>

        <h1>Danny Little</h1>

      </Link>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <MenuLinks open={open}>
        <ul>
          <li>
            <Link href='/blog'>
              Blog
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='/music'>
              Music
            </Link>
          </li>
        </ul>
      </MenuLinks>
    </StyledHeader>
  );
};

export default MobileHeader;

const StyledHeader = styled.header`
  @media (min-width: 769px) {
    display: none !important;
  }

  display: flex;
  padding: 2rem 0;
  top: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ open }) => (open ? '1rem' : 'none')};
  background: ${({ open, theme }) => (open ? theme.colors.mediumBlue : 'none')};

  h1 {
    display: block;
    /* color: ${({ theme }) => theme.colors.text}; */
    color: ${({ open, theme }) =>
      open ? theme.colors.white : theme.colors.text};
  }
`;

const Hamburger = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 1.8rem;
  justify-content: space-between;
  align-items: stretch;
  background: transparent;
  border: none;
  cursor: pointer;
  transform: scale(0.95);
  transition: transform 400ms;
  :hover {
    transform: scale(1);
  }

  div {
    width: 2.5rem;
    height: 0.3rem;
    border-radius: 10px;
    position: relative;
    background: ${({ theme, open }) =>
      open ? theme.colors.background : theme.colors.text};
  }
`;

const MenuLinks = styled.div`
  padding-top: 0.5rem;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.colors.mediumBlue};

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.75rem;
  }
  a {
    color: ${({ theme }) => theme.colors.white};
    :hover {
      color: ${({ theme }) => theme.colors.link};
    }
  }
`;
