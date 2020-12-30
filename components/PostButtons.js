import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const PostButtons = ({ nextPost, lastPost }) => {
  return (
    <StyledButtons>
      {lastPost !== null ? (
        <button>
          <Link href={'/blog/' + lastPost.slug}>
            <a>{`< Last Post: ${lastPost.frontmatter.title}`}</a>
          </Link>
        </button>
      ) : (
        <div></div>
      )}
      {nextPost !== null ? (
        <button>
          <Link href={'/blog/' + nextPost.slug}>
            <a>{`Next Post: ${nextPost.frontmatter.title} >`}</a>
          </Link>
        </button>
      ) : (
        <div></div>
      )}
    </StyledButtons>
  );
};

export default PostButtons;

const StyledButtons = styled.div`
  padding-top: 1rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto;
  button {
    border: none;
    padding: 5px;
    font-size: 18px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.mediumBlue};
  }
`;

// const button = styled.button`
//   border: none;
//   padding: 5px;
//   font-size: 16px;
//   border-radius: 5px;
//   background: ${({ theme }) => theme.colors.mediumBlue};
// `;
