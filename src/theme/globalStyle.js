import { createGlobalStyle } from 'styled-components/macro';
import style from './index';

const ResetStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    font-size: 16px;
    }
    /* 自定义 */
    html{
    background: linear-gradient(${style.bgColorLight}, ${style.bgColorDark}) no-repeat fixed;
    scroll-behavior: smooth;
    }

    *, *:before, *:after {
    box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    overflow:auto;
    }

    ol, ul {
    list-style: none;
    }

    img {
    max-width: 100%;
    height: auto;
    }
     /* 自定义 */
    a:link,a:visited {
        text-decoration:none;
        color: ${style.textColor};
    }

    a:hover {
    text-decoration: none;

    }
    a:active {
    text-decoration: none;
    }
`;

export default ResetStyle;
