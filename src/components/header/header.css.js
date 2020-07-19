import styled from 'styled-components';

export const Container = styled.header`
  h1 {
    font-size: calc(15px + 3vmin);
    font-family: 'Cinzel Decorative', cursive;
    text-shadow: 1px 1px 2px navy, 0 0 1em navy, 0 0 0.2em navy;
    padding: 2vw 2vw 2vw 4vw;
  }
  background-image: linear-gradient(#4C9084, #8FB67B, #4C9084);
  max-width: 100vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  line-height: 6vh;
  a {
    color: blue;
    transition: color 0.4s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
