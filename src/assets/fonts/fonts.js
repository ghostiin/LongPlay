import { createGlobalStyle } from 'styled-components';
/*Lato*/
import LatoRegularWoff2 from './Lato/Lato-Regular.woff2';
import LatoRegularWoff from './Lato/Lato-Regular.woff';
import LatoBoldWoff2 from './Lato/Lato-Bold.woff2';
import LatoBoldWoff from './Lato/Lato-Bold.woff';
import LatoLightWoff2 from './Lato/Lato-Light.woff2';
import LatoLightWoff from './Lato/Lato-Light.woff';
/*Poppins */
import PoppinsRegularWoff2 from './Poppins/Poppins-Regular.woff2';
import PoppinsRegularWoff from './Poppins/Poppins-Regular.woff';
import PoppinsBoldWoff2 from './Poppins/Poppins-Bold.woff2';
import PoppinsBoldWoff from './Poppins/Poppins-Bold.woff';
import PoppinsLightWoff2 from './Poppins/Poppins-Light.woff2';
import PoppinsLightWoff from './Poppins/Poppins-Light.woff';

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Lato-Regular';
        src: local('Lato Regular'), local('Lato-Regular'),
        url(${LatoRegularWoff2}) format('woff2'),
        url(${LatoRegularWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }

    @font-face {
       font-family: "Lato-Bold";
       src: url(${LatoBoldWoff2}) format("woff2"),
       url(${LatoBoldWoff}) format("woff");
       font-weight: normal;
       font-style: normal;
       font-display:swap;
    }

    @font-face {
       font-family: "Lato-Light";
       src: url(${LatoLightWoff2}) format("woff2"),
       url(${LatoLightWoff}) format("woff");
       font-weight: normal;
       font-style: normal;
       font-display:swap;
    }

    @font-face {
        font-family: 'Poppins-Regular';
        src: local('Poppins Regular'), local('Poppins-Regular'),
        url(${PoppinsRegularWoff2}) format('woff2'),
        url(${PoppinsRegularWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display:swap;
    }

    @font-face {
       font-family: "Poppins-Bold";
       src: url(${PoppinsBoldWoff2}) format("woff2"),
       url(${PoppinsBoldWoff}) format("woff");
       font-weight: normal;
       font-style: normal;
       font-display:swap;
    }

    @font-face {
       font-family: "Poppins-Light";
       src: url(${PoppinsLightWoff2}) format("woff2"),
       url(${PoppinsLightWoff}) format("woff");
       font-weight: normal;
       font-style: normal;
       font-display:swap;
    }
`;
