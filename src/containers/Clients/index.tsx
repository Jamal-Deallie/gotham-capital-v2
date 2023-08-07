import React from 'react';
import Placeholder from '@/svgs/Placeholder';
import styles from './Clients.module.scss';
import cn from 'classnames';
import MarqueeLoop from '@/components/MarqueeLoop';

type Props = {};

function PlaceHolderClient() {
  return (
    <div className={cn(styles['client'], 'loop-target')}>
      <span className='secondary-clr title-md light'>Gillette</span>
      <span className={cn(styles['logo'], 'px-lg-16')}>
        <Placeholder />
      </span>
    </div>
  );
}
export default function Clients({}: Props) {
  return (
    <div className={cn(styles['clients'], 'pb-lg-128 pb-sm-64')}>
      <div className='heading mb-lg-96 mb-sm-32'>
        <p>Our Clients</p>
        <h1 className='title-md light'>
          Gotham Capital is unwavering in its commitment to clients. We
          prioritize their {' '}
          <span className='tertiary-clr title-md bold'>financial aspirations,</span>{' '} forging lasting partnerships
          built on trust and personalized attention.
        </h1>
      </div>

      <MarqueeLoop>
        <div className={styles['marquee']}>
          <div className={cn('loop-item', styles['marquee-inner'])}>
            {new Array(10).fill(PlaceHolderClient).map((i, _) => {
              return <PlaceHolderClient key={i} />;
            })}
          </div>
        </div>
      </MarqueeLoop>
    </div>
  );
}
