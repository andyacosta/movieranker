import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Movie extends Component {
    render() {
        console.log(this.props.movies);
        let movie = this.props.movies.filter( m => m._id == this.props.match.params.id)[0];
        return (
        <div>
            <h2>{movie.title}</h2>
            <h3>{movie.director}</h3>
            <p>{movie.year}</p>
        </div>
        );
    }
}

function mapStateToProps(state){
   return {
       movies: state.movies
   };
}

export default withRouter(connect(mapStateToProps)(Movie));
