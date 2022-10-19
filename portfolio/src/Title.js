import React, { Component } from 'react';

const TITLES = [
  'a software engineer',
  'a music lover',
  'an enthusiastic learner',
  'an adventure seeker'
];

class Title extends Component {
  state = { titleIndex: 0 };

  componentDidMount() {
    console.log('Title component has mounted');

    this.animateTitles();
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });
    }, 4000);
  }

  render() {
    const { titleIndex } = this.state;

    const title = TITLES[titleIndex];

    return (
      <p>I am {title}</p>
    )
  }
}

export default Title;
