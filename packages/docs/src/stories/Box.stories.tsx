import { Box, Text, type BoxProps } from '@rogy-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testing Box element</Text>,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
