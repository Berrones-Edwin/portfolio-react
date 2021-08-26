import React from 'react'
import CustomDividerLeft from './CustomDividerLeft'
import CustomDividerRight from './CustomDividerRight'

const CustomDivider = ({ side }: { side: 'right' | 'left' }) => {
  return side === 'left' ? <CustomDividerLeft /> : <CustomDividerRight />
}

export default CustomDivider
