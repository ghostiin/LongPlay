import { createGlobalStyle } from 'styled-components/macro';

const MediaStyle = createGlobalStyle`
html {
  @media only screen and (max-width: 1440px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }


}
`;

export default MediaStyle;
