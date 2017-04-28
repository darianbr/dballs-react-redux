import {compose, createStore} from 'redux'
import {render} from 'react-dom'
import {reduxPlugin} from 'redux-router5'

import configureRouter from './configure-router'
import createRouter from './create-router'
import reducer from './reducer'

import App from './components/app'

const logOption = window.location.search.match(/\blog=(\d)\b/)
// const enableLogs = logOption && logOption[1]
const enableDebugLogs = logOption && logOption[1] > '1'

const router = configureRouter(createRouter({
  allowNotFound: true,
  strictQueryParams: false,
  enableDebugLogs
}))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()
const store = createStore(reducer, enhancer)

router.usePlugin(reduxPlugin(store.dispatch))
router.start()

render(App({store, router}), document.getElementById('app'))
