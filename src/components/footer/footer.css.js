import styled from 'styled-components';

export const Container = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap');
  h1 {
    font-size: calc(12px + 3vmin);
    font-family: 'Cinzel Decorative', cursive;
    text-shadow: 1px 1px 2px black, 0 0 1em #1d0200, 0 0 0.2em #1d0200;
    padding: 2vw;
  }
  max-width: 100vw;
  padding: 3rem 0rem 0rem;
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
  background: -webkit-linear-gradient(270deg, rgba(221,60,0,0.8), rgba(45,0,0,0) 66.6%),-webkit-linear-gradient(0deg, rgba(0,153,199,0.8), rgba(0,45,0,0) 66.6%),-webkit-linear-gradient(90deg, rgba(5,0,255,0.8), rgba(0,0,45,0) 66.6%);
  background: linear-gradient(270deg, rgba(221,60,0,0.8), rgba(45,0,0,0) 66.6%),linear-gradient(0deg, rgba(0,153,199,0.8), rgba(0,45,0,0) 66.6%),linear-gradient(90deg, rgba(5,0,255,0.8), rgba(0,0,45,0) 66.6%);
`;
  
