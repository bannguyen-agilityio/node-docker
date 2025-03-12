import { render, screen } from '@testing-library/react';

// Components
import { LatestIssues } from '@/components';

// Constants
import { ROUTES } from '@/constants';

describe('LatestIssues Component', () => {
  it('renders heading and description', () => {
    render(<LatestIssues />);

    expect(
      screen.getByRole('heading', { name: /Recent Issues/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Latest problems that need attention/i),
    ).toBeInTheDocument();
  });

  it('renders 5 issue items', () => {
    render(<LatestIssues />);

    const issueItems = screen.getAllByRole('listitem');
    expect(issueItems).toHaveLength(5);
  });

  it('renders status badges correctly', () => {
    render(<LatestIssues />);

    const statusElements = screen.getAllByText(
      /has been (banned|failed to post content)/i,
    );
    expect(statusElements).toHaveLength(5);
  });

  it('renders "View more" link with correct href', () => {
    render(<LatestIssues />);

    const viewMoreLink = screen.getByRole('link', { name: /view more/i });
    expect(viewMoreLink).toHaveAttribute('href', ROUTES.ISSUES);
  });
});
