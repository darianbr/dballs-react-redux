import React from 'react'

import Box from 'grommet/components/Box'
import CubesIcon from 'grommet/components/icons/base/Cubes'
import GrommetHeader from 'grommet/components/Header'
import Title from 'grommet/components/Title'

import Anchor from './anchor'

export function Header () {
  return <GrommetHeader justify='between' pad={{horizontal: 'medium'}} colorIndex='brand'>
    <Title responsive={false}><CubesIcon /> Dr. Balls</Title>

    <Box direction='row' responsive={false} pad={{between: 'small'}}>
      <Anchor routeName='dashboard' label='Dashboard' /><br />
      <Anchor routeName='foo' label='Foo' />
    </Box>
  </GrommetHeader>
}

export default Header
