import styles from './About.module.scss';
import Image from 'next/image';
import Border from '@/components/Border';
import cn from 'classnames';

export default function About() {
  return (
    <div className='pt-nav-height secondary-bg primary-clr'>
      <div className='grid-inner'>
        <div className={styles['title']}>
          <h1 className='title-md light mb-lg-64 mb-sm-32'>
            Whether working with institutional investors, high-net-worth
            individuals, or corporations,
            <span className='tertiary-clr title-md'>
              {' '}
              the firm is dedicated{' '}
            </span>
            to providing personalized service
          </h1>
        </div>
        <div className={styles['desc']}>
          <p>
            Established by visionary leaders, the firm has been at the forefront
            of investment strategies, consistently delivering exceptional
            results for its clients. With a strong commitment to integrity,
            transparency, and risk management, Gotham Capital has earned a
            reputation for being a trusted partner in the world of finance.
          </p>
          <p className='mt-lg-8 mt-sm-8'>
            The firm's investment philosophy centers on a disciplined and
            research-driven approach. Utilizing a blend of fundamental analysis,
            quantitative models, and in-depth market research, Gotham Capital
            identifies promising investment opportunities across various asset
            classes. Their keen ability to spot emerging trends and adapt to
            market dynamics allows them to capitalize on both long-term growth
            prospects and short-term trading opportunities.
          </p>
        </div>

        <div className={cn(styles['image-wrap'], 'mt-lg-48')}>
          <div className={styles['image']}>
            <Image
              alt='Gotham Capital Boardroom'
              src='/images/boardroom.jpg'
              sizes='(max-width: 849px) 100vw, (max-width: 1200px) 80vw, 70vw'
              fill
            />
          </div>
        </div>
        <Border color='primary' />
      </div>
    </div>
  );
}
