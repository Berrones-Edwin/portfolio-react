import React from 'react'
import { Stack, Flex } from '@chakra-ui/layout'
const CustomDividerRight = () => {
  return (
    <Flex justify={'flex-end'}>
      <Stack
        mb={1}
        height={'1px'}
        maxW={'50%'}
        width={'50%'}
        bgColor={'purple.400'}
        position={'relative'}
        _before={{
          content: "''",
          position: 'absolute',
          width: '1px',
          height: '30px',
          bgColor: 'primary',
          top: '-13px',
          left: 0
        }}
      ></Stack>
    </Flex>
  )
}

export default CustomDividerRight
