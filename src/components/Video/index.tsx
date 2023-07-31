import styles from './Video.module.scss';
import cn from 'classnames';

export default function Video() {
  return (
    <div className={styles['vid']}>
      <video width='100%' muted={true} autoPlay loop>
        <source src={'/video/10.mp4'} type='video/mp4' />
      </video>
    </div>
  );
}
