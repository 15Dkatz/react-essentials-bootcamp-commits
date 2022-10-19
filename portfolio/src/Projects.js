import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {
            PROJECTS.map(PROJECT => {
              return (
                <div key={PROJECT.id}>{PROJECT.title}</div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Projects;