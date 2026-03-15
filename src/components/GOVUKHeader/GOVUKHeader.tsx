import { Box, type BoxProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

import { Link } from '@/components/Link'
import { pxToRem } from '@/utils'

export type GOVUKHeaderProps = BoxProps

export type GOVUKHeaderContainerProps = BoxProps

export type GOVUKHeaderProductNameProps = React.ComponentProps<typeof Link>

export type GOVUKHeaderServiceNameProps = React.ComponentProps<typeof Link>

export type GOVUKHeaderNavigationProps = BoxProps

export type GOVUKHeaderListProps = BoxProps

export type GOVUKHeaderListItemProps = BoxProps & {
  current?: boolean
}

export interface GOVUKHeaderLinkProps extends React.ComponentProps<typeof Link> {
  current?: boolean
}

const GOVUKHeaderRoot = forwardRef<HTMLElement, GOVUKHeaderProps>(function GOVUKHeader(props, ref) {
  return (
    <Box
      ref={ref}
      as="header"
      bg="grey.950"
      color="common.white"
      borderBottom="10px solid"
      borderBottomColor="brand.500"
      {...props}
    />
  )
})

const GOVUKHeaderContainer = forwardRef<HTMLDivElement, GOVUKHeaderContainerProps>(
  function GOVUKHeaderContainer(props, ref) {
    return (
      <Box
        ref={ref}
        maxW="1200px"
        mx="auto"
        px={{ base: pxToRem(15), md: pxToRem(30) }}
        py={pxToRem(10)}
        {...props}
      />
    )
  }
)

const GOVUKHeaderProductName = forwardRef<HTMLAnchorElement, GOVUKHeaderProductNameProps>(
  function GOVUKHeaderProductName(props, ref) {
    return (
      <Link
        ref={ref}
        display="inline-flex"
        alignItems="center"
        gap={pxToRem(10)}
        color="common.white"
        textDecoration="none"
        fontSize={pxToRem(30)}
        lineHeight={pxToRem(30)}
        fontWeight="700"
        _hover={{ color: 'common.white', textDecoration: 'none' }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'common.black',
          textDecoration: 'none',
        }}
        {...props}
      >
        <Box
          as="span"
          fontSize={pxToRem(14)}
          lineHeight={1}
          fontWeight="700"
          letterSpacing={pxToRem(1)}
        >
          GOV.UK
        </Box>
      </Link>
    )
  }
)

const GOVUKHeaderServiceName = forwardRef<HTMLAnchorElement, GOVUKHeaderServiceNameProps>(
  function GOVUKHeaderServiceName(props, ref) {
    return (
      <Link
        ref={ref}
        color="common.white"
        textDecoration="none"
        fontSize={pxToRem(24)}
        lineHeight={pxToRem(30)}
        fontWeight="700"
        _hover={{ color: 'common.white', textDecoration: 'underline' }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'common.black',
          textDecoration: 'none',
        }}
        {...props}
      />
    )
  }
)

const GOVUKHeaderNavigation = forwardRef<HTMLDivElement, GOVUKHeaderNavigationProps>(
  function GOVUKHeaderNavigation(props, ref) {
    return (
      <Box
        ref={ref}
        borderTop="1px solid"
        borderTopColor="rgba(255,255,255,0.25)"
        mt={pxToRem(10)}
        pt={pxToRem(10)}
        {...props}
      />
    )
  }
)

const GOVUKHeaderList = forwardRef<HTMLUListElement, GOVUKHeaderListProps>(
  function GOVUKHeaderList(props, ref) {
    return (
      <Box
        ref={ref}
        as="ul"
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        gap={pxToRem(20)}
        m={0}
        p={0}
        {...props}
      />
    )
  }
)

const GOVUKHeaderListItem = forwardRef<HTMLLIElement, GOVUKHeaderListItemProps>(
  function GOVUKHeaderListItem({ current = false, ...props }, ref) {
    return (
      <Box ref={ref} as="li" position="relative" fontWeight={current ? '700' : '400'} {...props} />
    )
  }
)

const GOVUKHeaderLink = forwardRef<HTMLAnchorElement, GOVUKHeaderLinkProps>(
  function GOVUKHeaderLink({ current = false, ...props }, ref) {
    return (
      <Link
        ref={ref}
        aria-current={current ? 'page' : undefined}
        color="common.white"
        textDecoration="underline"
        textDecorationThickness="max(1px, 0.0625rem)"
        textUnderlineOffset="0.1578em"
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(20)}
        fontWeight={current ? '700' : '400'}
        _hover={{
          color: 'common.white',
          textDecorationThickness: 'max(3px, 0.1875rem)',
        }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'common.black',
          textDecoration: 'none',
        }}
        {...props}
      />
    )
  }
)

export const GOVUKHeader = Object.assign(GOVUKHeaderRoot, {
  Root: GOVUKHeaderRoot,
  Container: GOVUKHeaderContainer,
  ProductName: GOVUKHeaderProductName,
  ServiceName: GOVUKHeaderServiceName,
  Navigation: GOVUKHeaderNavigation,
  List: GOVUKHeaderList,
  ListItem: GOVUKHeaderListItem,
  Link: GOVUKHeaderLink,
})

export {
  GOVUKHeaderRoot,
  GOVUKHeaderContainer,
  GOVUKHeaderProductName,
  GOVUKHeaderServiceName,
  GOVUKHeaderNavigation,
  GOVUKHeaderList,
  GOVUKHeaderListItem,
  GOVUKHeaderLink,
}
