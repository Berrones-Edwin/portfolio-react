import React from 'react'
import { IconButton } from '@chakra-ui/button'

interface props {
  ariaLabel: string
  href: string
  bgColorHover: string
  bgColor: string
  icon: React.ReactElement
}

const SocialMediaButton = ({
  ariaLabel,
  href,
  bgColorHover,
  bgColor,
  icon
}:props) => {
  return (
    <IconButton
      as={'a'}
      aria-label={ariaLabel}
      borderRadius={'9999px'}
      size={'lg'}
      href={href}
      target={'_blank'}
      _hover={{
        bgColor: bgColorHover
      }}
      bgColor={bgColor}
      icon={icon}
    >
      Github
    </IconButton>
  )
}

export default SocialMediaButton
