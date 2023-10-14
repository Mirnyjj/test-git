// import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';

// декларативный стиль
export const App = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<h1>{currentYear}</h1>
			</header>
		</div>
	);
};

// императивный стил
// export function App() {
// 	return createElement(
// 		'div',
// 		{ className: 'App' },

// 		createElement(
// 			'h1',
// 			{ className: 'App-header' },

// 			createElement('img', {
// 				src: logo,
// 				className: 'App-logo',
// 				target: '_blank',
// 				alt: 'logo',
// 			}),

// 			createElement(
// 				'p',
// 				{ className: '' },
// 				'Edit <code>src/App.js</code> and save to reload 2.',
// 			),

// 			createElement('h1', { className: '' }, new Date().getFullYear()),
// 		),
// 	);
// }
