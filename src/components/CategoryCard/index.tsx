import styles from './CategoryCard.module.scss';
import cn from 'classnames';
import gsap from 'gsap';
import PlaceholderCat from '@/svgs/PlaceholderCat';
type Props = {};

export default function CategoryCard({}: Props) {
  return (
    <div className={styles['card']}>
      <div className={cn(styles['content'], 'primary-bg secondary-clr px-lg-24 py-lg-48 px-sm-24 py-sm-32')}>
        <p className='txt-md'>Investing in Agriculture for a Sustainable Future</p>
        <div className={styles['icon']}>
          <PlaceholderCat />
        </div>
        <div className={styles['cat-cont']}>
          <p className='title-sm'>Agriculture</p>
          <span>1</span>
        </div>
      </div>
      <div className={styles['underlay']}>
        <div className={styles['vid']}>
          <video width='100%' muted={true} autoPlay loop>
            <source src={'/video/agriculture.mp4'} type='video/mp4' />
          </video>
        </div>
        <div className={cn(styles['desc-wrap'], 'px-lg-24')}>
          <div className={styles['cat-cont']}>
            <p>Agriculture</p>
            <span>1</span>
          </div>
          <div className='pt-lg-24 pt-sm-16'>
            <p>
              We embrace the fertile potential of the agriculture sector. With
              strategic investments, we tap into this essential industry,
              seeking sustainable growth opportunities. Leveraging our
              expertise, we cultivate long-term value, fostering a greener
              future while reaping rewarding returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
