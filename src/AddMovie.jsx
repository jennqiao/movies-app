import React from 'react';
import ReactDOM from 'react-dom';	

class Add extends React.Component {

  constructor(props) {
	super(props);
	this.state = {
		input: "test"
	};
  }

  handleUserInput (e) {
  	this.setState({
  	  input: e.target.value
  	})
  }
  

  render() {
	return (
		<div>
		<input type='text' placeholder="Add movie title here" onChange={this.handleUserInput.bind(this)}></input>
		<button className="addButton" onClick={ () => {this.props.handleAdd(this.state.input)}} >Add</button></div>
	)
  }


}
	
window.Add = Add;
