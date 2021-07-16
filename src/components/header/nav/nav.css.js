import styled from 'styled-components';

export const Container = styled.nav`
  .meganav {
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-flow: row wrap; 
    list-style: none;
    padding: 10px;
    max-width: 78vw;

    li {
      text-transform: uppercase;
      font-size: calc(8px + 2.1vmin);

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
