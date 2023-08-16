import styles from './Numbers.module.scss';
import Counter from '@/_components/Counter';
import DottedLine from '@/app/_svgs/DottedLine';
import cn from 'classnames';

export default function Statistics() {
  return (
    <div className={cn('secondary-bg py-lg-128 py-sm-64', styles['numbers'])}>
      <div className='heading mb-lg-96 mb-sm-32'>
        <p className='primary-clr'>By the Numbers</p>
        <h1 className='title-md light primary-clr'>
          Our expert team's strategic approach ensures superior results, making
          us the
          <span className='tertiary-clr title-md bold'>
            {' '}
            preferred choice for investors{' '}
          </span>
          seeking consistent and rewarding financial outcomes.
        </h1>
      </div>
      <div className='grid-inner my-lg-96 my-sm-48'>
        <div className={styles['stat-cont']}>
          <div className={styles['stat']}>
            <div className={styles['stat-inner']}>
              <span className='tertiary-clr'>$</span>
              <Counter classes='tertiary-clr' start='0' end={10} />
              <span className='tertiary-clr'>m</span>
            </div>
            <div className={styles['stat-desc']}>
              <h2 className='title-sm'>Invested</h2>
            </div>
          </div>
        </div>
        <div className={styles['stat-cont']}>
          <div className={styles['stat']}>
            <div className={styles['stat-inner']}>
              <span className='tertiary-clr'>$</span>
              <Counter classes='tertiary-clr' start='0' end={10} />
              <span className='tertiary-clr'>m</span>
            </div>
            <div className={styles['stat-desc']}>
              <h2 className='title-sm'>Invested</h2>
            </div>
          </div>
        </div>
        <div className={styles['svg-line']}>
          <DottedLine />
        </div>
        <div className={styles['stat-cont']}>
          <div className={styles['stat']}>
            <div className={styles['stat-inner']}>
              <span className='tertiary-clr'>$</span>
              <Counter classes='tertiary-clr' start='0' end={10} />
              <span className='tertiary-clr'>m</span>
            </div>
            <div className={styles['stat-desc']}>
              <h2 className='title-sm'>Invested</h2>
            </div>
          </div>
        </div>
        <div className={styles['stat-cont']}>
          <div className={styles['stat']}>
            <div className={styles['stat-inner']}>
              <span className='tertiary-clr'>$</span>
              <Counter classes='tertiary-clr' start='0' end={10} />
              <span className='tertiary-clr'>m</span>
            </div>
            <div className={styles['stat-desc']}>
              <h2 className='title-sm'>Invested</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
