// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default Header;
