import React from 'react';

interface AddOnRowProps {
  title: string;
  description: string;
  price: string;
  isSelected: boolean;
  onToggle: () => void;
}

const AddOnRow: React.FC<AddOnRowProps> = ({ title, description, price, isSelected, onToggle }) => {
  return (
    <div className={`add-on ${isSelected ? 'selected' : ''}`} onClick={onToggle}>
      <input type="checkbox" checked={isSelected} readOnly className="add-on-checkbox" />
      <div className="add-on-content">
        <div className="add-on-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <AddOnPrice price={price} />
      </div>
    </div>
  );
};

const AddOnPrice: React.FC<{ price: string }> = ({ price }) => {
  return (
    <p className="price">{price}</p>
  );
};

export default AddOnRow;