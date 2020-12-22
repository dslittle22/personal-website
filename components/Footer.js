import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const DesktopHeader = () => {
  return (
    <StyledFooter>
      <div className='inner-container'>
        <p className='header-row'>
          <Link href='https://github.com/dannylittle715'>
            <a>Github</a>
          </Link>
          <Link href='https://www.linkedin.com/in/danny-little-3b3665178/'>
            <a>LinkedIn</a>
          </Link>
          <Link href='https://www.youtube.com/channel/UCDqiWjbQMqqgomDexzFBUJQ'>
            <a>YouTube</a>
          </Link>
          <Link href='https://www.instagram.com/dlittle_music/'>
            <a>Instagram</a>
          </Link>
        </p>
        <p className='header-row'>Made by Danny Little in 2020.</p>
      </div>
    </StyledFooter>
  );
};

export default DesktopHeader;

const StyledFooter = styled.footer`
  font-size: 15px;
  background: ${({ theme }) => theme.colors.mediumBlue};
  margin-top: 2rem;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: max(300px, 20%);
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;

  .inner-container {
    display: flex;
    flex-direction: column;
    padding: 3rem 0 2rem;
  }
  .header-row {
    display: flex;
    justify-content: space-around;
  }
`;
