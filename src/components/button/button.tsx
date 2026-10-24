import styles from './button.module.scss';
import { Slot, type AsChildProps } from '../slot';
import { FC } from 'react'
import clsx from 'clsx';
import { ICON_MAP } from '../icon/base';
import { Icon } from '../icon';

type ButtonProps = AsChildProps<React.ButtonHTMLAttributes<HTMLButtonElement>> & {
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
  
  return <Comp {...props} className={
    clsx(
      `${styles.button}`, 
      props.className,
      variant === 'primary' && styles.button__primary,
      variant === 'text' && styles.button__text,
      variant === 'outline' && styles.button__outline
    )} 
    type='button'
  >
    {icon && <Icon name={icon} size="small"/>}
    {props.children}
  </Comp>
};