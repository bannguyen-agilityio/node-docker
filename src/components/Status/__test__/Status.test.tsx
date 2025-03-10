import { render, screen } from '@testing-library/react';

// Constants
import Status from '@/components/Status';

// Components
import { StatusType } from '@/constants';

describe('Status Component', () => {
  it('renders the correct status text with capitalization', () => {
    render(<Status status={StatusType.ACTIVE} />);
    const statusElement = screen.getByText(StatusType.ACTIVE);
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveClass('capitalize');
  });

  it('applies the correct background color for each status', () => {
    const statusColors: Record<StatusType, string> = {
      [StatusType.ACTIVE]: 'bg-green-500',
      [StatusType.ONLINE]: 'bg-green-500',
      [StatusType.BANNED]: 'bg-red-600',
      [StatusType.FAILED]: 'bg-yellow-500',
      [StatusType.OFFLINE]: 'bg-gray-400',
      [StatusType.ENGAGEMENT]: 'bg-gray-400',
    };

    Object.entries(statusColors).forEach(([status, className]) => {
      render(<Status status={status as StatusType} />);
      const statusElement = screen.getByText(status);
      expect(statusElement).toHaveClass(className);
    });
  });

  it('accepts and applies additional custom className', () => {
    render(<Status status={StatusType.BANNED} className='custom-class' />);
    const statusElement = screen.getByText(StatusType.BANNED);
    expect(statusElement).toHaveClass('custom-class');
  });

  it('matches snapshot', () => {
    const { container } = render(<Status status={StatusType.ACTIVE} />);
    expect(container).toMatchSnapshot();
  });
});
