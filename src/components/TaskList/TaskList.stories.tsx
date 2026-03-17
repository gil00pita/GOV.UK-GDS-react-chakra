import type { Meta, StoryObj } from '@storybook/react-vite'

import { TaskList } from './TaskList'

const customStatuses = {
  important: { label: 'Important', color: 'red' as const },
  review: { label: 'Needs review', color: 'orange' as const },
  ready: { label: 'Ready', color: 'green' as const },
}

const sampleItems = [
  { title: 'Company directors', href: '#', status: 'ready' as const },
  { title: 'Registered company details', href: '#', status: 'review' as const },
  {
    title: 'Financial history',
    href: '#',
    hint: "Include 5 years of the company's relevant financial information",
    status: 'review' as const,
  },
  { title: 'Business plan', href: '#', status: 'important' as const },
  { title: 'References', href: '#', status: 'important' as const },
]

const meta: Meta<typeof TaskList> = {
  title: 'GOV.UK/Components/Task list',
  component: TaskList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the <TaskList/> component to display a list of tasks with their status.\n\n' +
          'The <TaskList/> component is useful for showing the progress of tasks or steps in a process.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System task list documentation: https://design-system.service.gov.uk/components/task-list/.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    width: 'min(100%, 960px)',
    statuses: customStatuses,
  },
  argTypes: {
    width: { control: 'text' },
    statuses: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TaskList width="min(100%, 960px)" statuses={customStatuses}>
      <TaskList.Heading>Application tasks</TaskList.Heading>
      {sampleItems.map((item) => (
        <TaskList.Item
          key={item.href}
          title={item.title}
          href={item.href}
          hint={item.hint}
          status={item.status}
        />
      ))}
    </TaskList>
  ),
}

export const WithCustomRows: Story = {
  render: () => (
    <TaskList width="min(100%, 960px)">
      <TaskList.Heading>Business details</TaskList.Heading>
      <TaskList.Item title="Trading name" href="#" status="completed" />
      <TaskList.Item
        title="Business address"
        href="#"
        hint="The address where your business is registered"
        status="incomplete"
      />
      <TaskList.Item title="Tax details" href="#" status="cannotStartYet" />
    </TaskList>
  ),
}

export const WithCustomStatuses: Story = {
  render: () => (
    <TaskList width="min(100%, 960px)" statuses={customStatuses}>
      <TaskList.Heading>Submission tasks</TaskList.Heading>
      <TaskList.Item title="Evidence upload" href="#" status="important" />
      <TaskList.Item title="Case worker review" href="#" status="review" />
      <TaskList.Item title="Final sign-off" href="#" status="ready" />
    </TaskList>
  ),
}
