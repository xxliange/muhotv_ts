import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
	Redirect,
	useHistory,
	useRouteMatch,
	useParams} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import WebHome from './core/web/home';
import MHome from './core/mobile/home';
import WNav from "./components/nav/webNav";

const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

const Topics = () => {
	let match = useRouteMatch();
	return(
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<NavLink activeClassName='active' to={`${match.url}/components`}>Components</NavLink>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>
						Props-v-state
					</Link>
				</li>
			</ul>

			<Switch>
				<Route path={`${match.path}/:topicId`}>
					<Topic/>
				</Route>
				<Route path={match.path}>
					<h3>Please select a topic.</h3>
				</Route>
			</Switch>
		</div>
	)
};

const Topic = () =>{
	let {topicId} = useParams();
	console.log(topicId);
	return <h3>Requested topic ID : {topicId}</h3>
}




function App() {
	return (
		<Router>
			<div>
				<nav>
					<WNav />
				</nav>

				<Switch>
					<Route path='/about'>
						<About/>
					</Route>
					<Route path='/topics'>
						<Topics/>
					</Route>
					<Route path='/'>
						<Home/>
					</Route>
				</Switch>

			</div>
		</Router>
	);
}

export default App;
