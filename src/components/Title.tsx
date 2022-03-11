import React from 'react'
import { Heading } from '@chakra-ui/layout'

interface TitleProps {
  title: string
  size: 'xl' | '4xl' | '3xl' | '2xl' | 'lg' | 'md' | 'sm' | 'xs',
  textAlign:"center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";
}

const Title = ({ title, size,textAlign='center' }: TitleProps) => {
  return (
    <Heading
      as={'h4'}
      textAlign={textAlign}
      size={size}
      letterSpacing={2}
      mb={1}
      mt={1}
    >
      {title}
    </Heading>
  )
}

export default Title
