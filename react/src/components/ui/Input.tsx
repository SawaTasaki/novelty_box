type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Input = ({ value, onChange, placeholder }: Props) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-black text-sm"
    />
  );
};
