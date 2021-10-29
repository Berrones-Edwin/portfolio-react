import React from 'react'
import { Heading } from '@chakra-ui/layout'

type TitleProps = {
  title: string
  size: 'xl' | '4xl' | '3xl' | '2xl' | 'lg' | 'md' | 'sm' | 'xs'
}

const Title = ({ title, size }: TitleProps) => {
  return (
    <Heading as={'h4'} textAlign='center' size={size} letterSpacing={2} mb={1} mt={1}>
      {title}
    </Heading>
  )
}

export default Title
