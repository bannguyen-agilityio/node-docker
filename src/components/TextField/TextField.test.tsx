import { fireEvent, render } from '@testing-library/react';

// Components
import TextField from '.';

describe('TextField', () => {
  it('Should render with default props', () => {
    const { container } = render(<TextField />);

    expect(container).toMatchSnapshot();
  });

  it('Should render with startContent', () => {
    const content = 'Hello world';
    const { getByText } = render(<TextField startContent={content} />);

    expect(getByText(content)).toBeInTheDocument();
  });

  it('Should render with endContent', () => {
    const content = 'Hello world';
    const { getByText } = render(<TextField endContent={content} />);

    expect(getByText(content)).toBeInTheDocument();
  });

  it('Should render with error message', () => {
    const errorMessage = 'Please enter your email';
    const { getByText } = render(
      <TextField invalid errorMessage={errorMessage} />,
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('Should change value', () => {
    const value = 'Hello world';
    const placeholder = 'Enter your email';
    const { getByPlaceholderText } = render(
      <TextField placeholder={placeholder} />,
    );
    const input: HTMLInputElement = getByPlaceholderText(
      placeholder,
    ) as HTMLInputElement;

    expect(input.value).not.toBe(value);
    fireEvent.change(input, {
      target: {
        value,
      },
    });
    expect(input.value).toBe(value);
  });
});
