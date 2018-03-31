/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
	state = {
		movie: {},
	}

	async componentDidMount() {
		try {
			const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=d72eda0062330ad8f232c438f6d3efd1&language=en-US`);
			const movie = await result.json();
			this.setState({
				movie,
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const { movie } = this.state;
		return (
			<div className="movie-wrapper" style={{ backgroundImage: `url(${BACKDROP_PATH}${movie.backdrop_path})` }}>
				<div className="movie-info">
					<Overdrive id={movie.id}>
						<img className="poster" src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
					</Overdrive>
					<div>
						{movie.title ? (
							<h1>{movie.title}</h1>
						) : (
							<h1>No movie title available</h1>
						)}
						<h3>{movie.release_date}</h3>
						<p>{movie.overview}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieDetail;
