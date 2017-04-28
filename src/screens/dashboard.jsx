import React from 'react'

import Helmet from 'react-helmet'
import {Link} from 'react-router5'

export function Dashboard () {
  return <span>
    <Helmet title='Dashboard' />
    <h1>Dashboard</h1>
    <Link routeName='foo'>Foo</Link>
  </span>
}

export default Dashboard
