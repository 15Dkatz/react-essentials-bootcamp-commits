import React, { Component } from 'react';

class App extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = event => {
    console.log('event.target.value', event.target.value);
    this.setState({ artistQuery: event.target.value });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  }

  searchArtist = () => {
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an artist'
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    ); 
  }
}

export default App;
