import type {
  ComponentProps,
  ElementType,
  JSX,
  JSXElementConstructor,
} from 'react'

export type CustomComponentProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- matching ComponentProps generic
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = ComponentProps<T> & {
  as?: ElementType
}
