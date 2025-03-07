import { Button as ButtonRadix } from '@radix-ui/themes';

export interface ButtonProps
  extends Partial<Pick<HTMLButtonElement, 'className'>> {
  isDisable?: boolean;
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  isDisable,
  text,
  onClick,
  icon,
  className,
}) => {
  return (
    <ButtonRadix onClick={onClick} disabled={isDisable} className={className}>
      {icon && <span>{icon}</span>}
      {text}
    </ButtonRadix>
  );
};

export default Button;
