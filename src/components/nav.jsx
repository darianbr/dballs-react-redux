import React from 'react'

import Anchor from '../components/anchor'

export function Nav () {
  return <span>
    <Anchor routeName='dashboard' label='Dashboard' /><br />
    <Anchor routeName='foo' label='Foo' />
  </span>
}

export default Nav
