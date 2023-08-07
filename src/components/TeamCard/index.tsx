import Image from 'next/image';
import styles from './TeamCard.module.scss';
import cn from 'classnames';

export default function TeamCard({
  name,
  title,
}: {
  name: string;
  title: string;
}) {
  return (
    <div className={styles['card']}>
      <div className={styles['team-card']}>
        <div className={styles['image']}>
          <Image
            src='/images/smiling-mature-corporate-executive-wearing-a-shirt-2021-08-26-17-26-48-utc.jpg'
            alt='building'
            fill
            quality={100}
            sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
            priority
          />
        </div>
        <div className={cn(styles['team-info'], 'mt-lg-8 mt-sm-16 ')}>
          <div className='py-lg-4 txt tertiary-bg'>
            <p className='txt'>{name}</p>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
