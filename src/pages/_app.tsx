import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-color-picker/index.css'
import '@reach/combobox/styles.css'

import { wrapper } from '~core/store'
import { ErrorBoundary as BugsnagErrorBoundary } from '~utils/bugsnag'
import AppErrorBoundary from '~components/errorBoundaries/AppErrorBoundary'
import { AppProps } from 'next/app'

const Main = ({ Component, pageProps }: AppProps) => (
  <BugsnagErrorBoundary>
    <ChakraProvider>
      <AppErrorBoundary>
        <Component {...pageProps} />
      </AppErrorBoundary>
    </ChakraProvider>
  </BugsnagErrorBoundary>
)

export default wrapper.withRedux(Main)
