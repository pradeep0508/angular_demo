import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import About from "./pages/About";
import PhoneBook from "./pages/PhoneBook";
import WeatherReport from "./pages/WeatherReport";

const app=document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			
		</Route>
	</Router>,app
	);

// <IndexRoute 
// 				component={About}>
// 			</IndexRoute>
// 			<Route path="about" 
// 				component={About}>
// 			</Route>
// 			<Route path="weatherReport" 
// 					component={WeatherReport}>
// 			</Route>