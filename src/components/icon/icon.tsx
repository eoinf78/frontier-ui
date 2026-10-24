import { FC } from "react";
import clsx from "clsx";
import styles from './icon.module.scss';

import { BaseIcon, ICON_MAP } from "./base";

interface IconProps {
  name:  keyof typeof ICON_MAP;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'rose';
}

export const Icon: FC<IconProps> = ({name, size = 'medium', color}) => {
  return <span className={clsx(
    `${styles.icon}`, 
    `${size === 'small' && styles.iconSmall}`,
    `${size === 'medium' && styles.iconMedium}`,
    `${size === 'large' && styles.iconLarge}`,
    `${color === 'rose' && styles.iconRose}`,
    `${color === 'secondary' && styles.iconSecondary}`,
    `${color === 'primary' && styles.iconPrimary}`,
  )}>
    <BaseIcon name={name} />
  </span>
}