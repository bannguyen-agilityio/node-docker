import { render } from '@testing-library/react';

// Components
import Skeleton from '..';

describe('Button Component', () => {
  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<Skeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
