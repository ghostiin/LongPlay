import { playMode } from '../../../api/config';

const defaultState = {
	playing: false,
	playlist: [],
	shufflePlaylist: [],
	mode: playMode.default,
	currentIdx: -1,
	currentSong: {}
};
