import Link from 'next/link';
import Logo from '@/_svgs/Logo';
import cn from 'classnames';
import styles from './DesktopNavbar.module.scss';
import NavLink from '@/_components/NavLink';
import AuthButton from '@/_components/AuthButton';

type Props = {};

export default function DesktopNavbar({}: Props) {
  return (
    <nav className={cn('secondary-bg hide-mobile', styles['container'])}>
      <div className={cn(styles['wrap'], 'px-lg-40')}>
        <div className={styles['logo-wrap']}>
          <Link
            href='/'
            aria-label='Gotham Capital Logo. Click to navigate to home page'>
            <div className={styles['logo']}>
              <Logo />
            </div>
          </Link>
        </div>

        <div className={cn(styles['links'], 'center-elem')}>
          <NavLink href='/' url='/'>
            Home
          </NavLink>
          <NavLink href='/about' url='/about'>
            About
          </NavLink>
          <NavLink href='/approach' url='/approach'>
            Approach
          </NavLink>
          <NavLink href='/team' url='/team'>
            Team
          </NavLink>
        </div>
        <AuthButton />
      </div>
    </nav>
  );
}
