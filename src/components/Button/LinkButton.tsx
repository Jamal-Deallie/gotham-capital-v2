import { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { ILinkButtonProps } from '@/types';
import styles from './Button.module.scss';

function LinkComponent({
  size,
  variant,
  block,
  children,
  href,
  classes,
}: ILinkButtonProps) {
  const styleClasses = cn(
    classes,
    styles['base'],
    styles[`${variant}-variant`],
    styles[`${size}`]
  );

  return (
    <Link href={href} passHref className={styleClasses}>
      {children}
    </Link>
  );
}

export const LinkButton = memo(LinkComponent);
