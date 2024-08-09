import React from 'react';

interface SummaryListProps {
  items: { name: string; cost: number }[];
}

const SummaryList: React.FC<SummaryListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.name} +${item.cost}/mo
        </li>
      ))}
    </ul>
  );
};

export default SummaryList;