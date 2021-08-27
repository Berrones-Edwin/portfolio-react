import React from 'react'
import { Stack, Image, Button, Text, Center, Heading } from '@chakra-ui/react'
import Developer from '../svg/developer.svg'
import Title from './Title'
const HeroImage = () => {
  return (
    <Stack
      height={'400px'}
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
        spacing={3}
        direction={'column'}
        justify={'center'}
        align={'center'}
      >
        <Title title={'Hola, Soy Edwin Berrones'} size={'md'} />

        <Title title={'Programador web front-end'} size={'xl'} />

        <Image
          mb={3}
          src={Developer}
          alt={'developer'}
          height="250"
          width="250"
        />
        <br />
        <Button
          border={'1px solid red'}
          size="lg"
          width={'300px'}
          variant="outline"
          bgColor="primary"
          as={'a'}
          href={'#about'}
        >
          Conocer más
        </Button>
      </Stack>
    </Stack>
  )
}

export default HeroImage
