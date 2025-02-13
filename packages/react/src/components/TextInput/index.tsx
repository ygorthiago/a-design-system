import { forwardRef, ComponentRef, type ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
