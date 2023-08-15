import styles from './Clients.module.scss';
import cn from 'classnames';
import MarqueeLoop from '@/components/MarqueeLoop';
import Client from '@/components/Client';
import { clients } from '@/data';

export default function Clients() {
  return (
    <div className={cn(styles['clients'], 'pb-lg-128 pb-sm-64')}>
      <div className='heading mb-lg-96 mb-sm-32'>
        <p>Our Clients</p>
        <h1 className='title-md light'>
          Gotham Capital is unwavering in its commitment to clients. We
          prioritize their{' '}
          <span className='tertiary-clr title-md bold'>
            financial aspirations,
          </span>{' '}
          forging lasting partnerships built on trust and personalized
          attention.
        </h1>
      </div>

      <MarqueeLoop>
        <div className={styles['marquee']}>
          <div className={cn('loop-item', styles['marquee-inner'])}>
            {clients.map(({ id, client, classes, src }) => {
              return (
                <Client key={id} client={client} src={src} classes={classes} />
              );
            })}
          </div>
        </div>
      </MarqueeLoop>
    </div>
  );
}
