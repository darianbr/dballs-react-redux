import React from 'react'

import Heading from 'grommet/components/Heading'
import Helmet from 'react-helmet'

export function Foo () {
  return <span>
    <Helmet title='Foo' />
    <Heading>Foo</Heading>
  </span>
}

export default Foo
