import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

import { forwardRef } from 'react'

export interface LinkProps extends ChakraLinkProps {
  noStyle?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ noStyle, ...props }, ref) => {
  return (
    <ChakraLink
      ref={ref}
      color={noStyle ? 'inherit' : 'brand.500'}
      textDecoration={noStyle ? 'none' : 'underline'}
      textDecorationThickness="max(1px, 0.0625rem)"
      textUnderlineOffset="0.1578em"
      fontWeight="normal"
      _hover={{
        color: noStyle ? 'inherit' : 'brand.700',
        textDecoration: 'underline',
        textDecorationThickness: 'max(3px, 0.1875rem)', // Thicker on hover (GOV.UK style)
      }}
      _focus={{
        outline: '3px solid',
        outlineColor: 'yellow.500',
        outlineOffset: 0,
        bgColor: 'yellow.500',
        color: 'fg',
        textDecoration: 'underline',
        textDecorationThickness: 'max(3px, 0.1875rem)',
        _hover: {
          color: noStyle ? 'inherit' : 'fg',
          textDecorationThickness: 'max(3px, 0.1875rem)',
        },
      }}
      _visited={{
        color: noStyle ? 'inherit' : 'fg',
      }}
      _dark={{
        color: noStyle ? 'inherit' : 'brand.200',
        _hover: {
          color: noStyle ? 'inherit' : 'brand.400',
        },
        _focus: {
          color: noStyle ? 'inherit' : 'fg',
        },
        _visited: {
          color: noStyle ? 'inherit' : 'fg',
        },
      }}
      {...props}
    />
  )
})

Link.displayName = 'Link'
