import React from 'react';

interface SummaryItemProps {
  title: string;
  children: React.ReactNode;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ title, children }) => {
  return (
    <div className="summary-item">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default SummaryItem;