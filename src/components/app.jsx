import React from 'react'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router5'

import Helmet from 'react-helmet'

import Root from './root'

export default function App (props) {
  const {store, router} = props

  return <Provider store={store}>
    <RouterProvider router={router}>
      <span>
        <Helmet defaultTitle='Dr. Balls' titleTemplate='%s | Dr. Balls' />
        <Root />
      </span>
    </RouterProvider>
  </Provider>
}
