import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1591079331558'); /* IE9 */
  src: url('iconfont.eot?t=1591079331558#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAh0AAsAAAAAEQgAAAglAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCFIAqReI5LATYCJANICyYABCAFhG0HgTkbag4jETaLkjIk+6sD25j20Bc67UZDjBJwN4RsICwxFBSMhMBMv9JTGGg99cLnD5aT9+fgedSlT1+yDsjnJAUAXtthYdiIcOpIpAKAB/UqSe8FctUqaaMMXNN/bisrVNQku6oRKYQsf48BLBg1OztjZtSM34CbCpEKkMyQqgkysywTEdiVkq9YTfSaWC1k8uc4V8TUDOBgcv/Xfq2eLaahmL12oVDjF1tcLREyw/RT2X+INxLtQoVGKhUVaxq5RE4OEF/t9jAUEKcYosA2JZc30QgDZyuMm3KrodEoUILJiFZE822CS4NagkdU5soqsNj6ffWGWsoFBE/DNnuMO6qiXZf96pdmQ5YhhgKuuSrg7A40UAWAAXUpseYM2sFVrJx40lTDMqAAlIfPRF1Tt9bR7uh3DDn+uQfuiXvnPr76FYYgUFeWxytznaKARNxqXob+hedhiRAlRpwESQwp0mTQ+FCBQFkoJwl0Lzu7+JwGUOCaAB64FoAF1w6IgOsARMF1AmLgugBxcN2ABLgeQBJcP8CAOwGkwJ0D0uCuABlw1wAN7gHgA9wzIAt49VOCQB2YLwOgHEDOgV4q0IIuQaGMHM+qU+hIlcI4pBbj+xhiTBmj9306Xl5mEqRQITruJEV8n1GXymnUGl2Jggj83TV2BEL4MVDPjcMG6ygwMUg2WWd+81AcAp25YeyRxDKwHjLooO8FbJUAWBGCNCIdwsugFkoAOQWGsSHNSh8QAvoiGoP2ck4hfZkgyRtMYtHrIo/fkDmCUKyYyawXmRmbiS0iKcJoRhFNAuPpZQxdpMysralMUo2VIZo6y7RIN50vyIkjlV9rt9uimS0VmrTZKLud4VQSJNrnvn6e2f/l27W4aFWl9dpsT8anwT61hP8e1ZadqZ+QfuxkuIRRzP2sIVZb+LgdLl/DzoQNd+pZGR+be0Mo3MAxH8FsjxuthNmk51yz+Vglik0ZZS/wAkoTW4HOxNdqpdvmhiUMQaL8m8/OUh8OKgrziEUhueDBvDSsHEFVLrNHZFMFdyZbo6pkg/wkhw6f5kVUBMJNkgJ6LtMgGVpSA2TDLsOPjLCjo/DwNrcVZW1tackOpzCyCMBK8KLNGzO/CLYqCoir6h1eBBgIqpFFlBQlrLrFvUoUMUqSiNrBYCDXG0BwOLRaUghGkfGado9aRcFpWUarhkK68x8SBspuDg6vparcW93cqsmasIGgICCuQoZCIqroWo82T88apjpyODSUWtjz6txPXj707TrIGtxkN/gtbnsbM/obgHTWuKM1AqmSxghv5+3EygH6DNC2CKBBz/v/B65GGiuMkZ8wCQXCPjvpcUpNpd2Fr+FLnAsjlFqR5EdSTpY914gEV/ZQAjcS3SUnazys3mKT3Ts2/Xge3tpudVAOtZ9UPpFkSKovL0NWmCKvS6Y7ppnz5eDk0CUFv4f29l5n2dtz24D/hrA6dylovxyEBV7swl2i3MiVWkP3VD3XqbmQiFNn5/QaGmmof4ukScqgddYjjGa0HB8mOPP6xtDmoJsLeBlWdX53KSR9OKSXEhGvyk7mMhNWVOi1++xU1jCq+3IzTi8YMTenpqI5f/vuQ7nh0NSEi1i4PXdHd4dSQo7vfqbYNLDsVmlMNw4NeDcBcvpdtPPo9snEJYiRJSuq1Bkv1Ap9OblbhxT0aekrSlHIWjw/wRycxQWPxUdlqcpSOg8pmHXx65CDf9eWSdd6oeik3p5oTec6HYk9vTNrlWlHTmohlZ1oiF7xkgWLg5e1OEprscvFnk9oCqO1jPAtC/VWF7vftLX3gF4t3UVdnQ0amcRSUM9GSZGUQeuspyNHPPitYx0XzVXo9G+yjBNZVDgHd+BvaeLfr06LFlYeJDuwkt5e0AP2WzDw3ffVvLnZhPb6STpM36LxeXeseag3eHard1C/RaaTnUt105OX1cuIXwX7ihvojcPdGxKRrcdbPXrqLukL2SF736ylBtSMdaGz8Xk4XaQF/RD97p0Mqe7r95+GA8m1RcFR1l0REV0FjegsS5LnvKpLsw7TsjvTA/jYCJ3hMD4L1TzbGbGeOn9pieal1RsrYzA68UprSFVzQvFW67iYsMLZihyVutyPhcNWq3d5fp/JvP/46H3x4o/v1yWmyCho8kBGeA4Iv2lOvgB0ZRkMJp7Xy7RGDbLzEFtDdmK6ayRb5Ku8Q00PzSbQiLoWms4iaqncg1VapLh8BepytZvmMljXSGb+Vppi8bf+6EsUqt+i8L/PG3f+g36rJTxvGFZe9MuL1Yv9y8gV3GReApcG5rGxGttoYkAWtkuAuGyA8NAQcN51Xl5h7k9yXp6XLEQoinUSKoMNUJVkjwR1sAVqnhynMgbuE+QQTYoyMaASeUhW+AwkC2nOYg20hg3QWbJHPh4ki3ClTY7TT9EQJiinbkE6j0E9KuKdRIJ8lKxVuZ/Y46/QBE4tCUdLd7CuU5JIiUt++k8gYZuwExPfbMfG1sQ/WgmiL2yAc0Uio1UP5tcD0adnEhL+V7vrPhEimtAaC6B4I30FwZuVdhAMhaS+3jOJ/PwVoCHAodiMZZ/adwCLo7s9QQpxJAsoT3JkoWWHMjWGOQ3bxFJVDdHmWhQCgj5VAS57FITIZGM9gOFZJ7BCl2aGBG3nXzRnvfs8sfdz2H0r8jcE84gkK6qmG6ZlO67nywrkBG8GDQ6Z5nSV6yVbNkSZ8saAwyOr1ELmjCuHUSfZ5ut3yEVwHZswxfkG0Wsrpwh6QW2VSSx99knZkHXr7HPhQC1rCwumbFU6eN/JJgIAAA==') format('woff2'),
  url('iconfont.woff?t=1591079331558') format('woff'),
  url('iconfont.ttf?t=1591079331558') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1591079331558#iconfont') format('svg'); /* iOS 4.1- */
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

.icon-play:before {
  content: "\e9f9";
}

.icon-play1:before {
  content: "\e6e2";
}

.icon-pause1:before {
  content: "\e6a6";
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

.icon-next:before {
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
