import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

::selection {
    background:inherit; 
    color:inherit;
}

::-moz-selection {
    background:inherit; 
    color:inherit;
}

::-webkit-selection {
    background:inherit; 
    color:inherit;
}

html {
  text-size-adjust: 100%;
  box-sizing: border-box;

  @media ${({ theme }) => theme.mediaQueries['below-768']} {
    color: violet;
  }

  @media ${({ theme }) => theme.mediaQueries['above-768']} {
 
  font-size:42.5%;
}

 @media ${({ theme }) => theme.mediaQueries['above-992']} {

  font-size:42.5%;
}

 @media ${({ theme }) => theme.mediaQueries['above-1200']} {
  font-size: 52.5%;
 
}
 @media ${({ theme }) => theme.mediaQueries['above-1536']} {
  font-size: 62.5%;
 
}
}

body {
    line-height: 1;
    background-color: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.text}
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text}
}
button {
  padding: 0;
  border: none;
  background: none;
}
`;
