import { Box, Input as ChakraInput, chakra, type BoxProps, type InputProps } from '@chakra-ui/react'
import { forwardRef, useId, type ReactNode } from 'react'

import { pxToRem } from '../../utils'
import { Text } from '../Text/Text'

type DateInputWidth = '2' | '4'
type DateInputPart = 'day' | 'month' | 'year'

const WIDTH_MAX: Record<DateInputWidth, string> = {
  '2': '5.4ex',
  '4': '9ex',
}

export interface DateInputInputProps extends Omit<InputProps, 'size'> {
  label: ReactNode
  inputWidth?: DateInputWidth
}

export interface DateInputProps extends BoxProps {
  legend?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  legendAsPageHeading?: boolean
  dayLabel?: ReactNode
  monthLabel?: ReactNode
  yearLabel?: ReactNode
  dayInputProps?: Omit<DateInputInputProps, 'label' | 'inputWidth' | 'id'>
  monthInputProps?: Omit<DateInputInputProps, 'label' | 'inputWidth' | 'id'>
  yearInputProps?: Omit<DateInputInputProps, 'label' | 'inputWidth' | 'id'>
}

function getInputStyles(isInvalid: boolean): InputProps {
  return {
    borderRadius: '0',
    borderWidth: pxToRem(2),
    borderColor: isInvalid ? 'red.500' : 'grey.950',
    bg: 'common.white',
    color: 'grey.950',
    fontSize: pxToRem(19),
    lineHeight: pxToRem(25),
    px: pxToRem(8),
    py: pxToRem(5),
    h: pxToRem(40),
    _placeholder: { color: 'grey.400', opacity: 1 },
    _hover: { borderColor: isInvalid ? 'red.500' : 'common.black' },
    _focusVisible: {
      outline: `${pxToRem(3)} solid`,
      outlineColor: 'yellow.500',
      outlineOffset: '0',
      borderColor: 'common.black',
      boxShadow: 'inset 0 0 0 2px var(--chakra-colors-common-black)',
    },
    _invalid: { borderColor: 'red.500' },
    _disabled: {
      opacity: 1,
      cursor: 'not-allowed',
      color: 'grey.700',
      bg: 'grey.100',
    },
  }
}

const DateInputField = forwardRef<HTMLInputElement, DateInputInputProps>(function DateInputField(
  { label, inputWidth = '2', ...props },
  ref
) {
  return (
    <Box display="flex" flexDirection="column" gap={pxToRem(10)}>
      <chakra.label
        htmlFor={props.id}
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        color="var(--chakra-colors-grey-950)"
        marginBottom={0}
      >
        {label}
      </chakra.label>
      <ChakraInput ref={ref} w="100%" maxW={WIDTH_MAX[inputWidth]} inputMode="numeric" {...props} />
    </Box>
  )
})

export const DateInput = forwardRef<HTMLDivElement, DateInputProps>(function DateInput(
  {
    legend,
    hint,
    error,
    legendAsPageHeading = false,
    dayLabel = 'Day',
    monthLabel = 'Month',
    yearLabel = 'Year',
    dayInputProps,
    monthInputProps,
    yearInputProps,
    ...props
  },
  ref
) {
  const generatedId = useId()
  const baseId = `govuk-date-input-${generatedId}`
  const hintId = hint ? `${baseId}-hint` : undefined
  const errorId = error ? `${baseId}-error` : undefined
  const isInvalid = Boolean(error)
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined
  const inputStyles = getInputStyles(isInvalid)

  const buildInputProps = (
    part: DateInputPart,
    extraProps?: Omit<DateInputInputProps, 'label' | 'inputWidth' | 'id'>
  ) => ({
    id: `${baseId}-${part}`,
    name: `${baseId}-${part}`,
    'aria-describedby': describedBy,
    ...inputStyles,
    ...extraProps,
  })

  return (
    <Box ref={ref} as="fieldset" border="0" p={0} m={0} minInlineSize={0} {...props}>
      {legend ? (
        <Box as="legend" mb={hint || error ? 1 : 3} width="100%">
          <Text
            as={legendAsPageHeading ? 'h1' : 'span'}
            fontSize={legendAsPageHeading ? 36 : 24}
            fontWeight="700"
            color="grey.950"
            mb={0}
          >
            {legend}
          </Text>
        </Box>
      ) : null}

      {hint ? (
        <Text id={hintId} fontSize={19} color="grey.400" mb={3}>
          {hint}
        </Text>
      ) : null}

      {error ? (
        <Text id={errorId} fontSize={19} color="red.500" fontWeight="700" mb={3}>
          {`Error: ${error}`}
        </Text>
      ) : null}

      <Box display="flex" flexWrap="wrap" gap={pxToRem(20)}>
        <DateInputField
          label={dayLabel}
          inputWidth="2"
          {...buildInputProps('day', dayInputProps)}
        />
        <DateInputField
          label={monthLabel}
          inputWidth="2"
          {...buildInputProps('month', monthInputProps)}
        />
        <DateInputField
          label={yearLabel}
          inputWidth="4"
          {...buildInputProps('year', yearInputProps)}
        />
      </Box>
    </Box>
  )
})
