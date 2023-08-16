import React from 'react';
import ContactForm from '@/_components/ContactForm';
import { Desktop, TabletAndBelow } from '@/_components/MediaQueryEasyMode';
import styles from './Contact.module.scss';
import cn from 'classnames';
type Props = {};

export default function Contact({}: Props) {
  return (
    <div className={cn(styles['contact'], 'grid-block  secondary-bg pt-lg-96')}>
      <div className={cn(styles['title'], 'pr-lg-40 px-sm-16')}>
        <h1 className='title-md light primary-clr'>
          How Can We{' '}
          <span className='title-md tertiary-clr bold'> Help You</span>
        </h1>
      </div>
      <div
        className={cn(
          styles['form-cont'],
          'pb-lg-180 pb-sm-64 pr-lg-40 px-sm-16'
        )}>
        <ContactForm />
      </div>
      <Desktop>
        <div className={cn(styles['svg-cont'])}>
          <div className={styles['dotted-svg']}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 550 550'>
              <circle id='svg' cx='275' cy='275' r='275' />
            </svg>
          </div>
        </div>
      </Desktop>
    </div>
  );
}
