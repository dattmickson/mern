import React from 'react'; 
import { Component } from 'react';
import NavBarHeader from './nav';
import Video from './video/video';
import Signin from './auth/signin';
import ListItem from './list/new-list-item';

export default class App extends Component {
		render() {
			return (
  			<div>
  				<NavBarHeader />
  				
  				<Video />
  				<ListItem />
  				{this.props.children}
			</div>
			);
		}
}
