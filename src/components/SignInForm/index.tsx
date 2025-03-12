'use client';
import { Box, Flex, Heading } from '@radix-ui/themes';
import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

// Utils
import { tw } from '@/utils/tailwind';

// Components
import { Button } from '..';

const SignInForm = () => {
  const router = useRouter();

  const handleSignIn = useCallback(() => {
    router.push('/');
  }, [router]);

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
      </div>
    </Flex>
  );
};

export default SignInForm;
