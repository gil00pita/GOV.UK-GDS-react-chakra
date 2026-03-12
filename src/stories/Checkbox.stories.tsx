import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/Checkbox'

const meta: Meta<typeof Checkbox.Root> = {
  title: 'GOV.UK/Checkbox',
  component: Checkbox.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'I agree to the terms and conditions',
  },
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
    children: 'Pre-selected option',
  },
}

export const WithHint: Story = {
  args: {
    children: 'Waste from animal carcasses',
    hint: 'Including abattoir waste and dead animals',
  },
}

export const SmallCheckbox: Story = {
  args: {
    children: 'HM Revenue and Customs',
    small: true,
  },
}

export const DisabledCheckbox: Story = {
  args: {
    disabled: true,
    children: 'Disabled checkbox',
  },
}

export const CheckboxGroupExample: Story = {
  render: () => (
    <Checkbox.Group legend="Which types of waste do you transport?" hint="Select all that apply.">
      <Checkbox.Root value="waste-animal">Waste from animal carcasses</Checkbox.Root>
      <Checkbox.Root value="waste-mines">Waste from mines or quarries</Checkbox.Root>
      <Checkbox.Root value="waste-farm">Farm or agricultural waste</Checkbox.Root>
      <Checkbox.Root value="waste-clinical">Clinical waste</Checkbox.Root>
    </Checkbox.Group>
  ),
}

export const WithHintsGroup: Story = {
  render: () => (
    <Checkbox.Group legend="Which types of waste do you transport?" hint="Select all that apply.">
      <Checkbox.Root value="waste-animal" hint="Including abattoir waste and dead animals">
        Waste from animal carcasses
      </Checkbox.Root>
      <Checkbox.Root value="waste-mines" hint="ite waste andite tailings">
        Waste from mines or quarries
      </Checkbox.Root>
      <Checkbox.Root value="waste-farm" hint="For example, slurry">
        Farm or agricultural waste
      </Checkbox.Root>
    </Checkbox.Group>
  ),
}

export const WithError: Story = {
  render: () => (
    <Checkbox.Group
      legend="Which types of waste do you transport?"
      hint="Select all that apply."
      error="Select the types of waste you transport"
    >
      <Checkbox.Root value="waste-animal">Waste from animal carcasses</Checkbox.Root>
      <Checkbox.Root value="waste-mines">Waste from mines or quarries</Checkbox.Root>
      <Checkbox.Root value="waste-farm">Farm or agricultural waste</Checkbox.Root>
    </Checkbox.Group>
  ),
}

export const SmallCheckboxGroup: Story = {
  render: () => (
    <Checkbox.Group legend="Organisation">
      <Checkbox.Root value="hmrc" small>
        HM Revenue and Customs
      </Checkbox.Root>
      <Checkbox.Root value="employment" small>
        Employment Tribunal
      </Checkbox.Root>
      <Checkbox.Root value="mod" small>
        Ministry of Defence
      </Checkbox.Root>
    </Checkbox.Group>
  ),
}
