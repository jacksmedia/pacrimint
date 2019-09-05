import styled from 'styled-components';

export const Container = styled.header`
@import url('https://fonts.googleapis.com/css?family=Asset&display=swap');
  h1 {
    font-family: 'Asset', cursive;
  }

  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  max-width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
