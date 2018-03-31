/* eslint react/no-did-mount-set-state: 0 */

import React, { PureComponent } from 'react';

// Components
import Movie from './Movie';

class MoviesList extends PureComponent {
	state = {
		movies: [],
	}

	async componentDidMount() {
		try {
			const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d72eda0062330ad8f232c438f6d3efd1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
			const movies = await result.json();
			this.setState({
				movies: movies.results,
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div className="movie-grid">
				{this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
			</div>
		);
	}
}

export default MoviesList;
