import React from 'react';
import './App.css';
import MovieListEntry from './MovieListEntry.js'
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }


  render() {
    return (
      <div className="App">
        <div id="Search"><h5><Search /></h5></div>
          <div id = "movieList">
            <div id = "movieListEntry"><h5><MovieListEntry /></h5></div>
          </div>
      </div>
    );
  }
}

export default App;




