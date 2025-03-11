'use client';

import {
  CalendarIcon,
  DashboardIcon,
  ExclamationTriangleIcon,
  ExitIcon,
  MobileIcon,
  RowsIcon,
} from '@radix-ui/react-icons';
import { Box, Heading, IconButton, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

// Constants
import { ROUTES } from '@/constants';

// Utils
import { tw } from '@/utils';

// Hooks
import { useDisclosure } from '@/hooks';

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
  {
    title: 'devices',
    icon: <MobileIcon />,
    href: ROUTES.DEVICES,
  },
  {
    title: 'schedule',
    icon: <CalendarIcon />,
    href: ROUTES.SCHEDULE,
  },
  {
    title: 'issues',
    icon: <ExclamationTriangleIcon />,
    href: ROUTES.ISSUES,
  },
];

const Sidebar = () => {
  const pathname: string = usePathname();
  const {
    isOpen,
    handleOpen: handleOpenSidebar,
    handleClose: handleCloseSidebar,
  } = useDisclosure();

  // TODO: Implement when API ready
  const handleSignOut = () => {};

  return (
    <>
      <Box
        className={tw(
          'fixed inset-0 bg-black/35 lg:relative lg:inset-auto lg:block lg:w-fit',
          {
            hidden: !isOpen,
          },
        )}
        onClick={handleCloseSidebar}
      >
        <aside
          className={tw(
            'animate-sidebarSlideInAnimation absolute z-30 h-full flex-col border-r-[1px] border-[var(--gray-6)] bg-white shadow-2xl lg:static lg:flex lg:animate-none lg:shadow-none',
            {
              hidden: !isOpen,
              flex: isOpen,
            },
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <Heading
            size='6'
            className='border-b-[1px] border-b-[var(--gray-6)] p-5 text-center'
          >
            Fit Bryce Adams
          </Heading>
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
            <Box
              className='flex w-full cursor-pointer items-center gap-3 rounded-lg border-[1px] border-[var(--gray-6)] px-3 py-2 text-left font-semibold hover:bg-[var(--accent-2)]'
              role='button'
              onClick={handleSignOut}
            >
              <Text as='span'>
                <ExitIcon />
              </Text>
              <Text>Sign out</Text>
            </Box>
          </Box>
        </aside>
      </Box>

      <section className='w-full border-b-[1px] border-[var(--gray-6)] pb-5 pl-2 lg:hidden'>
        <IconButton variant='surface' onClick={handleOpenSidebar}>
          <RowsIcon />
        </IconButton>
      </section>
    </>
  );
};

export default Sidebar;
