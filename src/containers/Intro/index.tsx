import styles from './Intro.module.scss';
import Border from '@/components/Border';
import cn from 'classnames';
type Props = {};

export default function Intro({}: Props) {
  return (
    <div className={cn(styles['intro'], 'primary-bg pt-lg-128 pt-sm-64')}>
      <div className='heading'>
        <p>Who We Are</p>
        <h1 className='title-md light'>
          With decades of experience and a team of seasoned financial experts,{' '}
          <span className='tertiary-clr title-md bold'>Gotham Capital</span>{' '}
          prides itself on investment strategies tailored to meet the unique
          goals of each client
        </h1>
      </div>
      <div className={cn(styles['inner'])}>
        <div className='grid-inner'>
          <p className='mt-lg-96 mt-sm-32'>
            At Gotham Capital, we believe in harnessing the power of innovation
            to drive exceptional returns and safeguard our clients' assets. Our
            approach is grounded in meticulous research, data-driven analysis,
            and a keen understanding of market trends, enabling us to identify
            promising opportunities while managing risks effectively.
          </p>
          <p>
            Our commitment to excellence is evident in our client-centric
            approach, ensuring personalized attention and clear communication
            throughout the investment journey. We foster long-term partnerships
            with our clients, placing their interests at the core of every
            decision we make.
          </p>
          <Border color='secondary' />
        </div>
      </div>
    </div>
  );
}
