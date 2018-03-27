import React from 'react';
import ReactDOM from 'react-dom';	

var Search = ({handleSearch}) => (
	<div>
	<input type='text' placeholder="Search..." onChange={ (e) => {handleSearch(e.target.value)}}></input>
	<button>Go!</button></div>
)

window.Search = Search;
