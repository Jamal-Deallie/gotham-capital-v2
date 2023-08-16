import CategoryCard from '@/_components/CategoryCard';
import styles from './InvestmentCategories.module.scss';
import cn from 'classnames';
import Border from '@/_components/Border';
type Props = {};

export default function index({}: Props) {
  const arr = [1, 2, 3, 4];
  return (
    <div className={cn(styles['intro'], 'secondary-bg primary-clr')}>
      <div className={cn(styles['inner'])}>
        <div className='heading mb-lg-96 mb-sm-32'>
          <p>We Invest In</p>
          <h1 className='title-md light'>
            Gotham Capital strives to employ dynamic investment strategies. Our
            approach aims to{' '}
            <span className='tertiary-clr title-md bold'>
              uncover opportunities{' '}
            </span>{' '}
            and deliver exceptional results across diverse markets
          </h1>
        </div>
        <div className='grid-inner mt-lg-96 mt-sm-32'>
          {arr.map(i => {
            return <CategoryCard key={i} />;
          })}

          <Border color='primary' />
        </div>
      </div>
    </div>
  );
}
