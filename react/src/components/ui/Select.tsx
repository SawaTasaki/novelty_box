type Option = {
  label: string;
  value: string;
};

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export const Select = ({ value, options, onChange }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-black text-sm bg-white"
    >
      <option value="">選択してください</option>

      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
