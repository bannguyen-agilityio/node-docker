'use client';

import { useRef } from 'react';
import { Button, Status, TextField } from '@/components';
import {
  ExclamationTriangleIcon,
  GearIcon,
  MobileIcon,
} from '@radix-ui/react-icons';
import { StatusType } from '@/constants';
import InfoCard from '@/components/InfoCard';

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
      <div className='mt-20 ml-10'>
        <InfoCard
          title='Issues'
          value={3}
          description='2 banned accounts, 1 failed post'
          highlightText='Per day'
          highlightColor='blue'
          icon={<ExclamationTriangleIcon width={25} height={25} />}
        />
      </div>
      <div className='mt-20 ml-10'>
        <InfoCard
          title='Total Devices'
          value={12}
          icon={<MobileIcon width={25} height={25} />}
        />
      </div>
    </>
  );
}
