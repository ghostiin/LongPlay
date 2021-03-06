import { createGlobalStyle } from 'styled-components/macro';

const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1593233813717'); /* IE9 */
  src: url('iconfont.eot?t=1593233813717#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1593233813717') format('woff'),
  url('iconfont.ttf?t=1593233813717') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1593233813717#iconfont') format('svg'); /* iOS 4.1- */
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

.icon-play2:before {
  content: "\e600";
}

.icon-online:before {
  content: "\e618";
}

.icon-cc-delete:before {
  content: "\e6c9";
}

.icon-playlistminus:before {
  content: "\e9fe";
}

.icon-playlistplay:before {
  content: "\e9ff";
}

.icon-playlistplus:before {
  content: "\ea00";
}

.icon-lock:before {
  content: "\e76f";
}

.icon-yinlexingshipitchon:before {
  content: "\e633";
}

.icon-delete1:before {
  content: "\e601";
}

.icon-playlist:before {
  content: "\e637";
}

.icon-play3:before {
  content: "\e6c8";
}

.icon-loop:before {
  content: "\e713";
}

.icon-loop-once:before {
  content: "\e714";
}

.icon-more:before {
  content: "\e65d";
}

.icon-pause2:before {
  content: "\e755";
}

.icon-shuffle:before {
  content: "\e619";
}

`;

export default IconStyle;
