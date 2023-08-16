import styles from './Stats.module.scss';
import cn from 'classnames';
import Counter from '@/_components/Counter';
type Props = {};

export default function Stats({}: Props) {
  return (
    <div className={cn(styles['stats'], 'secondary-bg pt-lg-128')}>
      <div className='heading mb-lg-96 mb-sm-32 primary-clr'>
        <p>Our Results</p>
        <h1 className='title-md light'>
          Gotham relentlessly prioritizes client success,{' '}
          <span className='tertiary-clr title-md bold'>
            offering tailored solutions
          </span>
          , and unwavering support, with a thriving employee culture, driving
          excellence, innovation, and shared achievements for lasting client
          partnerships.
        </h1>
      </div>
      <div className='main-cont'>
        <div className='pb-lg-180 py-sm-48'>
          <div className={styles['flex-cont']}>
            <div className={styles['stat-one']}>
              <div className={cn(styles['stat'], 'primary-clr')}>
                <Counter start='0' symbol='%' end={95} />
                <div>
                  <h2 className='title-sm'>Client Satisfaction</h2>
                </div>
              </div>
              <div className={styles['dotted-svg']}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 550 550'>
                  <circle id='svg' cx='275' cy='275' r='275' />
                </svg>
              </div>
            </div>
            <div className={styles['stat-two']}>
              <div className={cn(styles['stat'], 'primary-clr')}>
                <Counter start='0' symbol='%' end={90} />
                <div>
                  <h2 className='title-sm'>Employee Satisfaction</h2>
                </div>
              </div>
              <div className={styles['solid-svg']}>
                <svg
                  version='1.1'
                  viewBox='0 0 550 550'
                  preserveAspectRatio='xMinYMin meet'>
                  <circle id='svg' cx='275' cy='275' r='275' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
