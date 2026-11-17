import styles from './button.module.scss';
import { Slot } from '@/components/slot/slot';
import { Icon, ICON_MAP } from '@/components/icon';
import clsx from 'clsx';

import type { AsChildProps } from '@/components/slot/slot';
import type { ComponentPropsWithRef, Ref } from 'react';

type ButtonProps = AsChildProps<ComponentPropsWithRef<'button'>> & {
  variant?: 'primary' | 'text' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: keyof typeof ICON_MAP;
};


export const Button = ({
  asChild = false,
  children,
  className,
  icon,
  ref,
  size = 'medium',
  type = 'button',
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  const classes = clsx(
    styles.button,
    variant === 'primary' && styles.button__primary,
    variant === 'text' && styles.button__text,
    variant === 'outline' && styles.button__outline,
    size === 'small' && styles.button__small,
    size === 'large' && styles.button__large,
    className
  );

  console.log('size', size, classes);

  if (asChild) {
    return (
      <Slot ref={ref as Ref<HTMLElement>} {...rest} className={classes}>
        {children}
      </Slot>
    );
  }

  return (
    <button ref={ref} {...rest} className={classes} type={type}>
      {icon && <Icon name={icon} size="small" />}
      {children}
    </button>
  );
};