import React from 'react'
import { HStack, Button } from '@chakra-ui/react'
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
      <Button
        as={'a'}
        size={'sm'}
        href={'https://github.com/Berrones-Edwin'}
        target={'_blank'}
        _hover={{
          bgColor: '#084461'
        }}
        bgColor={'#000000'}
        leftIcon={<FaGithub />}
      >
        Github
      </Button>
      <Button
        as={'a'}
        size={'sm'}
        href={'https://www.linkedin.com/in/edwin-berrones-9a89b9182/'}
        target={'_blank'}
        _hover={{
          bgColor: '#084461'
        }}
        bgColor={'#0e76a8'}
        leftIcon={<FaLinkedin />}
      >
        Linkedin
      </Button>
      <Button
        as={'a'}
        size={'sm'}
        target={'_blank'}
        colorScheme={'twitter'}
        leftIcon={<FaTwitter />}
        href={'https://twitter.com/eberrones_'}
      >
        Twitter
      </Button>
      <Button
        as={'a'}
        size={'sm'}
        href={'https://berrones-edwin.medium.com'}
        target={'_blank'}
        _hover={{
          bgColor: 'blackAlpha.900'
        }}
        bgColor={'blackAlpha.700'}
        leftIcon={<FaMedium />}
      >
        Medium
      </Button>
      <Button
        as={'a'}
        size={'sm'}
        href={'https://dev.to/berronesedwin'}
        target={'_blank'}
        _hover={{
          bgColor: 'gray.900'
        }}
        bgColor={'gray.700'}
        leftIcon={<FaDev />}
      >
        DevTo
      </Button>
    </HStack>
  )
}

export default SocialMedia
