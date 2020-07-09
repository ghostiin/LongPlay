import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Vol from '../containers/Vol';
import Albums from '../containers/Albums';
import AlbumDetail from '../containers/Albums/AlbumDetail';
import Zen from '../containers/Zen';

export default [
	{
		path: '/zen',
		component: Zen
	},

	{
		component: Home, // 公共组件home
		routes: [
			{
				path: '/vol',
				component: Vol
			},
			{
				path: '/albums',
				component: Albums,
				routes: [
					{
						path: '/albums/:id',
						component: AlbumDetail
					}
				]
			},
			{
				path: '/',
				exact: true,
				render: () => <Redirect to='/vol' />
			}
		]
	}
];
