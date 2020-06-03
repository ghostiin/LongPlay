import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Intro from '../containers/introPage';
import Play from '../containers/playPage';
import Library from '../containers/libraryPage';
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
				component: Library
			},
			{
				path: '/box',
				component: Box
			}
		]
	}
];
