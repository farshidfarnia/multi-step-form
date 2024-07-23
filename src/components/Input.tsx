interface IInputProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const Input = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  error,
}: IInputProps) => {
  return (
    <div className="input-container">
      <div className="input-label-error">
        <label>{label}</label>
        {error && <p className="error">{error}</p>}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
