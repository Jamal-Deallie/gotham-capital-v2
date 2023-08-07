import styles from './Numbers.module.scss';
import Counter from '@/components/Counter';
import DottedLine from '@/svgs/DottedLine';
import cn from 'classnames';

export default function Statistics() {
  return (
    <div className={cn('secondary-bg py-lg-128 py-sm-64', styles['numbers'] )}>
      <div className='grid-inner'>
        <div className={styles['title']}>
          <p className='primary-clr'>By the Numbers</p>
        </div>
        <div className={styles['desc']}>
          <p className='primary-clr txt-lg'>
            Our expert team's strategic approach ensures superior results,
            making us the<span className='tertiary-clr bold'> preferred choice for investors </span>
            seeking consistent and rewarding financial outcomes.
          </p>
        </div>
      </div>
      <div className='grid-inner my-lg-96 my-sm-48'>
        <div className={styles['stat-cont']}>
          <div className={styles['stat']}>
            <div>
              <span className='tertiary-clr'>$</span>
              <Counter classes='tertiary-clr' />
              <span className='tertiary-clr'>m</span>
            </div>
            <div className={styles['stat-desc']}>
              <h2 className='title-sm'>Invested</h2>
            </div>
          </div>
        </div>
        <div className={styles['stat-cont']}>
          <div className={styles['stat']}>
            <div>
              <span className='tertiary-clr'>$</span>
              <Counter classes='tertiary-clr' />
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
            <div>
              <span className='tertiary-clr'>$</span>
              <Counter classes='tertiary-clr' />
              <span className='tertiary-clr'>m</span>
            </div>
            <div className={styles['stat-desc']}>
              <h2 className='title-sm'>Invested</h2>
            </div>
          </div>
        </div>
        <div className={styles['stat-cont']}>
          <div className={styles['stat']}>
            <div>
              <span className='tertiary-clr'>$</span>
              <Counter classes='tertiary-clr' />
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
