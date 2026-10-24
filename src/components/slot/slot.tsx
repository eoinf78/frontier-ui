import { Children, cloneElement, HTMLAttributes, isValidElement } from "react";

export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode }


export function Slot({
  children,
  ...props
}: HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}) {
  if (isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ...children.props,
      style: {
        ...props.style,
        ...children.props.style,
      },
      className: props.className
    })
  }
  if (Children.count(children) > 1) {
    Children.only(null)
  }
  return null
}