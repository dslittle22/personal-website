import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const DesktopHeader = () => {
  return (
    <StyledFooter>
      <div className='inner-container'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link href='https://github.com/dslittle22'>
            Github
          </Link>
          <Link href='https://www.linkedin.com/in/danny-little-3b3665178/'>
            LinkedIn
          </Link>
          <Link href='https://www.youtube.com/channel/UCDqiWjbQMqqgomDexzFBUJQ'>
            YouTube
          </Link>
          <Link href='https://www.instagram.com/dlittle_music/'>
            Instagram
          </Link>
        </div>
        <div style={{ textAlign: 'center' }}>Made by Danny Little in 2020.</div>
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
  grid-template-columns: 300px;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  height: 150px;

  .inner-container {
    display: grid;
    grid-template-rows: auto auto;
    gap: 15px;
    align-content: center;
  }
`;
