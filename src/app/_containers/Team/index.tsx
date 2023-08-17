import TeamCard from '@/_components/TeamCard';
import SelectWrapper from '@/app/_containers/SelectWrapper';
import styles from './Team.module.scss';
import cn from 'classnames';

export default function Team({ employee }: { employee?: any }) {
  return (
    <div className={cn('py-lg-128 py-sm-64 secondary-bg', styles['team'])}>
      <div className='grid-inner'>
        <div className={styles['title']}>
          <h1 className='primary-clr title-md light'>
            Together, we drive success with
            <span className='tertiary-clr title-md light'>
              {' '}
              exceptional insights{' '}
            </span>
            and dedication to excellence.
          </h1>
        </div>
      </div>
      <div className='px-lg-40 px-sm-16 pt-lg-96 pt-sm-64'>
        <SelectWrapper />
      </div>
      <div className='main-cont pt-lg-64 pt-sm-32 secondary-bg'>
        <div className={styles['grid']}>
          {employee.map(
            ({
              _id,
              department,
              name,
              image,
            }: {
              _id: string;
              name: string;
              department: string;
              image: string;
            }) => {
              return (
                <TeamCard
                  key={_id}
                  department={department}
                  name={name}
                  image={image}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
