import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

import { forwardRef } from 'react'

export type LinkProps = ChakraLinkProps

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return (
    <ChakraLink
      ref={ref}
      color="govuk.blue"
      textDecoration="underline"
      fontWeight="normal"
      rounded="1px"
      _hover={{
        color: 'govuk.darkBlue',
      }}
      _focus={{
        color: 'black',
        textDecorationThickness: '3px',
        outline: '3px solid',
        outlineColor: 'govuk.yellow',
        outlineOffset: '0',
        backgroundColor: 'govuk.yellow',
      }}
      {...props}
    />
  )
})

Link.displayName = 'Link'
