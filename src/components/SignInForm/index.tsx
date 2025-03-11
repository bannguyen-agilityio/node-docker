'use client';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';

// Components
import { TextField } from '@/components';

// Types
import { AccountSignIn } from '@/interfaces';

// Hooks
import { useDisclosure } from '@/hooks';

const SignInForm = () => {
  const {
    isOpen: isPasswordVisible,
    handleToggle: handleTogglePasswordVisibility,
  } = useDisclosure();
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<AccountSignIn>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // TODO: Will implement when API ready
  const handleSignIn = handleSubmit((account: AccountSignIn) => {
    console.log({
      account,
    });
  });

  const isButtonDisabled: boolean = Object.keys(dirtyFields).length !== 2;

  return (
    <form
      className='w-full bg-white px-5 py-10 md:max-w-[450px] md:rounded-xl md:shadow-lg'
      onSubmit={handleSignIn}
    >
      <Box className='mb-3 text-center'>
        <Heading className='font-bold' size='7'>
          Admin Dashboard
        </Heading>
        <Text size='2'>Enter your credentials to sign in to your account</Text>
      </Box>
      <Flex direction='column' gap='4'>
        <Controller
          name='username'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              type='text'
              id='username'
              label='Username'
              placeholder='example@'
              invalid={!!error}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
        <Box>
          <Controller
            name='password'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type={isPasswordVisible ? 'text' : 'password'}
                id='password'
                label='Password'
                placeholder='********'
                invalid={!!error}
                errorMessage={error?.message}
                endContent={
                  <IconButton
                    type='button'
                    className='h-fit cursor-pointer bg-transparent text-[var(--gray-12)]'
                    onClick={handleTogglePasswordVisibility}
                  >
                    {isPasswordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </IconButton>
                }
                {...field}
              />
            )}
          />
          <Button
            type='submit'
            className='mt-8 w-full py-5'
            disabled={isButtonDisabled}
          >
            Sign in
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default SignInForm;
