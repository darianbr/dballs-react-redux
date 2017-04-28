import React from 'react'

import Helmet from 'react-helmet'
import {Link} from 'react-router5'

export function Foo () {
  return <span>
    <Helmet title='Foo' />
    <h1>Foo</h1>
    <Link routeName='dashboard'>Dashboard</Link>
  </span>
}

export default Foo
