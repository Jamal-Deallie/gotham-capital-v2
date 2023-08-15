'use client';

import { useState, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import cn from 'classnames';
import styles from './ValueAccordion.module.scss';
import gsap from 'gsap';

type AccordionProps = {
  title?: string;
  content?: string;
  variant: string;
};

export default function ValueAccordion({
  title,
  content,
  variant,
}: AccordionProps) {
  const [showAccordion, setShowAccordion] = useState<boolean>(false);

  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  //fix eases
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({ pause: true, ease: 'circ.out' });
      gsap.set('.panel-item', { paddingBottom: '0%' });
      gsap.set('.text-item', { y: 40, opacity: 0 });
      tl.current
        .to('.panel-item', { backgroundColor: '#5fb0ff', paddingBottom: '10%' })
        .to(
          '.content-item',
          {
            height: 'auto',
            duration: .50,
            overwrite: true,
          },
          '<-=50%'
        )
        .to('.text-item', { opacity: 1, y: 0 })
        .reverse();
    }, root); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!showAccordion);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, showAccordion]);

  function toggleAccordion() {
    setShowAccordion(showAccordion => !showAccordion);
  }
  return (
    <div className={cn(styles['accordion'], 'primary-clr')} ref={root}>
      <div
        className={cn(
          styles[`variant-${variant}`],
          styles['accordion-panel'],
          'px-lg-16 px-lg-24  p-sm-16 panel-item'
        )}>
        <div>
          <button
            className={cn(
              styles['accordion-trigger'],
              'px-lg-40 px-sm-16 py-lg-48'
            )}
            onClick={toggleAccordion}>
            <span className='primary-clr'>{`${variant} Value`}</span>
          </button>
        </div>
        <div
          className={cn(
            styles['accordion-content'],
            'content-item px-lg-40 px-sm-16'
          )}>
          <p className='mt-lg-16 mt-sm-16 txt-lg text-item'>
            "Guided by strong moral principles, we act with honesty,
            transparency, and accountability in all our financial endeavors,
            fostering trust with clients and partners."
          </p>
        </div>
      </div>
    </div>
  );
}
