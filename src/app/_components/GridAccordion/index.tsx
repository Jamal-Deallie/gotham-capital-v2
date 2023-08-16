'use client';

import { memo, useState } from 'react';
import cn from 'classnames';
import styles from './GridAccordion.module.scss';

type AccordionProps = {
  title: string;
  content: string;
};

function AccordionComponent({ title, content }: AccordionProps) {
  const [showAccordion, setShowAccordion] = useState<boolean>(false);

  function toggleAccordion() {
    setShowAccordion(showAccordion => !showAccordion);
  }

  return (
    <div
      className={cn(
        showAccordion ? 'tertiary-bg' : 'secondary-bg',
        styles['accordion-panel'],
        'px-lg-24 py-lg-24 p-sm-16 primary-clr'
      )}>
      <div>
        <button
          className={styles['accordion-trigger']}
          onClick={toggleAccordion}>
          <h2 className='title-md'>{title}</h2>
          <span
            className={cn(showAccordion ? styles['rotate'] : null, 'txt-lg')}>
            &#x2B;
          </span>
        </button>
      </div>
      <div
        className={cn(
          styles['accordion-content'],
          showAccordion ? styles['content-show'] : styles['content-hide']
        )}>
        <div>
          <p className='py-lg-24 py-sm-16 txt-lg'>{content}</p>
        </div>
      </div>
    </div>
  );
}

export const GridAccordion = memo(AccordionComponent);
