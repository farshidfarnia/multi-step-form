import React from 'react';

interface CircleButtonTextProps {
  text: string;
  subtext: string;
}

const CircleButtonText: React.FC<CircleButtonTextProps> = ({ text, subtext }) => {
  return (
    <div className="circle-button-text">
      <span className="subtext">{subtext}</span>
      <br />
      <span className="text">{text}</span>
    </div>
  );
}

export default CircleButtonText;