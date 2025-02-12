import type {
  ComponentProps,
  ElementType,
  JSX,
  JSXElementConstructor,
} from 'react'

export type CustomComponentProps<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = ComponentProps<T> & {
  as?: ElementType
}
