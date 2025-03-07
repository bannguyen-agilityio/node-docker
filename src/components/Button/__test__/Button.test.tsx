import { render, screen } from '@testing-library/react';

// Components
import Button from '..';

describe('Button Component', () => {
  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<Button text='Click me' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders button with correct text', () => {
    render(<Button text='Click me' />);
    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it('disables button when isDisable is true', () => {
    render(<Button text='Click me' isDisable />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders icon if provided', () => {
    render(
      <Button text='Click me' icon={<span data-testid='icon'>🔥</span>} />,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
