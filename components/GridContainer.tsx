import React from 'react';
import DraggableComponent from './DraggableComponent';

const GridContainer: React.FC = () => {
  return (
    <div
      style={{
        width: '500px',
        height: '500px',
        overflow: 'auto',
        position: 'relative',
        border: '1px solid black',
      }}
    >
      <DraggableComponent id={1} initialX={0} initialY={0} />
      <DraggableComponent id={2} initialX={100} initialY={100} />
      {/* Add more components as needed */}
    </div>
  );
};

export default GridContainer;
