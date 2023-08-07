import React from 'react';
import styles from './Stats.module.scss';
import DottedCircle from '@/components/DottedCircle';
import cn from 'classnames';
type Props = {};

export default function Stats({}: Props) {
  return (
    <div className={cn(styles['stats'], 'secondary-bg pt-lg-128')}>
      <div className={cn(styles['inner-wrap'], 'grid-inner primary-clr')}>
        <p>Who We Are</p>
        <p className='txt-lg light'>
          Lorem ipsum dolor sit amet consectetur
          <span className='txt-lg bold tertiary-clr'>
            {' '}
            adipiscing elit{' '}
          </span>{' '}
          sed do eiusmod tempor
        </p>
      </div>
      <div className='main-cont'>
        <div className='pt-lg-64 pb-lg-128 py-sm-48'>
          <div className={styles['flex-cont']}>
            <div className={styles['stat-one']}>
              <div className={styles['stat']}>
                <span className='primary-clr'>20</span>
              </div>
              <div className={styles['dotted-svg']}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
                  <circle id='svg' cx='250' cy='250' r='200' />
                </svg>
              </div>
            </div>
            <div className={styles['stat-two']}>
              <div className={styles['stat']}>
                <span className='primary-clr'>20</span>
              </div>
              <div className={styles['solid-svg']}>
                <svg
                  version='1.1'
                  viewBox='0 0 500 500'
                  preserveAspectRatio='xMinYMin meet'>
                  <circle cx='250' cy='250' r='200' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
