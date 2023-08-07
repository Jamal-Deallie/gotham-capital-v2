import React from 'react';
import styles from './Values.module.scss';
import cn from 'classnames';
import ValueAccordion from '@/components/ValueAccordion';
type Props = {};

export default function Values({}: Props) {
  return (
    <div className={cn(styles['values'], 'primary-bg pt-lg-128 pt-sm-64')}>
      <div className='grid-inner mb-lg-96 mb-sm-48'>
        <div className={styles['title']}>
          <p className='secondary-clr'>Our Values</p>
        </div>
        <div className={styles['desc']}>
          <p className='secondary-clr txt-lg'>
            Our values drive us to deliver exceptional financial solutions,
            fostering long-term partnerships based on trust. With a commitment
            to excellence, we empower clients to achieve their goals, ensuring
            their financial success is our utmost priority.
          </p>
        </div>
      </div>
      <div className={styles['accordion-wrap']}>
        <div className={styles['accordion-cont']}>
          <ValueAccordion variant='one'/>
        </div>
        <div className={styles['accordion-cont']}>
        <ValueAccordion variant='two'/>
        </div>
        <div className={styles['accordion-cont']}>
        <ValueAccordion variant='three'/>
        </div>
        <div className={styles['accordion-cont']}>
        <ValueAccordion variant='four'/>
        </div>
      </div>
    </div>
  );
}
