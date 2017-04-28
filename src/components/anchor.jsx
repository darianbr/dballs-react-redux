import React from 'react'
import {withRoute} from 'react-router5'

import GrommetAnchor from 'grommet/components/Anchor'

export function Anchor (props) {
  const {label, routeName, routeParams, onClick: userOnClick, children, router} = props
  const href = router.buildPath(routeName, routeParams)

  function onClick (...args) {
    if (userOnClick) return userOnClick(...args)

    const [event] = args

    event.preventDefault()
    router.navigate(routeName, routeParams)
  }

  return <GrommetAnchor href={href} onClick={onClick} label={label}>{children}</GrommetAnchor>
}

export default withRoute(Anchor)
