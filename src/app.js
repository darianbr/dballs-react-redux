import {compose, createStore, applyMiddleware} from 'redux'
import {render} from 'react-dom'
import {router5Middleware} from 'redux-router5'

import configureRouter from './configure-router'
import createRouter from './create-router'
import reducer from './reducer'

import App from './components/app'

const logOption = window.location.search.match(/\blog=(\d)\b/)
// const enableLogs = logOption && logOption[1]
const enableDebugLogs = logOption && logOption[1] > '1'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const router = configureRouter(createRouter({
  allowNotFound: true,
  strictQueryParams: false,
  enableDebugLogs
}))
const enhancer = composeEnhancers(
  applyMiddleware(router5Middleware(router))
)
const store = createStore(reducer, enhancer)

router.start()

render(App({store, router}), document.getElementById('app'))
