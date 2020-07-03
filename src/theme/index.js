import 'typeface-libre-barcode-39-text'; // 引入本地字体
import 'typeface-lora';
import 'typeface-poppins';

const noWrap = () => `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
	`;

export default {
	bgColorLight: '#9377D2',
	bgColorDark: '#432D77',
	mainColor: '#783EDE',
	darkColor: '#18141A',
	textColor: '#fff',
	subColor: 'rgba(255,255,255,0.5)',
	boxShadow: '0rem 0rem 2rem 0rem rgba(0, 0, 0, 0.4)',
	specialFont: `'Libre Barcode 39 Text', cursive`,
	sansFont: `'Poppins', sans-serif`,
	seridFont: `'Lora', serif`,
	logoFont: `'MuseoModerno-Bold', cursive`,
	noWrap
};
