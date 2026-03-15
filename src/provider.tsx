import { ChakraProvider, type ChakraProviderProps } from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'

import { govUkTheme } from './theme'

export type GOVUKProviderProps = Omit<ChakraProviderProps, 'value'> & PropsWithChildren

export function GOVUKProvider({ children, ...props }: GOVUKProviderProps) {
  return (
    <ChakraProvider value={govUkTheme} {...props}>
      {children}
    </ChakraProvider>
  )
}
