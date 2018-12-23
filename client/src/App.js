import React, { Component } from 'react';
import { Button } from "@blueprintjs/core";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch('/api/movies')
      .then(response => response.json() )
      .then(data => this.setState ({ movies: data}));
  }

  render() {
    return (
      <div>
          <ul>
            {this.state.movies.map( movie =>
              <li>{movie.title}</li>
            )}
          </ul>
      </div>
    );
  }
}

export default App;
