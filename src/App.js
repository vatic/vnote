import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="filter-area col-md-4"></div>
          <div className="controls col-md-8"></div>
        </div>
        <div className="row">
          <div className="notes-list col-md-4">
            <ul>
              <li className="note-in-list">
                Интересно, какой размер этого окна. ))
              </li>
              <li className="note-in-list">
                Надо попробовать сделать аналог.
                Назовём vnotes.
              </li>
              <li className="note-in-list">
                Getting the most out of Simplenote
                Thanks for signing up!
              </li>
            </ul>
          </div>

          <div className="current-note col-md-8"></div>
        </div>
      </div>
    );
  }
}

export default App;
