import React from 'react'
import { HStack, IconButton } from '@chakra-ui/react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaDev
} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <HStack color={'white'}>
      <IconButton
        as={'a'}
        aria-label='social media Github'
        borderRadius={'9999px'}
        size={'lg'}
        href={'https://github.com/Berrones-Edwin'}
        target={'_blank'}
        _hover={{
          bgColor: '#084461'
        }}
        bgColor={'#000000'}
        icon={<FaGithub />}
      >
        Github
      </IconButton>
      <IconButton
        as={'a'}
        aria-label='social media Linkedin'
        size={'lg'}
        borderRadius={'9999px'}
        href={'https://www.linkedin.com/in/edwin-berrones-9a89b9182/'}
        target={'_blank'}
        _hover={{
          bgColor: '#084461'
        }}
        bgColor={'#0e76a8'}
        icon={<FaLinkedin />}
      >
        Linkedin
      </IconButton>
      <IconButton
      aria-label='social media Twitter'
        as={'a'}
        size={'lg'}
        borderRadius={'9999px'}
        target={'_blank'}
        colorScheme={'twitter'}
        icon={<FaTwitter />}
        href={'https://twitter.com/eberrones_'}
      >
        Twitter
      </IconButton>
      <IconButton
        as={'a'}
        aria-label='social media Medium'
        size={'lg'}
        borderRadius={'9999px'}
        href={'https://berrones-edwin.medium.com'}
        target={'_blank'}
        _hover={{
          bgColor: 'blackAlpha.900'
        }}
        bgColor={'blackAlpha.700'}
        icon={<FaMedium />}
      >
        Medium
      </IconButton>
      <IconButton
      aria-label='social media DevTo'
        as={'a'}
        size={'lg'}
        href={'https://dev.to/berronesedwin'}
        target={'_blank'}
        borderRadius={'9999px'}
        _hover={{
          bgColor: 'gray.900'
        }}
        bgColor={'gray.700'}
        icon={<FaDev />}
      >
        DevTo
      </IconButton>
    </HStack>
  )
}

export default SocialMedia
