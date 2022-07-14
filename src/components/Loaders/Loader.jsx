import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

const Loader = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <BeatLoader color="#c21857" />
    </div>
  );
};

export default Loader;
