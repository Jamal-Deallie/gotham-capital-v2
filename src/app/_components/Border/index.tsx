import styles from './Border.module.scss';
import cn from 'classnames';

export default function Border({
  color,
  classes,
}: {
  color: 'secondary' | 'primary';
  classes?: string;
}) {
  return (
    <div className={cn(styles['border'], `${color}-clr`, classes)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 500 500'
        className={`${color}-clr`}>
        <circle
          id='svg'
          cx='250'
          cy='250'
          r='200'
          fill='currentColor'
        />
      </svg>
      <div className={`${color}-bg`}></div>
    </div>
  );
}
