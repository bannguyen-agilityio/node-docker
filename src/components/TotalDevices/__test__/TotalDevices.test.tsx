import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TotalDevices from '../';

describe('TotalDevices Component', () => {
  test('renders the total devices text', () => {
    render(<TotalDevices />);
    expect(screen.getByText(/Total Devices/i)).toBeInTheDocument();
  });

  test('displays the correct total number of devices', () => {
    render(<TotalDevices />);
    expect(screen.getByText('12')).toBeInTheDocument();
  });
});
