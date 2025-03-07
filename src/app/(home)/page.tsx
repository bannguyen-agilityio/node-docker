'use client';

import { useRef } from 'react';
import { Button, TextField } from '@/components';
import { GearIcon } from '@radix-ui/react-icons';

export default function Home() {
  const ref = useRef(null);

  return (
    <>
      <div>Home</div>
      <TextField ref={ref} label='Password' id='password' />
      <Button text='Login' />
      <Button text='Login' isDisable />
      <Button text='With icon' icon={<GearIcon />} />
    </>
  );
}
