'use client'

import { ChakraProvider, defaultSystem, SystemContext } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

type I = { value?: SystemContext } & React.PropsWithChildren

export function Provider({ value = defaultSystem, ...props }: I) {
  return (
    <ChakraProvider value={value}>
      <ColorModeProvider>{props.children}</ColorModeProvider>
    </ChakraProvider>
  )
}
