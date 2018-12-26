import * as types from './actionTypes';

function url() {
	return 'api/movies';
}

export function receiveMovies(json) {
	return {type: types.RECEIVE_MOVIES, movies: json};
}

export function fetchMovies(){
	return dispatch => {
		return fetch(url())
		.then(response => response.json() )
		.then(json => dispatch(receiveMovies(json)) );
	}
}