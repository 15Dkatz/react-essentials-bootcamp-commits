import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';

function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex(
        storedIndex => {
          return (storedIndex+1)%PICTURES.length;
        }
      );
    }, 3000);
  }, []);

  console.log('index', index);

  return (
    <div className='Gallery'>
      <img
        src={PICTURES[index].image}
        alt='gallery'
      />
    </div>
  )
}

export default Gallery;
