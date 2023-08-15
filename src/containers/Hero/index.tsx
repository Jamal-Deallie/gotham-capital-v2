import React from 'react';
import Video from '@/components/Video';
import styles from './Hero.module.scss';
import cn from 'classnames';
import { LinkButton } from '@/components/Button';

export default function Hero() {
  return (
    <div className={styles['hero']}>
      <div className={styles['copy']}>
        <div className={cn('cont-inner', styles['inner'])}>
          <h1 className='title-lg primary-clr mx-auto tac'>
            Unlocking Your Financial Potential
          </h1>
          <p className='txt-md bold primary-clr light mt-lg-16 mt-sm-16 tac'>
            Whether you are an individual seeking to grow your wealth or a
            business aiming to optimize your financial assets, Gotham Capital is
            your trusted ally in realizing your financial aspirations.
          </p>
          <div className='mt-lg-32 mt-sm-24'>
            <LinkButton href='/about' size='lg' variant='secondary'>
              Learn More
            </LinkButton>
          </div>
        </div>
      </div>
      <Video />
    </div>
  );
}
