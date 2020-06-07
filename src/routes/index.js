import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Intro from '../containers/introPage';
import Play from '../containers/playPage';
import Library from '../containers/libraryPage';
import LibraryAlbumDetail from '../containers/libraryPage/AlbumDetail';
import Search from '../containers/searchPage';
import BoxAlbumDetail from '../containers/boxPage/AlbumDetail';
import SearchAlbumDetail from '../containers/searchPage/AlbumDetail';
import Box from '../containers/boxPage';

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
				component: Play
			},
			{
				path: '/library',
				component: Library,

				routes: [
					{
						path: '/library/:id',
						component: LibraryAlbumDetail
					}
				]
			},
			{
				path: '/search',
				component: Search,
				routes: [
					{
						path: '/search/:id',
						component: SearchAlbumDetail
					}
				]
			},

			{
				path: '/box',
				component: Box,
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
