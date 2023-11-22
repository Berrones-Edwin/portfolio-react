import { Stack, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import Title from './Title'

const About = () => {
  return (
    <>
      <Stack
        maxW={'container.xl'}
        display={'flex'}
        direction={'row'}
        justify={'center'}
        align={'center'}
        padding={4}
        id={'about'}
        as={'section'}
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
          as={'section'}
        >
          <Stack
            width={{
              base: '100%',
              md: '30%'
            }}
            justify={'center'}
            align={'center'}
            padding={2}
            as="picture"
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
            as="article"
          >
            <Title textAlign="center" title={'Acerca de mí'} size={'xl'} />
            <Text>
              Soy Edwin Berrones, originario de México
              que le apasiona programar, persona autodidacta que le gusta
              aprender y probar distintas librerías o frameworks.
            </Text>
            <Text>
              Empecé a programar en mi etapa de la universidad, ahorita estoy
              centrando en el mundo del desarrollo web, específicamente del lado
              del front-end donde he realizado proyectos React y NodeJs.
            </Text>
            <Text>
              Actualmente realizo proyectos para ir mejorando mis habilidades de
              programación y para tener más experiencia en el lenguaje
              JavaScript /TypeSscript.Puedes ver algunos de mis proyectos en la
              sección{' '}
              <a href="#projects">
                <b>Proyectos </b>
              </a>{' '}
              o entrando a mi perfil de <a target={'_blank'} href="https://github.com/Berrones-Edwin"><b>GitHub</b></a>.
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}

export default About
