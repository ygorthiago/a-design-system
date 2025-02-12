import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, type AvatarProps } from '@rogy-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ygorthiago.png',
    alt: 'Rogy',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
