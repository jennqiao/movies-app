import React from 'react';
import ReactDOM from 'react-dom';	

var Movie = ({movie}) => (
	
		<div className = "movie container border">{movie.title}
			<span><button className="watchToggle">Watched</button></span>
		</div>
	
)

window.Movie = Movie;
