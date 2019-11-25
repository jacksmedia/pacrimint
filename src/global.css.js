import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: red;
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }

  .rowed {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .rowed * {
    margin: 0.15em;
  }
  .row-spacer {
    justify-content: space-around;
  }
  .row-spillover {
    flex-flow: row wrap;
  }
  .padded-icon {
    width: 20vw;
    background-color: red;
  }
  .coled {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .coled * {
    margin: 0.0em;
    padding: 0.15em;
  }
  .text-shadow-white {
    text-shadow: 2px 2px 4px white, -2px -2px 4px white, -2px 2px 4px white, 2px -2px 4px white;
  }

  .no-repeat-bg {
    background-size: cover;
    resize: both;
  }

  .max400px {
    max-width: 400px;
    overflow-wrap: normal;
  }

  Container a {
    color: red;
  }

  button {
    padding: 1.8rem 3.5rem;
    font-size: 22px;
    max-width: 180px;
    background: #036;
    text-align: center;
    color: lime;
    border: black dotted 0px;
    border-radius: 2.5rem;
  }

  .classic-404-text {
    animation: glitter infinite 2s linear;
  }
  @keyframes pulse {
    50% {
      transform: scale(1.8);
    }
  }
  @keyframes glitter {
    0% {
        color: red;
    }
    50% {
        color: blue;
    }
    100% {
        color: red;
    }
  }
`;
