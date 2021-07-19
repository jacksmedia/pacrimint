import styled from 'styled-components';

export const Container = styled.nav`
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

  .bump-left {
    padding-left: 20px;
  }

  .navver {
    background-color: rgba(0,0,255,0.5);
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    position: fixed;
    width: 100%;
    z-index: 3;
  }

  .navver ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  .navver li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f2f2f2;
    text-decoration: none;
  }

  .navver li a:hover,
  .navver .menu-btn:hover {
    background-color: #f2f2f2;
  }

  .navver .logo {
    display: block;
    float: left;
    font-size: 1.7em;
    padding: 10px 20px;
    text-decoration: none;
  }

  .navver .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
  }

  .navver .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .navver .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }

  .navver .menu-icon .navicon:before,
  .navver .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  .navver .menu-icon .navicon:before {
    top: 5px;
  }

  .navver .menu-icon .navicon:after {
    top: -5px;
  }

  .navver {
    .menu-btn {
      display: none;
    }
  }

  .navver .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  .navver .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .navver .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .navver .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .navver .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .navver .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  @media (min-width: 48em) {
    .navver li {
      float: left;
    }
    .navver li a {
      padding: 20px 30px;
    }
    .navver .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .navver .menu-icon {
      display: none;
    }
  }
`;
