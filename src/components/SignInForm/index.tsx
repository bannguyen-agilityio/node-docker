'use client';
import googleLogo from '../../../public/images/signin-google-image.svg.webp';
import { Box, Flex, Heading } from '@radix-ui/themes';
import Image from 'next/image';
import { useCallback } from 'react';

// Utils
import { tw } from '@/utils/tailwind';

// Components
import { Button } from '..';

const SignInForm = () => {
  // TODO: Will implement when API is ready
  const handleSignIn = useCallback(() => {}, []);

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
            <Image src={googleLogo} alt='Google Logo' width={25} height={25} />
          }
          className={tw(
            'font-regular text-md w-full cursor-pointer border border-gray-400 bg-white py-6 text-black transition-all hover:bg-gray-100 lg:text-lg',
          )}
          onClick={handleSignIn}
        />
      </div>
    </Flex>
  );
};

export default SignInForm;
