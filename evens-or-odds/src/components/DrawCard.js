import React from 'react';
import { connect } from 'react-redux';

const DrawCard = props => {
  console.log('DrawCard props', props);

  return (
    <div>
      <button>Draw the next card!</button>
    </div>
  )
}

export default connect(
  ({ deck: { deck_id } }) => ({ deck_id })
)(DrawCard);
