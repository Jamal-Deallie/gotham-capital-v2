import Image from 'next/image';
import styles from './CEOSpotlight.module.scss';
import { LinkButton } from '@/_components/Button';
import cn from 'classnames';
import Border from '@/_components/Border';
type Props = {};

export default function CEOSpotlight({}: Props) {
  return (
    <div className={cn(styles['ceo'], 'secondary-bg pt-lg-128 pt-sm-64')}>
      <div className='grid-inner'>
        <div className={styles['image']}>
          <Image
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1691373690/gotham_capital/team_placeholder_cug3g5.webp'
            alt='CEO'
            fill
            sizes='(max-width: 1300px) 50vw, (max-width: 850px) 100vw'
          />
        </div>
        <aside className='primary-bg p-lg-64 px-sm-16 py-sm-24'>
          <div>
            <h1 className='title-md light'>
              Driving Gotham's{' '}
              <span className='tertiary-clr title-md bold'>
                {' '}
                Financial Success
              </span>{' '}
              With Innovation
            </h1>
            <p className='mt-lg-128 mt-sm-24'>
              The founder and CEO of Gotham Capital, James Maxwell, is a
              visionary financial strategist. With a distinguished career
              spanning decades, he has demonstrated a keen ability to identify
              lucrative opportunities, shape innovative investment approaches,
              and lead a dedicated team to deliver exceptional results,
              cementing his legacy as an industry trailblazer.
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
