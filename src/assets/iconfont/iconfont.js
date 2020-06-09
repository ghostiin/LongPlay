import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1591706854264'); /* IE9 */
  src: url('iconfont.eot?t=1591706854264#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1591706854264') format('woff'),
  url('iconfont.ttf?t=1591706854264') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1591706854264#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-pause:before {
  content: "\e63d";
}

.icon-next:before {
  content: "\e775";
}

.icon-previous:before {
  content: "\e7a7";
}

.icon-skipprevious:before {
  content: "\ed09";
}

.icon-play:before {
  content: "\e9f9";
}

.icon-play1:before {
  content: "\e6e2";
}

.icon-pause1:before {
  content: "\e6a6";
}

.icon-skip-next:before {
  content: "\e6d2";
}

.icon-delete:before {
  content: "\e699";
}

.icon-down:before {
  content: "\e69b";
}

.icon-close:before {
  content: "\e69e";
}

.icon-increase:before {
  content: "\e69f";
}

.icon-music:before {
  content: "\e6a0";
}

.icon-collection:before {
  content: "\e6a1";
}

.icon-upward:before {
  content: "\e6a2";
}

.icon-next1:before {
  content: "\e6a3";
}

.icon-back:before {
  content: "\e6db";
}

.icon-info:before {
  content: "\e6de";
}

.icon-search:before {
  content: "\e6e1";
}

.icon-record:before {
  content: "\e6ed";
}

.icon-setting:before {
  content: "\e6f0";
}
`;
