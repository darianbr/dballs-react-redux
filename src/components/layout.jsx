import React from 'react'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Helmet from 'react-helmet'

import Header from './header'

export function Layout (props) {
  const {children} = props

  return <App centered={false}>
    <Helmet defaultTitle='Dr. Balls' titleTemplate='%s | Dr. Balls' />

    <Box>
      <Header />

      <Box align='center' margin={{top: 'medium'}}>
        <Box size={{width: 'xxlarge'}} pad='medium'>
          {children}
        </Box>
      </Box>
    </Box>
  </App>
}

export default Layout
