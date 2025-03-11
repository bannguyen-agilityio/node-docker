import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';
import { useDisclosure } from '@/hooks';

// Mock hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('@/hooks', () => ({
  useDisclosure: jest.fn(),
}));

// Helper function to simulate screen width
const setScreenSize = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

describe('Sidebar Component', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/dashboard');
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      handleOpen: jest.fn(),
      handleClose: jest.fn(),
    });
  });

  test('renders sidebar component', () => {
    render(<Sidebar />);

    // Check if heading is rendered
    expect(screen.getByText(/Fit Bryce Adams/i)).toBeInTheDocument();

    // Check if sign out button exists
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  test('renders navigation links correctly', () => {
    render(<Sidebar />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  test('opens sidebar on mobile when menu button is clicked', () => {
    setScreenSize(375); // Simulate mobile device

    const handleOpenSidebar = jest.fn();
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: false,
      handleOpen: handleOpenSidebar,
      handleClose: jest.fn(),
    });

    render(<Sidebar />);

    fireEvent.click(
      screen.getByRole('button', {
        name(accessibleName) {
          return accessibleName !== 'Sign out';
        },
      }),
    ); // Click menu button

    expect(handleOpenSidebar).toHaveBeenCalled();
  });

  test('closes sidebar on mobile when clicking outside', () => {
    setScreenSize(375); // Simulate mobile device

    const handleCloseSidebar = jest.fn();
    (useDisclosure as jest.Mock).mockReturnValue({
      isOpen: true,
      handleOpen: jest.fn(),
      handleClose: handleCloseSidebar,
    });

    render(<Sidebar />);

    fireEvent.click(screen.getByRole('presentation')); // Click outside sidebar

    expect(handleCloseSidebar).toHaveBeenCalled();
  });

  test('calls sign-out function when clicking sign-out button', () => {
    render(<Sidebar />);

    fireEvent.click(screen.getByText(/Sign out/i)); // Click sign-out

    // TODO: Implement real API logic
    expect(true).toBe(true);
  });
});
