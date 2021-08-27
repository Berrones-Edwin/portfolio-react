import { Stack, Image, Text, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import Title from './Title'

const About = () => {
  return (
    <>
      <Stack
        maxW={'100%'}
        display={'flex'}
        direction={'row'}
        justify={'center'}
        align={'center'}
        padding={4}
        id={'about'}
      >
        <Stack
          borderRadius={'10px'}
          maxW={'90%'}
          width={'90%'}
          justify={{
            base: 'column'
          }}
        >
          <Flex
            direction={{
              base: 'column',
              md: 'row'
            }}
            justify={{
              base: 'flex-start',
              md: 'space-between'
            }}
            align={{
              base: 'center',
              md: 'flex-start'
            }}
          >
            <Stack
              width={{
                base: '100%',
                md: '30%'
              }}
              justify={'center'}
              align={'center'}
              padding={2}
            >
              <Image
                borderRadius="full"
                src={'https://avatars.githubusercontent.com/u/44040730?v=4'}
                boxSize={{
                  base: '200px',
                  md: '300px'
                }}
                border={'6px solid #7f5af0'}
              />
            </Stack>
            <Stack
              padding={4}
              width={{
                base: '100%',
                md: '70%'
              }}
              justify={'center'}
              align={'center'}
              height={'100%'}
            >
              <Title title={'Acerca de mí'} size={'xl'} />
              <Text>
                Soy Edwin Berrones, un frontend developer, originario de México
                que le apasiona programar, persona autodidacta que le gusta
                aprender y probar distintas librerías o frameworks.
              </Text>
              <Text>
                Empecé a programar en mi etapa de la universidad, ahorita estoy
                centrando en el mundo del desarrollo web, especificamente del
                lado del front-end donde he realizado proyectos en Angular y
                React.
              </Text>
              <Text>
                Actualmente realizo proyectos para ir mejorando mis habilidades
                de programacion y para tener mas experencia en el lenguaje
                JavaScript /TypeSscript. Puedes ver algunos de mis proyectos en
                la sección <b>Proyectos</b> o entrando a mi perfil de{' '}
                <b>GitHub</b>.
              </Text>
              <Text>Puedes encontrarme en:</Text>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </>
  )
}

export default About
