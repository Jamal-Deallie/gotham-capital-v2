import Image from 'next/image';
import styles from './CEOSpotlight.module.scss';
import { LinkButton } from '@/components/Button';
import cn from 'classnames';
import Border from '@/components/Border';
type Props = {};

export default function CEOSpotlight({}: Props) {
  return (
    <div className={cn(styles['ceo'], 'secondary-bg pt-lg-128 pt-sm-64')}>
      <div className='grid-inner'>
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
        <aside className='primary-bg p-lg-64 p-sm-32'>
          <div>
            <h1 className='title-md light'>Dummy Name</h1>
            <p className='mt-lg-128 mt-sm-24'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <div className='mt-lg-48 mt-sm-24'>
              <LinkButton href='/team' variant='secondary' size='lg'>
                Meet The Team
              </LinkButton>
            </div>
          </div>
        </aside>
        <div className={styles['border-cont']}>
          <Border color='primary' />
        </div>
      </div>
    </div>
  );
}
