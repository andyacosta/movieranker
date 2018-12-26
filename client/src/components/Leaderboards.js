import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../actions/movieActions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Leaderboards extends Component {

    componentWillMount() {
        this.props.movieActions.fetchMovies();
    }

    renderData() {
        return <ul>{this.props.movies.map(movie => { return <li>{movie.title}</li>})}</ul>;
    }
    
    render() {
        return (
        <div>
            <div>
                <h2>Leaderboards</h2>
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

Leaderboards.propTypes = {
  movieActions: PropTypes.object,
  movies: PropTypes.array
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    movieActions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboards);
