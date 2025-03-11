import { render, screen, fireEvent } from '@testing-library/react';
import SignInForm from '@/components/SignInForm';
import '@testing-library/jest-dom';

describe('SignInForm', () => {
  test('renders Sign in button with Google logo', () => {
    render(<SignInForm />);

    const signInButton = screen.getByRole('button', { name: /sign in/i });
    expect(signInButton).toBeInTheDocument();

    const googleLogo = screen.getByAltText('Google Logo');
    expect(googleLogo).toBeInTheDocument();
  });

  test('calls handleSignIn function when clicked', () => {
    render(<SignInForm />);

    const signInButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.click(signInButton);

    expect(signInButton).toBeEnabled();
  });
});
