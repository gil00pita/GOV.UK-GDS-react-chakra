import type { Meta, StoryObj } from '@storybook/react'
import { Stack, Text } from '@chakra-ui/react'

import { Link } from '../components/Link'

const meta: Meta<typeof Link> = {
  title: 'GOV.UK/Link',
  component: Link,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    isExternal: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    href: '#',
    isExternal: false,
    children: 'View guidance',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const External: Story = {
  args: {
    href: 'https://www.gov.uk',
    isExternal: true,
    children: 'Visit GOV.UK',
  },
}

export const InlineText: Story = {
  render: (args) => (
    <Text maxW="460px">
      You can{' '}
      <Link {...args} href="https://www.gov.uk/service-manual" isExternal>
        read the Service Manual
      </Link>{' '}
      to learn more about designing and delivering great public services.
    </Text>
  ),
}

export const States: Story = {
  render: () => (
    <Stack align="start" spacing={3}>
      <Link href="#">Default GOV.UK link</Link>
      <Link href="#" isExternal>
        External GOV.UK link
      </Link>
    </Stack>
  ),
}
