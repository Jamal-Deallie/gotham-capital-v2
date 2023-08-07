import TeamCard from '@/components/TeamCard';
import styles from './Team.module.scss';
import { employees } from '@/data';
import cn from 'classnames';

type Props = {};

export default function Team({}: Props) {
  return (
    <div className={cn('py-lg-128 py-sm-64 secondary-bg', styles['team'])}>
      <div className='grid-inner'>
        <div className={styles['title']}>
          <h1 className='primary-clr title-md light'>
            Together, we drive success with
            <span className='tertiary-clr title-md light'>{' '}exceptional insights{' '}</span>
            and dedication to excellence.
          </h1>
        </div>
      </div>
      <div className='main-cont pt-lg-96 pt-sm-64 secondary-bg'>
        <div className={styles['grid']}>
          {employees.map(({ id, ...props }) => {
            return <TeamCard {...props} />;
          })}
        </div>
      </div>
    </div>
  );
}