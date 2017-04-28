import React from 'react'
import {Provider} from 'react-redux'

import Helmet from 'react-helmet'

export default function App (props) {
  const {store} = props

  return <Provider store={store}>
    <span>
      <Helmet defaultTitle='Dr. Balls' titleTemplate='%s | Dr. Balls' />
      <span>Something.</span>
    </span>
  </Provider>
}
