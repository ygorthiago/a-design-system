import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, type MultiStepProps } from '@rogy-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'grid', gap: '$2' }}>
        <Story />
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
