import React from 'react'

import Helmet from 'react-helmet'
import {Link} from 'react-router5'

export function NotFound () {
  return <span>
    <Helmet title='Not found' />
    <h1>Not found</h1>
    <Link routeName='dashboard'>Dashboard</Link>
  </span>
}

export default NotFound