import React from 'react';
import ReactDOM from 'react-dom';
import './../src/style/style.css';
import './../src/exampleMovieList.js'
import './../src/Movie.jsx'
import './../src/Search.jsx'
import './../src/AddMovie.jsx'
var _ = require('underscore');



class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      // filteredList: [],
      searchTerm: '',
      noResults: false
    };
  }

  handleSearch(e) {
  	if (e.length < 1) {
  		this.setState({
  		noResults: false,
  		searchTerm: ''
  		});

  	} else {
  		let lowerCaseValue = e.toLowerCase();
	  	let hasResults = _.some(this.state.movies, (movie)=> {
	  		return movie.title.toLowerCase().includes(lowerCaseValue);
	  	});
	  	this.setState({
  		noResults: !hasResults,
  		searchTerm: lowerCaseValue
  		});
  	}
  	
  }

  handleAdd(input) {
  	let movie = {
  		title: input,
  		hasWatched: false
  	};

  	let copiedMovies = this.state.movies.slice();
  	copiedMovies.push(movie);
  	this.setState({
  		movies: copiedMovies
  	});

  	$('input').val('');

  }



  render() {
  	if (this.state.noResults) {
  		return (
  			<div className="app container border">
       	 	<h1 className="page-header">Jenn's MovieList</h1>
       	 	<Add handleAdd={this.handleAdd.bind(this)}/>
        	<Search handleSearch={this.handleSearch.bind(this)}/>
        	<div>Whoops! We've found none. </div>
        	</div>
  		)
  	} else { 
  		return (
     	 	<div className="app container border">
        	<h1 className="page-header">Jenn's MovieList</h1>
        	<Add handleAdd={this.handleAdd.bind(this)}/>
        	<Search handleSearch={this.handleSearch.bind(this)}/>
        	{this.state.movies.map( (movie) => {
        		if (movie.title.toLowerCase().includes(this.state.searchTerm)) {
        	// 	let hasResults = true;
        		return <Movie movie={movie} />
        		}
        	})}
      		</div>
    	)
  	}
    
  }

};

ReactDOM.render(<Movies/>, document.getElementById('app'));
