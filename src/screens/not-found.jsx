import React from 'react'

import Helmet from 'react-helmet'

import Nav from '../components/nav'

export function NotFound () {
  return <span>
    <Helmet title='Not found' />
    <h1>Not found</h1>
    <Nav />
  </span>
}

export default NotFound
