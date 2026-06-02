type Props = {
  text: string;
  onClick: () => void;
  className?: string;
};

export const Button = ({ text, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        "px-3 py-2 border border-black bg-white text-black text-sm hover:bg-black hover:text-white transition " +
        (className ?? "")
      }
    >
      {text}
    </button>
  );
};
