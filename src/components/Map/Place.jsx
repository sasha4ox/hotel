import React from 'react';

export const Place = props => {
  const K_WIDTH = 40;
  const K_HEIGHT = 40;

  const greatPlaceStyle = {
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
    border: '5px solid #20232a',
    borderRadius: K_HEIGHT,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#61dafb',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
  };

  return (
    <div>
      <div style={greatPlaceStyle}>{props.text}</div>
    </div>
  );
};
