import React from 'react'
import { Stack, Button, Text, Center } from '@chakra-ui/react'
import Developer from '../svg/developer.svg'
import Title from './Title'
const HeroImage = () => {
  return (
    <Stack
      height={'400px'}
      width={'90%'}
      direction={{
        base: 'column',
        md: 'row'
      }}
      justify={{
        base: 'center',
        md: 'space-around'
      }}
      align={'center'}
    >
      <Stack padding={4}>
        <Title title={'Hola, Bienvenido'} size={'xl'} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          sequi, vitae eius odio doloremque illo.
        </Text>
        <Button
          border={'1px solid red'}
          size="lg"
          width={'150px'}
          variant="outline"
          bgColor="primary"
        >
          Conocer más
        </Button>
      </Stack>
      <Center>
        <img src={Developer} alt={'developer'} height="500" width="500" />
      </Center>
    </Stack>
  )
}

export default HeroImage
