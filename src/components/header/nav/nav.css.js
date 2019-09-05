import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 12px;

    li {
      text-transform: uppercase;
      font-size: calc(8px + 2.1vmin);

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
