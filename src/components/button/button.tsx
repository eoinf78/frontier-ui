import styles from './button.module.scss';
import { Slot, type AsChildProps } from '@/components/slot/slot';
import { FC, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx';
import { ICON_MAP } from '../icon/base';
import { Icon } from '../icon';

type ButtonProps = AsChildProps<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'primary' | 'text' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  icon?:  keyof typeof ICON_MAP;
}

export const Button: FC<ButtonProps> = ({ 
  asChild = false,
  icon,
  size = 'medium',
  variant = 'primary',
  ...props 
}) => {
  const Comp = asChild ? Slot : "button"
  
  const className = clsx(
    `${styles.button}`,
    props.className,
    variant === 'primary' && styles.button__primary,
    variant === 'text' && styles.button__text,
    variant === 'outline' && styles.button__outline
  );

  if (asChild) {
    return <Slot {...props} className={className}>
      {props.children}
    </Slot>
  }

  return <button {...props} className={className} type='button'>
    {icon && <Icon name={icon} size="small"/>}
    {props.children}
  </button>
};