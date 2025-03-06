'use client';

import { TextField } from '@/components';
import { Button } from '@radix-ui/themes';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);

  return (
    <>
      <div>Home</div>
      <TextField ref={ref} label='Password' id='password' />
      <Button onClick={() => console.log(ref.current)} />
    </>
  );
}
