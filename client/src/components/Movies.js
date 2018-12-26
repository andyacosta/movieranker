import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../actions/movieActions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Movie from "./Movie";
import { withRouter } from 'react-router-dom'

class Movies extends Component {

    renderData() {
        return <ul>{this.props.movies.map( (movie, index) => { return <li key={index}><Link to={{ pathname: `/movies/${movie._id}`, state: {movieDetails: movie} }}>{movie.title}</Link></li>})}</ul>;
    }
    
    render() {
        return (
        <div>
            <div>
                <h2>Movies</h2>
            </div>
            <div>
                {this.props.movies ?
                    this.renderData()
                    :
                    <div>
                    No Data
                    </div>
                }
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default withRouter(connect(mapStateToProps)(Movies));