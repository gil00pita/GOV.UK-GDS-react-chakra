import { Link, LinkProps } from '../Link'

import { Text } from '../Text'
import { forwardRef } from 'react'
import { pxToRem } from '@/utils'

export type SkipLinkProps = LinkProps

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ children = 'Skip to main content', href = '#content', ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        position="absolute"
        top={0}
        left={0}
        clip="rect(0 0 0 0)"
        clipPath="inset(50%)"
        h="1px"
        w="1px"
        overflow="hidden"
        whiteSpace="nowrap"
        color="link"
        _hover={{
          color: 'link.hover',
        }}
        _focusVisible={{
          clip: 'auto',
          clipPath: 'none',
          h: 'auto',
          overflow: 'visible',
          position: 'absolute' as const,
          top: 0,
          left: 0,
          w: '100%',
          zIndex: 1000,
          p: `${pxToRem(15)} ${pxToRem(15)}`,
          bg: 'yellow.500',
          color: 'common.black',
          outline: '1px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
        }}
        {...props}
      >
        <Text as="span" fontSize={16} textDecoration="none" color={'currentColor'}>
          {children}
        </Text>
      </Link>
    )
  }
)

SkipLink.displayName = 'SkipLink'
