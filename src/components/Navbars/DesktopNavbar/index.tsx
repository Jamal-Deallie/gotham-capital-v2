'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import Logo from '@/svgs/Logo';
import cn from 'classnames';
import styles from './DesktopNavbar.module.scss';
import { LinkButton } from '@/components/Button';
type Props = {};

export default function DesktopNavbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={cn('secondary-bg hide-mobile', styles['container'])}>
      <div className={styles['wrap']}>
        <div className={styles['logo-wrap']}>
          <Link href='/'>
            <div className={styles['logo']}>
              <Logo />
            </div>
          </Link>
        </div>

        <div className={cn(styles['links'], 'center-elem')}>
          <NavLink href='/about' url='/about'>
            About
          </NavLink>

          <NavLink href='/visit' url='/visit'>
            Visit
          </NavLink>

          <NavLink href='/faqs' url='/faqs'>
            Faqs
          </NavLink>
        </div>
        <LinkButton href='/contact' variant='primary'>
          contact
        </LinkButton>
      </div>
    </nav>
  );
}
