import React from 'react';
import { render } from '@testing-library/react';
import LatestIssuesSkeleton from '../';

describe('LatestIssuesSkeleton Component', () => {
  it('should match snapshot', () => {
    const container = render(<LatestIssuesSkeleton />);
    expect(container).toMatchSnapshot();
  });

  it('should render 5 skeleton items', () => {
    const { container } = render(<LatestIssuesSkeleton />);
    const skeletonItems = container.querySelectorAll('ul > li');
    expect(skeletonItems.length).toBe(5);
  });
});
