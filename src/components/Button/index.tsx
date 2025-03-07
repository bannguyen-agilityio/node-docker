export interface ButtonProps {
  isDisable?: boolean;
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ isDisable, text, onClick, icon }) => {
  return (
    <button
      className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-white transition ${
        isDisable
          ? 'cursor-not-allowed bg-gray-400'
          : 'cursor-pointer bg-blue-600 hover:bg-blue-700'
      }`}
      onClick={!isDisable ? onClick : undefined}
      disabled={isDisable}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
