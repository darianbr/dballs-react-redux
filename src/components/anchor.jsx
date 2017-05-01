import React from 'react'
import PropTypes from 'prop-types'

import GrommetAnchor from 'grommet/components/Anchor'

export function Anchor (props, context) {
  const {label, routeName, routeParams, onClick: userOnClick, children} = props
  const {router} = context

  const href = router.buildPath(routeName, routeParams)

  function onClick (...args) {
    if (userOnClick) return userOnClick(...args)

    const [event] = args

    event.preventDefault()
    router.navigate(routeName, routeParams)
  }

  return <GrommetAnchor href={href} onClick={onClick} label={label}>{children}</GrommetAnchor>
}

Anchor.contextTypes = {router: PropTypes.object}

export default Anchor
