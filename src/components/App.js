/* eslint react/no-did-mount-set-state: 0 */

import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
} from 'react-router-dom';

import logo from '../images/logo.svg';

// Components
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
	<Router>
		<div className="App">
			<header className="App__header">
				<Link to="/">
					<img src={logo} className="logo" alt="logo" />
				</Link>
			</header>
			<Switch>
				<Route exact path="/" component={MoviesList} />
				<Route path="/:id" component={MovieDetail} />
			</Switch>
		</div>
	</Router>
);


export default App;
