import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, type TextAreaProps } from '@rogy-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'grid', gap: '$2' }}>
        <Text size={'sm'}>Observations </Text>
        <Story />
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations here',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
