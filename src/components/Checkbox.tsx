import {
  Checkbox as ChakraCheckbox,
  Fieldset,
  Text,
  type CheckboxRootProps,
  type FieldsetRootProps,
} from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

// ─── GOV.UK Checkbox.Root ────────────────────────────────────────────
export interface CheckboxProps extends CheckboxRootProps {
  /** Hint text displayed below the label */
  hint?: string
  /** Use smaller checkboxes (24×24 instead of 40×40) */
  small?: boolean
}

// ─── GOV.UK CheckboxGroup ────────────────────────────────────────────
export interface CheckboxGroupProps extends Omit<FieldsetRootProps, 'children'> {
  /** Legend / question text */
  legend: string
  /** Whether the legend should be visually styled as page heading */
  legendAsHeading?: boolean
  /** Hint text below the legend */
  hint?: string
  /** Error message */
  error?: string
  children: ReactNode
}

const govukCheckboxStyles = {
  control: {
    width: '40px',
    height: '40px',
    minWidth: '40px',
    border: '2px solid',
    borderColor: 'black',
    borderRadius: '0',
    bg: 'white',
    _checked: {
      bg: 'black',
      borderColor: 'black',
      color: 'white',
      _hover: {
        bg: 'black',
        borderColor: 'black',
      },
    },
    _focus: {
      boxShadow: '0 0 0 3px #fd0, 0 0 0 7px #0b0c0c',
      outline: 'none',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  small: {
    width: '24px',
    height: '24px',
    minWidth: '24px',
  },
}

const CheckboxRoot = forwardRef<HTMLLabelElement, CheckboxProps>(function CheckboxRoot(
  { hint, small, children, ...props },
  ref
) {
  const controlSize = small
    ? { ...govukCheckboxStyles.control, ...govukCheckboxStyles.small }
    : govukCheckboxStyles.control

  return (
    <ChakraCheckbox.Root
      ref={ref}
      display="flex"
      alignItems="flex-start"
      gap={3}
      py={2}
      cursor="pointer"
      {...props}
    >
      <ChakraCheckbox.HiddenInput />
      <ChakraCheckbox.Control css={controlSize} />
      <div>
        <ChakraCheckbox.Label
          fontSize={small ? '1rem' : '1.1875rem'}
          lineHeight={small ? '1.25rem' : '1.5625rem'}
          color="black"
          cursor="pointer"
        >
          {children}
        </ChakraCheckbox.Label>
        {hint ? (
          <Text fontSize="1rem" color="fg.muted" mt={1}>
            {hint}
          </Text>
        ) : null}
      </div>
    </ChakraCheckbox.Root>
  )
})

const CheckboxControl = ChakraCheckbox.Control
const CheckboxLabel = ChakraCheckbox.Label
const CheckboxHiddenInput = ChakraCheckbox.HiddenInput

function CheckboxGroup({
  legend,
  legendAsHeading = false,
  hint,
  error,
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <Fieldset.Root invalid={Boolean(error)} {...props}>
      <Fieldset.Legend
        fontSize={legendAsHeading ? '1.5rem' : '1.1875rem'}
        fontWeight={legendAsHeading ? 'bold' : 'normal'}
        lineHeight={legendAsHeading ? '1.875rem' : '1.5625rem'}
        mb={hint || error ? 1 : 3}
      >
        {legend}
      </Fieldset.Legend>

      {hint ? (
        <Text fontSize="1rem" color="fg.muted" mb={3}>
          {hint}
        </Text>
      ) : null}

      {error ? (
        <Fieldset.ErrorText
          fontSize="1.1875rem"
          fontWeight="bold"
          color="danger"
          borderLeft="4px solid"
          borderColor="danger"
          pl={3}
          mb={3}
        >
          {error}
        </Fieldset.ErrorText>
      ) : null}

      <Fieldset.Content display="flex" flexDirection="column" gap={0}>
        {children}
      </Fieldset.Content>
    </Fieldset.Root>
  )
}

export const Checkbox = {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Label: CheckboxLabel,
  HiddenInput: CheckboxHiddenInput,
  Group: CheckboxGroup,
}

export { CheckboxGroup }
