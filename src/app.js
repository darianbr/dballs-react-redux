import {compose, createStore} from 'redux'
import {render} from 'react-dom'

import reducer from './reducer'

import App from './components/app'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()
const store = createStore(reducer, enhancer)

render(App({store}), document.getElementById('app'))
