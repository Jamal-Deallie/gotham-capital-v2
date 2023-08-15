'use client';

import React, { useCallback, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import useArrayRef from '@/hooks/useArrayRef';
import styles from './Test.module.scss';
type Props = {};

export default function Accordion({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const [accItem, setAccItem] = useArrayRef();
  const root = useRef<HTMLLIElement>(null!);
  const content = useRef<HTMLDivElement>(null!);
  const panel = useRef<HTMLDivElement>(null!);
  const button = useRef(null!);
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline>(null!);
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({ pause: true, overwrite: true });
      let links = gsap.utils.toArray('.link-item');
      gsap.set(content.current, { autoAlpha: 0, y: 10 });
      tl.current
        .to(panel.current, {
          height: 'auto',
          duration: 1,
          ease: 'ease',
          overwrite: true,
        })
        .to(
          content.current,
          {
            overwrite: true,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'ease',
          },
          '<+=50%'
        )
        .reverse();
    }, root);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!isOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, isOpen]);
  return (
    <>
      <li
        id='accordion__item1'
        className={styles['accordion__item fade-top']}
        ref={root}
        onClick={() => setIsOpen(isOpen => !isOpen)}>
        <h2 className={styles['accordion__title']}>
          <button
            id='accordion__tab1'
            className={styles['accordion__button']}
            ref={button}
            type='button'
            role='tab'
            aria-controls='accordion__panel1'
            aria-expanded='false'>
            {title}
            <div className={styles['plus-button']}>
              <div className={styles['plus-icon']}></div>
            </div>
          </button>
        </h2>
        <div
          id='accordion__panel1'
          className={styles['accordion__panel']}
          ref={panel}
          role='tabpanel'
          aria-labelledby='accordion__panel1'
          aria-hidden='true'>
          <div className={styles['accordion__content']} ref={content}>
            <p>{desc}</p>
          </div>
        </div>
      </li>
    </>
  );
}
