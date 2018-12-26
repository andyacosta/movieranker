import React, { Component } from 'react';
import './App.css';
import GridLayout from 'react-grid-layout';
import Navigation from './components/Navigation';
import {Breadcrumbs, IBreadcrumbProps} from '@blueprintjs/core';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './components/Home';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from './actions/movieActions';

import Leaderboards from './components/Leaderboards';
import Movies from './components/Movies';
import Movie from './components/Movie';

const BREADCRUMBS: IBreadcrumbProps[] = [
  { href: "/movies", text: "Movies" },
  { href: "/movie/id", text: "Selected Movie"}
];

class App extends Component {

  componentWillMount() {
      this.props.movieActions.fetchMovies();
  }


  render() {
    var layout = [
      {i: 'breadcrumbs', x: 0, y: 0, w: 12, h: 1, static: true}
    ];

    return (
      
      <div>
        <Navigation />
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key="breadcrumbs">
            <Breadcrumbs items={BREADCRUMBS}/>
          </div>
        </GridLayout>
        <div>
        </div>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/leaderboards" component={Leaderboards}/>
            <Route exact={true} path="/movies" component={Movies}/>
            <Route path="/movies/:id" component={Movie}/>
             
      </div>
    );
  }
}

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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
