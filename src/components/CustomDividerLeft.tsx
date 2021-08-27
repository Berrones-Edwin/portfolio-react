import React from 'react'
import { Stack } from '@chakra-ui/layout'
const CustomDividerLeft = () => {
  return (
    <Stack
      height={'1px'}
      maxW={'50%'}
      bgColor={'purple.400'}
      position={'relative'}
      _before={{
        content: "''",
        position: 'absolute',
        width: '1px',
        height: '30px',
        bgColor: 'primary',
        top: '-13px',
        right: 0
      }}
    ></Stack>
  )
}

export default CustomDividerLeft
