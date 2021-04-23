import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../pages/home';

const routesList = [
	{
		link: '/',
		component: () => {
			return <Redirect to={'/home'} />;
		},
	},
	{
		link: '/home',
		component: Home,
	},
];

const Routes = props => {
	return (
		<Switch>
			{routesList.map(({ component: Component, link, ...rest }, index) => {
				return <Route {...props} key={index} exact path={link} render={props => <Component {...props} {...rest} />} />;
			})}
		</Switch>
	);
};

export default Routes;
