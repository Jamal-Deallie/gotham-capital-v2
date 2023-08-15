import cn from 'classnames';
import styles from './Approaches.module.scss';
import { GridAccordion } from '@/components/GridAccordion';
import { investment_approaches } from '@/data';

export default function Approaches() {
  return (
    <div className={cn(styles['values'], 'primary-bg py-lg-128 py-sm-64')}>
      <div className='heading mb-lg-96 mb-sm-32'>
        <p>Our Approach</p>
        <h1 className='title-md light'>
          Gotham consistently delivers exceptional returns through expert
          strategies,{' '}
          <span className='tertiary-clr title-md bold'>precise execution</span>,{' '}
          and a proven track record, empowering clients' financial aspirations.
        </h1>
      </div>
      <div className='grid-inner'>
        <div
          className={cn(
            styles['accordion-cont'],
            'mt-lg-32 mt-sm-32 mb-lg-128 mb-sm-64'
          )}>
          {investment_approaches.map(({ id, approach, desc }) => {
            return <GridAccordion key={id} title={approach} content={desc} />;
          })}
        </div>
      </div>
    </div>
  );
}
