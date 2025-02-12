import type { StoryObj, Meta } from '@storybook/react'
import { Heading, type HeadingProps } from '@rogy-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading: Lorem ipsum dolor sit amet',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default Heading is rendered as an h2 element. You can change this by passing the `as` prop.',
      },
    },
  },
}
