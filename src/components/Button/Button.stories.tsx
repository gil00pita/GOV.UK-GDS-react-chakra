import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components'
import { Stack } from '@chakra-ui/react'
import { pxToRem } from '@/utils'

const meta: Meta<typeof Button> = {
  title: 'GOV.UK/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'inverse', 'link'],
    },
    showArrow: { control: 'boolean' },
  },
  args: {
    children: 'Start now',
    variant: 'primary',
    showArrow: false,
  },
}

export const AllVariants: Story = {
  render: () => (
    <Stack gap={4}>
      <Button variant="primary">Primary (GOV.UK style)</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="error">Error</Button>
      <Button variant="inverse">Inverse</Button>
      <Button variant="link">Link</Button>
    </Stack>
  ),
}
