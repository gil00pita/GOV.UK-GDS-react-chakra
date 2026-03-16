import type { Meta, StoryObj } from '@storybook/react-vite'

import { GOVUKHeader } from './GOVUKHeader'
import { ServiceNavigation } from '@/components/ServiceNavigation'

const meta: Meta = {
  title: 'GOV.UK/Components/GOV.UK - Header',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The GOV.UK header is the global masthead used across GOV.UK. The current pattern is logo-first, with optional utility links aligned to the right.\n\n' +
          'For service-specific names and section navigation, pair it with the `ServiceNavigation` component instead of placing service navigation inside the header.\n\n' +
          'For GOV.UK guidance, see the GOV.UK Design System header documentation: https://design-system.service.gov.uk/components/header/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <GOVUKHeader>
        <GOVUKHeader.Container>
          <GOVUKHeader.Logo href="#" />
        </GOVUKHeader.Container>
      </GOVUKHeader>
    </>
  ),
}

export const WithServiceName: Story = {
  render: () => (
    <GOVUKHeader>
      <GOVUKHeader.Container>
        <GOVUKHeader.Logo href="#" />
      </GOVUKHeader.Container>
      <ServiceNavigation.Root>
        <ServiceNavigation.ServiceContainer>
          <ServiceNavigation.ServiceName href="#">Service name</ServiceNavigation.ServiceName>
          <ServiceNavigation.Toggle />
        </ServiceNavigation.ServiceContainer>
        <ServiceNavigation.Nav>
          <ServiceNavigation.List>
            <ServiceNavigation.Item current>
              <ServiceNavigation.Link href="#" current>
                Navigation item 1
              </ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 2</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 3</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href="#">Navigation item 4</ServiceNavigation.Link>
            </ServiceNavigation.Item>
          </ServiceNavigation.List>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Root>
    </GOVUKHeader>
  ),
}
