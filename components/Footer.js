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
  margin: 0 auto;
  width: 100%;
  background: rgb(80, 100, 200);
  margin-top: 1rem;
  bottom: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;

  .inner-container {
    padding: 3rem 0 2rem;
    width: max(300px, 20%);
  }
  .header-row {
    display: flex;
    justify-content: space-around;
  }
`;
