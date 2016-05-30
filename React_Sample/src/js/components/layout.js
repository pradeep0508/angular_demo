import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import LandingPage from "../pages/LandingPage"
import {Link} from "react-router";

export default class Layout extends React.Component{

	constructor(){
		super();
		this.state={title:"Pradeep"};
	}
	
	changeTitle(title){
			this.setState({title});
		}
	
	render(){
		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
				
				<LandingPage/>
				<Footer/>
			</div>

			);
	}
}