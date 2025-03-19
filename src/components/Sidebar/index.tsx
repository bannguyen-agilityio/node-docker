'use client';

import {
  // CalendarIcon,
  DashboardIcon,
  // ExclamationTriangleIcon,
  ExitIcon,
  // MobileIcon,
  RowsIcon,
} from '@radix-ui/react-icons';
import { Box, Button, Flex, IconButton, Spinner, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

// Constants
import { ROUTES } from '@/constants';

// Utils
import { tw } from '@/utils';

// Hooks
import { useAuthentication, useDisclosure } from '@/hooks';

// TODO: Reopen when the page is available
const navigationLinks: {
  title: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    title: 'dashboard',
    icon: <DashboardIcon />,
    href: ROUTES.DASHBOARD,
  },
  // {
  //   title: 'devices',
  //   icon: <MobileIcon />,
  //   href: ROUTES.DEVICES,
  // },
  // {
  //   title: 'schedule',
  //   icon: <CalendarIcon />,
  //   href: ROUTES.SCHEDULE,
  // },
  // {
  //   title: 'issues',
  //   icon: <ExclamationTriangleIcon />,
  //   href: ROUTES.ISSUES,
  // },
];

const Sidebar = () => {
  const pathname: string = usePathname();
  const {
    isOpen,
    handleOpen: handleOpenSidebar,
    handleClose: handleCloseSidebar,
  } = useDisclosure();
  const { isSubmitting, handleSignOut } = useAuthentication();

  return (
    <>
      <Box
        className={tw(
          'fixed inset-0 lg:relative lg:inset-auto lg:block lg:w-fit',
          {
            hidden: !isOpen,
          },
        )}
        role='presentation'
        onClick={handleCloseSidebar}
      >
        <aside
          className={tw(
            'animate-sidebarSlideInAnimation absolute z-30 h-full flex-col border-[var(--gray-6)] bg-white shadow-2xl lg:static lg:flex lg:animate-none lg:border-r',
            {
              hidden: !isOpen,
              flex: isOpen,
            },
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href={ROUTES.DASHBOARD}
            className='border-b-[1px] border-b-[var(--gray-6)] p-5 text-center text-2xl font-bold'
          >
            Fit Bryce Adams
          </Link>
          <ul className='flex-1 border-b-[1px] border-b-[var(--gray-6)] p-5'>
            {navigationLinks.map(({ title, href, icon }) => {
              const isActiveItem: boolean = href === pathname;

              return (
                <li key={title}>
                  <Link
                    href={href}
                    className={tw(
                      'text-md flex w-[239px] items-center gap-3 rounded-lg px-3 py-2 capitalize',
                      {
                        'bg-[var(--accent-9)] text-[var(--accent-contrast)]':
                          isActiveItem,
                        'hover:bg-[var(--accent-2)] hover:text-[var(--accent-12)]':
                          !isActiveItem,
                      },
                    )}
                  >
                    <Text as='span'>{icon}</Text> <Text as='span'>{title}</Text>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Box className='p-5'>
            <Button
              disabled={isSubmitting}
              color='gray'
              variant='outline'
              className={tw(
                'w-full cursor-pointer justify-start py-5 text-base text-[var(--gray-12)]',
              )}
              role='button'
              onClick={handleSignOut}
            >
              <Flex align='center' gap='3'>
                {isSubmitting ? (
                  <Spinner size='3' />
                ) : (
                  <Text as='span'>
                    <ExitIcon />
                  </Text>
                )}
              </Flex>
              <Text className='capitalize'>Sign out</Text>
            </Button>
          </Box>
        </aside>
      </Box>
      <Flex
        justify='between'
        align='center'
        gap='4'
        className='w-full border-b-[1px] border-[var(--gray-6)] p-5 lg:hidden'
      >
        <Link href={ROUTES.DASHBOARD} className='text-2xl font-bold'>
          Fit Bryce Adams
        </Link>
        <IconButton color='gray' variant='surface' onClick={handleOpenSidebar}>
          <RowsIcon />
        </IconButton>
      </Flex>
    </>
  );
};

export default Sidebar;
