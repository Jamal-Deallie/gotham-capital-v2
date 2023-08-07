'use client';

import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Menu from '@/components/MobileMenu';
import styles from './MobileNavbar.module.scss';
import cn from 'classnames';
import useLockedBody from '@/hooks/useLockedBody';
import Logo from '@/svgs/Logo';

export default function MobileNavbar() {
  gsap.registerPlugin(ScrollTrigger);
  const navbarRef = useRef(null!);
  const [locked, setLocked] = useLockedBody(false, 'root');
  const [navIsOpen, setNavIsOpen] = useState(false);

  const openShopMenu = () => {
    setLocked(!locked);
    setNavIsOpen(!navIsOpen);
  };
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const showNav = gsap
        .fromTo(
          navbarRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
          }
        )
        .progress(1);
      ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        onUpdate: self => {
          self.direction === -1 ? showNav.play() : showNav.reverse();
        },
      });
    }, navbarRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={cn('secondary-bg hide-desk', styles['navbar'])}>
        <div className={styles['inner']}>
          <div className={styles['btn-cont']}>
            <button
              role='button'
              onClick={openShopMenu}
              className={cn('primary-clr pl-sm-16', styles['btn'])}>
              Menu
            </button>
          </div>

          <div className={cn(styles['logo'], 'center-elem')}>
            <Logo />
          </div>
          <div className='sm-mr-2'></div>
        </div>
      </nav>
      <Menu navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
    </>
  );
}
