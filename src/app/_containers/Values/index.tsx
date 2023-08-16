import React from 'react';
import styles from './Values.module.scss';
import cn from 'classnames';
import ValueAccordion from '@/_components/ValueAccordion';
type Props = {};

export default function Values({}: Props) {
  return (
    <div className={cn(styles['values'], 'primary-bg pt-lg-128 pt-sm-64')}>
      <div className='heading mb-lg-96 mb-sm-32'>
        <p>Our Values</p>
        <h1 className='title-md light'>
          Our values drive us to deliver exceptional financial solutions,
          including a commitment to excellence,{' '}
          <span className='tertiary-clr title-md bold'>we empower clients</span>{' '}
          to achieve their goals, ensuring their financial success is our utmost
          priority.
        </h1>
      </div>
      <div className={styles['accordion-wrap']}>
        <div className={styles['accordion-cont']}>
          <ValueAccordion variant='one' />
        </div>
        <div className={styles['accordion-cont']}>
          <ValueAccordion variant='two' />
        </div>
        <div className={styles['accordion-cont']}>
          <ValueAccordion variant='three' />
        </div>
        <div className={styles['accordion-cont']}>
          <ValueAccordion variant='four' />
        </div>
      </div>
    </div>
  );
}
