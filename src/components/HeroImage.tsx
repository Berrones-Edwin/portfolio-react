import React from 'react'
import { Stack, Image, Button, useColorModeValue } from '@chakra-ui/react'
import Developer from '../svg/developer.svg'
import Title from './Title'
import SocialMedia from './SocialMedia'
const HeroImage = () => {
  return (
    <Stack
      as={'section'}
      width={'90%'}
      direction={{
        base: 'column',
        md: 'column'
      }}
      justify={{
        base: 'center',
        md: 'center'
      }}
      align={'center'}
    >
      <Stack
        as={'section'}
        spacing={3}
        direction={{
          base: 'column',
          md: 'row'
        }}
        justify={{
          base: 'center',
          md: 'space-beetwen'
        }}
        align={'center'}
        maxW={'100%'}
      >
        <Stack
          as={'section'}
          spacing={6}
          w={{
            base: '100%',
            md: '425px'
          }}
          padding={3}
        >
          <Title title={'Hola 👋 '} size={'2xl'} />
          <Title
            title={'Soy Edwin Berrones. Programador web front-end.'}
            size={'xl'}
          />
          <SocialMedia />
          <Button
            size="md"
            width={'100%'}
            bgColor="primary"
            as={'a'}
            href={'#about'}
            _hover={{
              bgColor: 'primaryDark'
            }}
            color={useColorModeValue('buttonTextLight', 'buttonTextDark')}
          >
            Conocer más
          </Button>
        </Stack>

        <Image
          mb={3}
          src={Developer}
          alt={'developer'}
          height="250"
          width="250"
        />
      </Stack>
    </Stack>
  )
}

export default HeroImage
