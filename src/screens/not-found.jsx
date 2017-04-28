import React from 'react'

import Headline from 'grommet/components/Headline'
import Helmet from 'react-helmet'

export function NotFound () {
  return <span>
    <Helmet title='Not found' />
    <Headline>Not found</Headline>
  </span>
}

export default NotFound
