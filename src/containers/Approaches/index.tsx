import cn from 'classnames';
import styles from './Approaches.module.scss';
import { GridAccordion } from '@/components/GridAccordion';
import { investment_approaches } from '@/data';

export default function Approaches() {
  return (
    <div className={cn(styles['values'], 'primary-bg pt-lg-128 pt-sm-64')}>
      <div className='grid-inner mb-lg-96 mb-sm-48'>
        <div className={styles['title']}>
          <p className='secondary-clr'>Our Approach</p>
        </div>
        <div className={styles['desc']}>
          <p className='secondary-clr txt-lg'>
            Our values drive us to deliver exceptional financial solutions,
            fostering long-term partnerships based on trust. With a commitment
            to excellence, we empower clients to achieve their goals, ensuring
            their financial success is our utmost priority.
          </p>
        </div>
        <div className={cn(styles['accordion-cont'], 'mt-lg-64 mt-sm-32 mb-lg-128 mb-sm-64' )}>
          {investment_approaches.map(({ id, approach, desc }) => {
            return <GridAccordion key={id} title={approach} content={desc} />;
          })}
        </div>
      </div>
    </div>
  );
}
