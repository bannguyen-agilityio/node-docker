import { render, screen } from '@testing-library/react';

// Components
import InfoCard from '..';

describe('InfoCard Component', () => {
  it('matches snapshot', () => {
    const { container } = render(<InfoCard title={'Title'} value={'10'} />);
    expect(container).toMatchSnapshot();
  });

  test('renders without description and icon', () => {
    render(<InfoCard title='Total Devices' value={12} />);

    expect(screen.getByText('Total Devices')).toBeInTheDocument();

    expect(screen.getByText('12')).toBeInTheDocument();

    expect(
      screen.queryByText('2 banned accounts, 1 failed post'),
    ).not.toBeInTheDocument();

    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });
});
