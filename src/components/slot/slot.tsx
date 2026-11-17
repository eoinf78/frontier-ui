import clsx from 'clsx';
import { Children, cloneElement, HTMLAttributes } from 'react';

import type { CSSProperties, Ref, RefCallback, ReactElement, ReactNode } from 'react';

export type AsChildProps<P extends { children?: ReactNode }> =
  | ({ asChild?: false } & P)
  | ({ asChild: true; children: ReactElement } & Omit<P, 'children'>);


type SlotProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  ref?: Ref<HTMLElement>;
};

type ChildProps = HTMLAttributes<HTMLElement> & {
  ref?: Ref<HTMLElement>;
};

function mergeRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    });
  };
}

export function Slot({ children, className, ref, style, ...props }: SlotProps) {
  // Throws unless there is exactly one valid element child
  const child = Children.only(children) as ReactElement<ChildProps>;
  const { ref: childRef, className: childClassName, style: childStyle, ...childProps } = child.props;

  return cloneElement(child, {
    ...props,
    ...childProps,
    ref: mergeRefs(ref, childRef),
    className: clsx(className, childClassName),
    style: { ...style, ...(childStyle as CSSProperties) },
  } as ChildProps);
}