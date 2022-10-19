import React, { Component } from 'react';

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is David. I'm a software engineer.</p>
        <p>I'm always looking forward to work on meaningful projects.</p>
      </div>
    ); 
  }
}

export default App;
