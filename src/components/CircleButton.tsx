import React from 'react';

interface CircleButtonProps {
  number: number;
  isActive: boolean;
}

const CircleButton: React.FC<CircleButtonProps> = ({ number, isActive }) => {
    const buttonStyle = {
        backgroundColor: isActive ? '#C0E0FC' : '#473FFF',
        color: isActive ? '#03285B' : '#C0E0FC',
      };
  return (
    <div className={`circle-button ${isActive ? 'active' : ''}`} style={buttonStyle}>
      {number}
    </div>
  );
}

export default CircleButton;
