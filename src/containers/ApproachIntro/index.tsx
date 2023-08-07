import styles from './ApproachIntro.module.scss';

type Props = {};

export default function ApproachIntro({}: Props) {
  return (
    <div className='py-lg-128'>
      <div className='grid-inner'>
        <div className={styles['title']}>
          <h1 className='title-md light mb-lg-64 mb-sm-32'>
            By dynamically managing portfolios, leveraging insights, and
            utilizing algorithms, we strive to uncover opportunities and
            <span className='tertiary-clr title-md'>
              {' '}
              deliver exceptional results{' '}
            </span>
            in diverse markets.
          </h1>
        </div>
        <div className={styles['vid']}>
          <video width='100%' muted={true} autoPlay loop>
            <source src={'/video/approach.mp4'} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
}
