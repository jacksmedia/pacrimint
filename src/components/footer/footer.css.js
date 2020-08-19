import styled from 'styled-components';

export const Container = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap');
  h1 {
    font-size: calc(12px + 3vmin);
    font-family: 'Cinzel Decorative', cursive;
    text-shadow: 1px 1px 2px black, 0 0 1em #1d0200, 0 0 0.2em #1d0200;
    padding: 2vw;
  }
  background-image: linear-gradient(#4c9084, #8fb67b, #4c9084);
  max-width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  line-height: 3vh;
  a {
    color: blue;
    transition: color 0.4s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
