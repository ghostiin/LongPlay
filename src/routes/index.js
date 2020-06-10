import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Intro from '../containers/introPage';
// import Play from '../containers/playPage';
// import Library from '../containers/libraryPage';
// import Box from '../containers/boxPage';
// import Search from '../containers/searchPage';
import LibraryAlbumDetail from '../containers/libraryPage/AlbumDetail';
import BoxAlbumDetail from '../containers/boxPage/AlbumDetail';
import SearchAlbumDetail from '../containers/searchPage/AlbumDetail';

const SuspenseComponent = (Component) => (props) => {
	return (
		<Suspense fallback={null}>
			<Component {...props} />
		</Suspense>
	);
};

const PlayComponent = lazy(() => import('../containers/playPage'));
const LibraryComponent = lazy(() => import('../containers/libraryPage'));
const SearchComponent = lazy(() => import('../containers/searchPage'));
const BoxComponent = lazy(() => import('../containers/boxPage'));
export default [
	{
		path: '/',
		component: Home,
		routes: [
			{
				path: '/',
				exact: true,
				render: () => <Redirect to={'/intro'} />
			},
			{
				path: '/intro',
				component: Intro
			},
			{
				path: '/play',
				component: SuspenseComponent(PlayComponent)
			},
			{
				path: '/library',
				component: SuspenseComponent(LibraryComponent),

				routes: [
					{
						path: '/library/:id',
						component: LibraryAlbumDetail
					}
				]
			},
			{
				path: '/search',
				component: SuspenseComponent(SearchComponent),
				routes: [
					{
						path: '/search/:id',
						component: SearchAlbumDetail
					}
				]
			},

			{
				path: '/box',
				component: SuspenseComponent(BoxComponent),
				routes: [
					{
						path: '/box/:id',
						component: BoxAlbumDetail
					}
				]
			}
		]
	}
];
