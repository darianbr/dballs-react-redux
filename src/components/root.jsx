import React from 'react'
import {connect} from 'react-redux'
import {routeNodeSelector} from 'redux-router5'
import {startsWithSegment} from 'router5.helpers'

import Dashboard from '../screens/dashboard'
import NotFound from '../screens/not-found'

export function Root ({route}) {
  const {name, params} = route
  const testRoute = startsWithSegment(name)

  if (testRoute('dashboard')) {
    return <Dashboard params={params} />
  }

  return <NotFound />
}

export default connect(
  function mapStateToProps (state) {
    return routeNodeSelector('')
  }
)(Root)
