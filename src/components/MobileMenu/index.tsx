'use client';

import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import cn from 'classnames';
import styles from './Menu.module.scss';
import useLockedBody from '@/hooks/useLockedBody';
import { mobileLinks } from '@/data';

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
            { autoAlpha: 0, yPercent: 200, rotate: '10deg' },
            {
              duration: 0.65,
              yPercent: 0,
              rotate: '0deg',
              autoAlpha: 1,
              ease: 'sine.out',
              stagger: {
                amount: 0.3,
              },
            },
            '-=.10'
          )
          .fromTo(
            '.footer-item',
            { autoAlpha: 0, yPercent: 200, rotate: '10deg' },
            {
              duration: 0.65,
              yPercent: 0,
              rotate: '0deg',
              ease: 'sine.out',
              autoAlpha: 1,
            },
            '<+=1%'
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
      <div className={cn(styles['menu'], 'pt-nav-height')} ref={root}>
        <div className='main-cont'>
          <div className={cn(styles['link-cont'], 'py-sm-64')}>
            <ul>
              {mobileLinks.map(({ id, label, path }) => {
                return (
                  <li className='link-item' key={id}>
                    <Link className={styles['link']} href={path}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div
              className={cn(styles['footer'], 'py-sm-24 full-w footer-item')}>
              <p className='tac txt-md bold'>inquiries@gothamcapital.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
