import { tw } from '@/utils';
import { Button as ButtonRadix } from '@radix-ui/themes';

export interface ButtonProps
  extends Partial<Pick<HTMLButtonElement, 'className'>> {
  isDisable?: boolean;
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'pagination';
}

const Button: React.FC<ButtonProps> = ({
  isDisable,
  text,
  onClick,
  icon,
  variant = 'primary',
  className,
  iconPosition = 'left',
}) => {
  const buttonClasses = tw(
    'px-4 py-2 rounded-md transition-all disabled:opacity-50 cursor-pointer',
    {
      'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
      'bg-gray-200 text-gray-700 hover:bg-gray-300': variant === 'secondary',
      ' bg-white text-[var(--gray-11)] hover:bg-gray-100':
        variant === 'pagination',
    },
    className,
  );
  return (
    <ButtonRadix
      onClick={onClick}
      disabled={isDisable}
      className={buttonClasses}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {text}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </ButtonRadix>
  );
};

export default Button;
