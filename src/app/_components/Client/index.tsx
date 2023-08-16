import Image from 'next/image';
import styles from './Client.module.scss';
import cn from 'classnames';

export default function Client({
  client,
  src,
  classes,
}: {
  client: string;
  src: string;
  classes: string;
}) {
  return (
    <div className={cn(styles['client'], 'loop-target py-lg-24')}>
      <p className='secondary-clr title-md bold'>{client}</p>
      <div className={cn(styles['logo'], 'px-lg-16')}>
        <div className={cn(styles['image'], styles[`${classes}`])}>
          <Image
            alt={client}
            src={src}
            fill
            sizes='(max-width: 1300px) 15vw, 10vw, (max-width: 800px) 10vw'
          />
        </div>
      </div>
    </div>
  );
}
