import type { Meta, StoryObj } from '@storybook/react-vite'

import { NotificationBanner, NotificationBannerProps } from './NotificationBanner'

interface NotificationBannerArgs extends Omit<NotificationBannerProps, 'hint'> {
  heading: string
  variant: 'info' | 'success' | 'error'
}

const meta: Meta<NotificationBannerArgs> = {
  title: 'GOV.UK/Components/Notification banner',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the notification banner component to display important messages to users.\n\n' +
          'The notification banner component is useful for drawing attention to critical information or updates.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System notification banner documentation: https://design-system.service.gov.uk/components/notification-banner/.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    variant: {
      control: 'select',
      options: ['info', 'success', 'error'],
    },
  },
  args: {
    heading: 'Important',
    variant: 'info',
  },
} satisfies Meta<NotificationBannerArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NotificationBanner width="720px" variant={args.variant}>
      <NotificationBanner.Heading>{args.heading}</NotificationBanner.Heading>
      <NotificationBanner.Body>
        You have 7 days left to send your application.
      </NotificationBanner.Body>
    </NotificationBanner>
  ),
}

export const WithHeadingAndBody: Story = {
  render: (args) => (
    <NotificationBanner width="720px" variant={args.variant}>
      <NotificationBanner.Heading>{args.heading}</NotificationBanner.Heading>
      <NotificationBanner.Body>
        If your passport was issued before 1 January 2019, you may need to renew it before you
        travel.
      </NotificationBanner.Body>
    </NotificationBanner>
  ),
}

export const Success: Story = {
  render: (args) => (
    <NotificationBanner width="720px" variant={'success'}>
      <NotificationBanner.Heading>{args.heading}</NotificationBanner.Heading>
      <NotificationBanner.Body>
        Your reference number is <strong>HDJ2123F</strong>.
      </NotificationBanner.Body>
    </NotificationBanner>
  ),
}

export const Error: Story = {
  render: (args) => (
    <NotificationBanner width="720px" variant={'error'}>
      <NotificationBanner.Heading>{args.heading}</NotificationBanner.Heading>
      <NotificationBanner.Body>
        Your reference number is <strong>HDJ2123F</strong>.
      </NotificationBanner.Body>
    </NotificationBanner>
  ),
}
