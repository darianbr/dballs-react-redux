import React from 'react'

import Helmet from 'react-helmet'

import Nav from '../components/nav'

export function Foo () {
  return <span>
    <Helmet title='Foo' />
    <h1>Foo</h1>
    <Nav />
  </span>
}

export default Foo
