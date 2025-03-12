import React from 'react';
import { render } from '@testing-library/react';
import InfoCardSkeleton from '../';

describe('InfoCardSkeleton', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<InfoCardSkeleton />);
    expect(container).toMatchSnapshot();
  });
});
