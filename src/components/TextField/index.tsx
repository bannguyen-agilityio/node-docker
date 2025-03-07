'use client';

import { ChangeEventHandler, ReactNode } from 'react';
import { Box, Text, TextField as TextFieldRadix } from '@radix-ui/themes';

// Utils
import { tw } from '@/utils';

// Constants
import { Position } from '@/constants';

const enum TextFieldState {
  VALID = 'indigo',
  INVALID = 'red',
}

type TextFieldRadixProps = Parameters<typeof TextFieldRadix.Root>['0'];

interface TextFieldProps
  extends Partial<
    Pick<TextFieldRadixProps, 'placeholder' | 'value' | 'ref' | 'type' | 'id'>
  > {
  label?: string;
  errorMessage?: string;
  invalid?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  onChange?: (value: string) => void;
}

const TextField = ({
  invalid = false,
  type = 'text',
  startContent,
  endContent,
  placeholder,
  errorMessage,
  label,
  id,
  ref,
  value,
  onChange,
}: TextFieldProps) => {
  const { border, color } = {
    color: invalid ? TextFieldState.INVALID : TextFieldState.VALID,
    border: tw({
      'shadow-[inset_0_0_0_var(--text-field-border-width)_var(--accent-8)]':
        invalid,
    }),
  };
  const positionIcon: Position = startContent ? Position.LEFT : Position.RIGHT;
  const content: ReactNode = startContent || endContent;

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange?.(e.target.value);

  return (
    <Box>
      {label && (
        <Text
          as='label'
          htmlFor={id}
          size='2'
          weight='bold'
          className='mb-2 inline-block'
        >
          {label}
        </Text>
      )}
      <TextFieldRadix.Root
        ref={ref}
        type={type}
        id={id}
        placeholder={placeholder}
        color={color}
        className={`${border}`}
        value={value}
        onChange={handleChangeValue}
      >
        {content && (
          <TextFieldRadix.Slot side={positionIcon} className='px-2'>
            {content}
          </TextFieldRadix.Slot>
        )}
      </TextFieldRadix.Root>
      {invalid && errorMessage && (
        <Text color='red' size='2' className='mt-2 inline-block'>
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default TextField;
