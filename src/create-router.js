import browserPlugin from 'router5/plugins/browser'
import createRouter5 from 'router5'
import loggerPlugin from 'router5/plugins/logger'

export default function createRouter (options) {
  const {enableDebugLogs} = options

  const router = createRouter5([], options)
  router.usePlugin(browserPlugin())
  if (enableDebugLogs) router.usePlugin(loggerPlugin)

  return router
}
