import React 		from "react";
import Header 		from "./Header"
import Footer 		from "./Footer"
import LandingPage 	from "../pages/LandingPage"
import {Link} 		from "react-router";
import request 		from 'superagent'
import _ 			from 'lodash';


export default class Layout extends React.Component{

	constructor(){
		super();
		this.state={title:"Pradeep",movies:"null",movieName:"Batman"};
	}
	//This will call right before component added to the page
	//We should use this for serice calls
	componentWillMount(){
		console.log("componentWillMount--1");
		this.fetchMovieListFromServer();
	}
	
	//This is called right after component rendered to the page
	componentDidMount(){
		console.log("componentDidMount--2");
		var hitButton=document.getElementById("btnHitMe");
		console.log(hitButton);
	}
	//Whenever component property get changed
	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps--3" + nextProps);
		if(this.props.userId!=nextProps){
			//do your code here
		}
	}
	
	
	componentWillUpdate(nextProps,nextState){
		console.log("componentWillUpdate--4" + JSON.stringify(nextState.movieName) + nextProps);
	}
	componentWillUnmount(){
		console.log("componentWillUnmount--5");
	}
	changeTitle(title){
			this.setState({title});
		}
		
		searchMovies(){
			this.setState({movieName:this.refs.query1.value});
			//this.fetchMovieListFromServer(this.refs.query1.value);
		}
		
	fetchMovieListFromServer(param= 'Batman'){
		console.log("fetchMovieListFromServer", param);
		var url="http://www.omdbapi.com/?s=" + param + "&page=1";
		request.get(url).then((response)=>{
			this.setState({
				movies:response.body.Search
			});
		});
	}
	render(){
		var movies=_.map(this.state.movies,(movie)=>{
					return <li key={movie.imdbID}><h1>{movie.Title}</h1></li>
				});
		return (
			<div  className="">
				<input 	type="text" 
						ref="query1" 
						value={this.state.movieName} 
						onChange={(e)=>{this.searchMovies();}}/>
						
				<button id="btnHitMe" 
						onClick={(e)=> {this.fetchMovieListFromServer(this.state.movieName)}} >Hit Me!!
						</button>
				<ul> {movies}</ul>
				
			</div>
			);
			
			//<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
				// <LandingPage/>
				// <Footer/>
	}
}