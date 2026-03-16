import type { Meta, StoryObj } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'
import { GOVUKHeader } from './GOVUKHeader'
import { pxToRem } from '@/utils'

const meta: Meta = {
  title: 'GOV.UK/Components/GOV.UK - Header',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'GOV.UK headers provide links to important information and services, such as contact details, accessibility information, and legal notices.\n\n' +
          'Use the header to provide users with easy access to important information and services, and to help them navigate your website.\n\n' +
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
    <GOVUKHeader>
      <GOVUKHeader.Container>
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ md: 'center' }}
          justifyContent="space-between"
          gap={pxToRem(10)}
        >
          <GOVUKHeader.ProductName href="#" />
          <GOVUKHeader.ServiceName href="#">Passport application</GOVUKHeader.ServiceName>
        </Box>

        <GOVUKHeader.Navigation>
          <GOVUKHeader.List>
            <GOVUKHeader.ListItem>
              <GOVUKHeader.Link href="#">Home</GOVUKHeader.Link>
            </GOVUKHeader.ListItem>
            <GOVUKHeader.ListItem current>
              <GOVUKHeader.Link href="#" current>
                Settings
              </GOVUKHeader.Link>
            </GOVUKHeader.ListItem>
            <GOVUKHeader.ListItem>
              <GOVUKHeader.Link href="#">Sign out</GOVUKHeader.Link>
            </GOVUKHeader.ListItem>
          </GOVUKHeader.List>
        </GOVUKHeader.Navigation>
      </GOVUKHeader.Container>
    </GOVUKHeader>
  ),
}

export const ProductOnly: Story = {
  render: () => (
    <GOVUKHeader>
      <GOVUKHeader.Container>
        <GOVUKHeader.ProductName href="#" />
      </GOVUKHeader.Container>
    </GOVUKHeader>
  ),
}
