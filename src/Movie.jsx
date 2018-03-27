import React from 'react';
import ReactDOM from 'react-dom';	

var Movie = ({movie, handleWatchToggle}) => (
	
		<div className = "movie container border">{movie.title}
			<span><button className={movie.hasWatched ? "watchToggleGreen" : "watchToggle"} onClick={ () => handleWatchToggle(movie) }>Watched</button></span>
		</div>
	
)

window.Movie = Movie;
