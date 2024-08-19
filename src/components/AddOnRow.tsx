interface AddOnRowProps {
  title: string;
  description: string;
  price: string;
  isSelected: boolean;
  onToggle: () => void;
}

export const AddOnRow = ({
  title,
  description,
  price,
  isSelected,
  onToggle,
}: AddOnRowProps) => {
  return (
    <div
      className={`add-on ${isSelected ? "selected" : ""}`}
      onClick={onToggle}
    >
      <input
        type="checkbox"
        checked={isSelected}
        readOnly
        className="add-on-checkbox"
      />
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

const AddOnPrice = ({ price }: { price: string }) => {
  return <p className="price">{price}</p>;
};
