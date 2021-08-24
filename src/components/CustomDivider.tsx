import React from 'react'
import { Divider, Center } from '@chakra-ui/react'

type CustomDividerProps = {
  height: string
  orientation: 'horizontal' | 'vertical'
  bgColor: string
}

const CustomDivider = ({
  height = '200px',
  orientation = 'vertical',
  bgColor
}: CustomDividerProps) => {
  console.log(height)
  return (
    <Center height="500px">
      <Divider orientation={orientation} bgColor={bgColor} />
    </Center>
  )
}

export default CustomDivider
