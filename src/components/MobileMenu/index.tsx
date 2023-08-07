'use client';

import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import cn from 'classnames';
import styles from './Menu.module.scss';
import useLockedBody from '@/hooks/useLockedBody';

type Props = {
  setNavIsOpen: Dispatch<SetStateAction<boolean>>;
  navIsOpen: boolean;
};
export default function Menus({ setNavIsOpen, navIsOpen }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const root = useRef(null!);
  const [locked, setLocked] = useLockedBody(false, 'root');

  const openShopMenu = () => {
    setLocked(!locked);
    setNavIsOpen(!navIsOpen);
  };

  useIsomorphicLayoutEffect(() => {
    setNavIsOpen(false);
    setLocked(false);
  }, [pathname, searchParams]);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let links = gsap.utils.toArray('.link-item');

    let ctx = gsap.context(() => {
      if (tl.current) {
        tl.current
          .fromTo(
            root.current,
            { autoAlpha: 0, yPercent: -200 },
            {
              duration: 1,
              autoAlpha: 1,
              yPercent: 0,
              ease: 'power3.inOut',
            }
          )
          .fromTo(
            links,
            { autoAlpha: 0, yPercent: 200 },
            {
              duration: 0.65,
              yPercent: 0,
              autoAlpha: 1,
              stagger: {
                amount: 0.3,
              },
            }
          )
          .reverse();
      }
    }, root);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!navIsOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, navIsOpen]);

  return (
    <>
      <div className={styles.menu} ref={root}>
        <div className='grid-inner'>
          <div className={cn(styles['link-cont'], 'pt-nav-height')}>
            <ul className='py-sm-64'>
              <li className='link-item'>
                <Link className={styles['link']} href='/about'>
                  About
                </Link>
              </li>

              <li className='link-item'>
                <Link className={styles['link']} href='/visit'>
                  Visit
                </Link>
              </li>
              <li className='link-item'>
                <Link className={styles['link']} href='/faqs'>
                  Faqs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
