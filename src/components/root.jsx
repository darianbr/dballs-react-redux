import React from 'react'
import {connect} from 'react-redux'
import {routeNodeSelector} from 'redux-router5'
import {startsWithSegment} from 'router5.helpers'

import Dashboard from '../screens/dashboard'
import Foo from '../screens/foo'
import Layout from './layout'
import NotFound from '../screens/not-found'

export function Root ({route}) {
  const {name, params} = route
  const testRoute = startsWithSegment(name)
  let screen

  if (testRoute('dashboard')) {
    screen = <Dashboard params={params} />
  } else if (testRoute('foo')) {
    screen = <Foo params={params} />
  } else {
    screen = <NotFound />
  }

  return <Layout>{screen}</Layout>
}

export default connect(
  function mapStateToProps (state) {
    return routeNodeSelector('')
  }
)(Root)
