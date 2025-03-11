import { Flex } from '@radix-ui/themes';

// Components
import { SignInForm } from '@/components';

const SignInPage = () => (
  <Flex align='center' justify='center' className='h-full md:bg-gray-50'>
    <SignInForm />
  </Flex>
);

export default SignInPage;
