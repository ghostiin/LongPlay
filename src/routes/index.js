import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Vol from '../containers/Vol';
import Albums from '../containers/Albums';
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
				component: Albums
			},
			{
				path: '/',
				exact: true,
				render: () => <Redirect to='/vol' />
			}
		]
	}
];
