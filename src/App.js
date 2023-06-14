import React, { Component } from "react";
import SongCard from "./Components/SongCard"
import getSongs from "./Services/songs"

class App extends Component { 

    state = {
        songs:[]
      };

      componentDidMount =async()=>
      {
          const getSongsList= await getSongs();
          this.setState(
              {
                  songs:getSongsList
              }
          ); 
      };


      sortSongsByRating = () => {
        const sortedSongs = [...this.state.songs].sort((a, b) => b.rating - a.rating);
        this.setState({ songs: sortedSongs });
      }

      sortSongsByTitle = () => {
        const sortedSongs = [...this.state.songs.sort((a, b) =>a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]
        this.setState({ songs: sortedSongs });
      }
       
  render() {
    
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <button className="st-btn" onClick={this.sortSongsByTitle}>sort by title </button>
        <button className="st-btn" onClick={this.sortSongsByRating}>sort by rating </button>
        <div id="song-list">
       { this.state.songs.length !== 0
      ? this.state.songs.map(s => <SongCard data={s} key={s.id} />)
      : "Loading data..."}
        </div>
      </div>
    );
  }
}


export default App;
