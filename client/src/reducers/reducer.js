import initialState from './initialState';
import {FETCH_MOVIES, RECEIVE_MOVIES} from '../actions/actionTypes';

export default function movies(state = initialState.movies, action){
    let newState;
    switch(action.type){
        case FETCH_MOVIES:
            console.log('FETCH_MOVIES action');
            return action;
        case RECEIVE_MOVIES:
            newState = action.movies || [];
            console.log('RECEIVE_MOVIES action');
            return newState;
        default:
            return state;
    }
}