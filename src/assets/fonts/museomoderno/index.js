import { createGlobalStyle } from 'styled-components/macro';
import museWoff2 from './MuseoModerno-Bold.woff2';
import museWoff from './MuseoModerno-Bold.woff';
import museTtf from './MuseoModerno-Bold.ttf';
import museEot from './MuseoModerno-Bold.eot';
import museSvg from './MuseoModerno-Bold.svg';

// only include ‘LONGPLAY’
const LogoMuseFont = createGlobalStyle`
    @font-face {
    font-family: "MuseoModerno-Bold";
    src: url(${museWoff2}) format("woff2"),
        url(${museWoff}) format("woff"),
        url(${museTtf}) format("truetype"),
        url(${museEot}) format("embedded-opentype"),
        url(${museSvg}) format("svg");
    font-weight: normal;
    font-style: normal;
    font-display:swap;
    unicode-range: U+4C,U+4F,U+004E,U+0047,U+0050,U+004C,U+0041,U+0059;  
}
`;

export default LogoMuseFont;
