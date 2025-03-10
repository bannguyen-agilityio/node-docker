'use client';

import { useRef } from 'react';
import { Button, Status, TextField, StatusType } from '@/components';
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
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Status status={StatusType.ACTIVE} />
        <Status status={StatusType.BANNED} />
        <Status status={StatusType.OFFLINE} />
        <Status status={StatusType.FAILED} />
        <Status status={StatusType.ONLINE} />
        <Status status={StatusType.ENGAGEMENT} />
      </div>
    </>
  );
}
