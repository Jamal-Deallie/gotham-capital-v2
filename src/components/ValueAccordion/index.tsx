'use client';

import { useState, CSSProperties } from 'react';
import cn from 'classnames';
import styles from './ValueAccordion.module.scss';

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

  function toggleAccordion() {
    setShowAccordion(showAccordion => !showAccordion);
  }
  return (
    <div className={cn(styles['accordion'], '')}>
      <div
        className={cn(
          showAccordion
            ? styles['accordion-open']
            : styles[`variant-${variant}`],
          styles['accordion-panel'],
          'px-lg-16 px-lg-24  p-sm-16'
        )}>
        <div>
          <button
            className={cn(
              styles['accordion-trigger'],
              'px-lg-40 px-sm-16 py-lg-48'
            )}
            onClick={toggleAccordion}>
            <span className='primary-clr'>01 Value</span>
          </button>
        </div>
        <div
          className={cn(
            styles['accordion-content'],
            showAccordion ? styles['content-show'] : styles['content-hide']
          )}>
          <div>
            <p className='mt-lg-16 mt-sm-16 txt-md'>
              "Guided by strong moral principles, we act with honesty,
              transparency, and accountability in all our financial endeavors,
              fostering trust with clients and partners."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
