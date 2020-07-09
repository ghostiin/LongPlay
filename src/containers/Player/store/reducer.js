import produce from 'immer';
import { playMode } from '../../../api/config';
import {
	SET_PLAYING_STATE,
	SET_PLAYLIST,
	SET_SHUFFLE_LIST,
	SET_PLAY_MODE,
	SET_CURRENT_IDX,
	SET_CURRENT_SONG
} from './constants';

const playListData = [
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p1.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 4,
		noCopyrightRcmd: null,
		djId: 0,
		no: 4,
		fee: 8,
		v: 31,
		mv: 0,
		pop: 35,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 223066,
		h: {
			br: 320000,
			fid: 0,
			size: 8925562,
			vd: -22400
		},
		l: {
			br: 128000,
			fid: 0,
			size: 3570251,
			vd: -18400
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 5355355,
			vd: -19800
		},
		name: 'Secret Door',
		id: 16502004,
		privilege: {
			id: 16502004,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 261,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p1.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 4,
		noCopyrightRcmd: null,
		djId: 0,
		no: 4,
		fee: 8,
		v: 31,
		mv: 0,
		pop: 35,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 223066,
		h: {
			br: 320000,
			fid: 0,
			size: 8925562,
			vd: -22400
		},
		l: {
			br: 128000,
			fid: 0,
			size: 3570251,
			vd: -18400
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 5355355,
			vd: -19800
		},
		name: 'Secret Door',
		id: 16502004,
		privilege: {
			id: 16502004,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 261,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p1.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 1,
		noCopyrightRcmd: null,
		djId: 0,
		no: 1,
		fee: 8,
		v: 28,
		mv: 0,
		pop: 25,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 205746,
		h: {
			br: 320000,
			fid: 0,
			size: 8232795,
			vd: -22500
		},
		l: {
			br: 128000,
			fid: 0,
			size: 3293144,
			vd: -18500
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 4939694,
			vd: -19900
		},
		name: 'My Propeller',
		id: 16502001,
		privilege: {
			id: 16502001,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 261,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p2.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 1,
		noCopyrightRcmd: null,
		djId: 0,
		no: 2,
		fee: 8,
		v: 31,
		mv: 512053,
		pop: 80,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 224826,
		h: {
			br: 320000,
			fid: 0,
			size: 8995570,
			vd: -40100
		},
		l: {
			br: 128000,
			fid: 0,
			size: 3598254,
			vd: -35800
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 5397360,
			vd: -37500
		},
		name: 'Crying Lightning',
		id: 16502002,
		privilege: {
			id: 16502002,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 263,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p2.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 1,
		noCopyrightRcmd: null,
		djId: 0,
		no: 3,
		fee: 8,
		v: 29,
		mv: 0,
		pop: 40,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 210666,
		h: {
			br: 320000,
			fid: 0,
			size: 8429236,
			vd: -25000
		},
		l: {
			br: 128000,
			fid: 0,
			size: 3371720,
			vd: -21099
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 5057559,
			vd: -22600
		},
		name: 'Dangerous Animals',
		id: 16502003,
		privilege: {
			id: 16502003,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 263,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},

	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p1.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 1,
		noCopyrightRcmd: null,
		djId: 0,
		no: 5,
		fee: 8,
		v: 29,
		mv: 0,
		pop: 15,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 212133,
		h: {
			br: 320000,
			fid: 0,
			size: 8487750,
			vd: -2
		},
		l: {
			br: 128000,
			fid: 0,
			size: 3395126,
			vd: -2
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 5092667,
			vd: -2
		},
		name: 'Potion Approaching',
		id: 16502005,
		privilege: {
			id: 16502005,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 263,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p1.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 1,
		noCopyrightRcmd: null,
		djId: 0,
		no: 6,
		fee: 8,
		v: 29,
		mv: 0,
		pop: 15,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 237533,
		h: {
			br: 320000,
			fid: 0,
			size: 9504436,
			vd: -2
		},
		l: {
			br: 128000,
			fid: 0,
			size: 3801800,
			vd: -2
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 5702679,
			vd: -2
		},
		name: 'Fire And The Thud',
		id: 16502006,
		privilege: {
			id: 16502006,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 263,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p1.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 1,
		noCopyrightRcmd: null,
		djId: 0,
		no: 7,
		fee: 8,
		v: 29,
		mv: 0,
		pop: 40,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 197973,
		h: {
			br: 320000,
			fid: 0,
			size: 7921415,
			vd: -26500
		},
		l: {
			br: 128000,
			fid: 0,
			size: 3168592,
			vd: -22400
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 4752866,
			vd: -23900
		},
		name: 'Cornerstone',
		id: 16502007,
		privilege: {
			id: 16502007,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 263,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p2.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 1,
		noCopyrightRcmd: null,
		djId: 0,
		no: 8,
		fee: 8,
		v: 29,
		mv: 0,
		pop: 25,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 283493,
		h: {
			br: 320000,
			fid: 0,
			size: 11342411,
			vd: -13300
		},
		l: {
			br: 128000,
			fid: 0,
			size: 4536991,
			vd: -9200
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 6805464,
			vd: -10800
		},
		name: 'Dance Little Liar',
		id: 16502008,
		privilege: {
			id: 16502008,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 263,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p2.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 1,
		noCopyrightRcmd: null,
		djId: 0,
		no: 9,
		fee: 8,
		v: 29,
		mv: 0,
		pop: 15,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 220506,
		h: {
			br: 320000,
			fid: 0,
			size: 8823162,
			vd: -22300
		},
		l: {
			br: 128000,
			fid: 0,
			size: 3529291,
			vd: -18200
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 5293915,
			vd: -19700
		},
		name: 'Pretty Visitors',
		id: 16502009,
		privilege: {
			id: 16502009,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 263,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	},
	{
		rtUrls: [],
		ar: [
			{
				id: 85508,
				name: 'Arctic Monkeys',
				tns: [ '北极猴乐队' ]
			}
		],
		al: {
			id: 1523043,
			name: 'Humbug',
			picUrl: 'https://p1.music.126.net/t29tle-eJ1pOLEYEjAzIZA==/109951163351782012.jpg',
			pic_str: '109951163351782012',
			pic: 109951163351782020
		},
		st: 1,
		noCopyrightRcmd: null,
		djId: 0,
		no: 10,
		fee: 8,
		v: 28,
		mv: 0,
		pop: 35,
		rt: '',
		mst: 9,
		cp: 743010,
		crbt: null,
		cf: '',
		dt: 344053,
		h: {
			br: 320000,
			fid: 0,
			size: 13764485,
			vd: -9600
		},
		l: {
			br: 128000,
			fid: 0,
			size: 5505820,
			vd: -5500
		},
		rtUrl: null,
		ftype: 0,
		rtype: 0,
		rurl: null,
		pst: 0,
		t: 0,
		alia: [],
		cd: '1',
		a: null,
		m: {
			br: 192000,
			fid: 0,
			size: 8258708,
			vd: -7000
		},
		name: "The Jeweller's Hands",
		id: 16502010,
		privilege: {
			id: 16502010,
			fee: 8,
			payed: 0,
			st: 0,
			pl: 128000,
			dl: 0,
			sp: 7,
			cp: 1,
			subp: 1,
			cs: false,
			maxbr: 999000,
			fl: 128000,
			toast: false,
			flag: 261,
			preSell: false,
			playMaxbr: 999000,
			downloadMaxbr: 999000,
			chargeInfoList: [
				{
					rate: 128000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 0
				},
				{
					rate: 192000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 320000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				},
				{
					rate: 999000,
					chargeUrl: null,
					chargeMessage: null,
					chargeType: 1
				}
			]
		},
		eq: 'rock'
	}
];
const defaultState = {
	playing: false,
	playList: playListData,
	defaultList: playListData,
	mode: {
		repeat: false,
		shuffle: false,
		looplist: false
	},
	currentIdx: -1,
	currentSong: {}
};

const reducer = (state = defaultState, action) =>
	produce(state, (draftState) => {
		switch (action.type) {
			case SET_PLAYING_STATE:
				draftState.playing = action.payload;
				return draftState;
			case SET_PLAYLIST:
				draftState.playList = action.payload;
				return draftState;
			case SET_SHUFFLE_LIST:
				draftState.shuffleList = action.payload;
				return draftState;
			case SET_PLAY_MODE:
				draftState.mode = { ...draftState.mode, ...action.payload };
				return draftState;
			case SET_CURRENT_IDX:
				draftState.currentIdx = action.payload;
				return draftState;
			case SET_CURRENT_SONG:
				draftState.currentSong = action.payload;
				return draftState;
			default:
				return draftState;
		}
	});

export default reducer;
