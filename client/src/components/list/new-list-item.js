import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
 
class ListItem extends Component {
	handleFormSubmit(fromProps) {
		console.log(fromProps);
		//need to do something to log user in
	}
	render(){
		const { fields: { title, category, url, content }, handleSubmit }=this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				<fieldset className="form-group">
					<label>Title:</label>
					<input type="text" {...title} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Category:</label>
					<input type="text" {...category} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>URL:</label>
					<input type="text" {...url} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Content:</label>
					<input type="text" {...content} className="form- text" rows="6"/>
				</fieldset>
				<button action="submit" className="btn btn-primary">Submit</button>
				<Link to='/' className='btn btn-danger'>Cancel</Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewItem',
	fields: ['title', 'category', 'url', 'content']
})(ListItem);