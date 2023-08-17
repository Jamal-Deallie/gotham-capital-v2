import Team from '@/app/_containers/Team';
import TeamCard from '@/_components/TeamCard';
import SelectWrapper from '@/app/_containers/SelectWrapper';
import styles from './Team.module.scss';
import cn from 'classnames';
import { getEmployees } from '@/_helpers/mongoHelpers';

export default async function TeamPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10;

  const search =
    typeof searchParams.search === 'string' ? searchParams.search : undefined;
  //@ts-ignore
  const { results } = await getEmployees({ page, limit, query: search });

  return (
    <div
      className={cn('py-lg-128 py-sm-64 secondary-bg full-h', styles['team'])}>
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
      <div className='pt-lg-64 pt-sm-32 secondary-bg'>
        <div className='grid-inner'>
          {results.map(
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
