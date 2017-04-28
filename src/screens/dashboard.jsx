import React from 'react'

import Helmet from 'react-helmet'

import Nav from '../components/nav'

export function Dashboard () {
  return <span>
    <Helmet title='Dashboard' />
    <h1>Dashboard</h1>
    <Nav />
  </span>
}

export default Dashboard
