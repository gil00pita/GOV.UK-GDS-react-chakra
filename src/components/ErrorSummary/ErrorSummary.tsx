import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef, useEffect, useId, useRef, type ReactNode } from 'react'

import { Heading } from '@/components/Heading/Heading'
import { Link } from '@/components/Link/Link'
import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

export interface ErrorSummaryItem {
  href: string
  children: ReactNode
}

export interface ErrorSummaryProps extends Omit<BoxProps, 'title'> {
  title?: ReactNode
  description?: ReactNode
  errorList: ErrorSummaryItem[]
  disableAutoFocus?: boolean
}

export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(function ErrorSummary(
  { title = 'There is a problem', description, errorList, disableAutoFocus = false, id, ...props },
  ref
) {
  const generatedId = useId()
  const headingId = id ? `${id}-title` : `govuk-error-summary-${generatedId}-title`
  const localRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!disableAutoFocus) {
      localRef.current?.focus()
    }
  }, [disableAutoFocus])

  return (
    <Box
      ref={(node: HTMLDivElement | null) => {
        localRef.current = node

        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      }}
      id={id}
      as="section"
      role="alert"
      aria-labelledby={headingId}
      tabIndex={-1}
      borderStyle="solid"
      borderWidth={pxToRem(5)}
      borderColor="red.500"
      bg="common.white"
      color="grey.950"
      p={{ base: pxToRem(15), md: pxToRem(20) }}
      _focusVisible={{
        outline: `${pxToRem(3)} solid`,
        outlineColor: 'yellow.500',
        outlineOffset: 0,
      }}
      {...props}
    >
      <Heading as="h2" id={headingId} size={24} color="grey.950" mb={pxToRem(15)}>
        {title}
      </Heading>

      {description ? (
        <Text fontSize={19} color="grey.950" mb={pxToRem(15)}>
          {description}
        </Text>
      ) : null}

      <Box as="ul" listStyleType="none" m={0} p={0}>
        {errorList.map((item, index) => (
          <Box as="li" key={`${item.href}-${index}`} m={0} mb={pxToRem(5)}>
            <Link href={item.href} fontSize={19} fontWeight="700">
              {item.children}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  )
})
