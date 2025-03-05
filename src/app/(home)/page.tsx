import { Button, Text, TextField } from '@radix-ui/themes';

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Button />
      <TextField.Root size='3' placeholder='Reply…'>
        <TextField.Slot side='right' px='1'></TextField.Slot>
      </TextField.Root>
      <Button size='2'>Send</Button>
      <Text color='red' className='bg-amber-300'>
        hello
      </Text>
    </>
  );
}
