import { Flex } from '@radix-ui/themes';
import { Suspense } from 'react';

// Components
import { SignInForm } from '@/components';

const SignInPage = () => (
  <Flex align='center' justify='center' className='h-full md:bg-gray-50'>
    <Suspense>
      <SignInForm />
    </Suspense>
  </Flex>
);

export default SignInPage;
