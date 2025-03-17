'use client';

import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

// Utils
import { tw, getAuthenticationErrorMessage, checkPage } from '@/utils';

// Components
import { Button } from '@/components';

// Constants
import { SEARCH_PARAMS_KEY } from '@/constants';

// Hooks
import { useSearchParams } from '@/hooks';

const SignInForm = () => {
  const searchParams = useSearchParams();
  const errorMessage = getAuthenticationErrorMessage(
    searchParams.get(SEARCH_PARAMS_KEY.ERROR),
  );

  const handleSignIn = () =>
    signIn('google', {
      callbackUrl: checkPage(searchParams.get(SEARCH_PARAMS_KEY.CALLBACK_URL)),
    });

  return (
    <Flex direction='column' gap='4' width='400px'>
      <div className='w-full bg-white px-5 py-10 md:max-w-[450px] md:rounded-xl md:shadow-lg'>
        <Box className='mb-10 text-center'>
          <Heading className='font-bold' size='7'>
            Fit Bryce Adams
          </Heading>
        </Box>
        <Button
          text='Sign in with Google'
          icon={
            <Image
              src='/images/signin-google-image.svg.webp'
              alt='Google Logo'
              width={25}
              height={25}
            />
          }
          className={tw(
            'font-regular w-full cursor-pointer border border-gray-400 bg-white py-6 text-sm text-black transition-all hover:bg-gray-100 sm:text-base',
          )}
          onClick={handleSignIn}
        />
        {errorMessage && (
          <Text color='red' mt='2' className='inline-block' size='2'>
            {errorMessage}
          </Text>
        )}
      </div>
    </Flex>
  );
};

export default SignInForm;
