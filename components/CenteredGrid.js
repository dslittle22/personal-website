import styled from 'styled-components';

const StyledProjectsGrid = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: ${({ maxWidth, minWidth }) =>
    `repeat(auto-fit, minmax(${minWidth}, ${maxWidth}))`};
  grid-gap: 10px;
  align-items: center;
  justify-content: center;

  > * {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
  }
`;

export default StyledProjectsGrid;
