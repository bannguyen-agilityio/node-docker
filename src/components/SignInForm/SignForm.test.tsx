import { act, fireEvent, render } from '@testing-library/react';

// Components
import SignInForm from '.';

describe('SignInForm', () => {
  it('Should render with default props', () => {
    const { container } = render(<SignInForm />);

    expect(container).toMatchSnapshot();
  });

  it('Should show/hide password', async () => {
    const { getByPlaceholderText, getAllByRole } = render(<SignInForm />);
    const buttons: HTMLButtonElement[] = getAllByRole(
      'button',
    ) as HTMLButtonElement[];
    const passwordEl: HTMLInputElement = getByPlaceholderText(
      '********',
    ) as HTMLInputElement;
    const iconButton: HTMLButtonElement = buttons[0];

    expect(passwordEl.type).toBe('password');

    await act(() => fireEvent.click(iconButton));

    expect(passwordEl.type).toBe('text');
  });

  // TODO: Will implement when API ready
  it('Should display error when username/password incorrect');

  // TODO: Will implement when API ready
  it('Should sign-in successfully', () => {});
});
