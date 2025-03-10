import { render, screen } from '@testing-library/react';

// Components
import Status, { StatusType } from '..';

describe('Status Component', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<Status status={StatusType.ACTIVE} />);
    expect(container).toMatchSnapshot();
  });

  it('displays correct text based on status prop', () => {
    render(<Status status={StatusType.BANNED} />);
    expect(screen.getByText('Banned')).toBeInTheDocument();
  });

  it('applies the correct background color based on status', () => {
    render(<Status status={StatusType.FAILED} />);
    expect(screen.getByText('Failed')).toHaveClass('bg-yellow-500');
  });

  it('renders with additional className if provided', () => {
    render(<Status status={StatusType.ONLINE} className='custom-class' />);
    expect(screen.getByText('Online')).toHaveClass('custom-class');
  });
});
