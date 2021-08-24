import {
  Center,
  Heading,
  Stack,
  Button,
  Box,
  Image,
  Text,
  Flex,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
  const heading = 'white'
  const paragraph = useColorModeValue('black', 'white')
  return (
    <Stack mt={'1'}>
      <Center mb={2}>
        <Heading as={'h3'} size={'lg'}>
          Projects
        </Heading>
      </Center>
      {/* Filter */}
      <Stack
        as={'section'}
        spacing={4}
        direction={'row'}
        justify={'center'}
        align={'center'}
      >
        <Button>JavaScript</Button>
        <Button>Typescript</Button>
        <Button>React</Button>
      </Stack>
      {/* Grid Projects */}
      <Stack as={'section'} width={'90%'}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          rounded="md"
          width={'350px'}
          as={'article'}
          p={5}
          bgColor={'#232f45'}
          color={'white'}
        >
          <Box width={'100%'}>
            <Center>
              <Image
                src={
                  'https://user-images.githubusercontent.com/44040730/121064065-b7ec5600-c78c-11eb-8a14-48895b78b2bd.png'
                }
                alt={'holaa'}
                title={'hola'}
                height={'300px'}
                width={'300px'}
                borderRadius={'md'}
              />
            </Center>
          </Box>
          <Flex
            padding={2}
            direction={'column'}
            justify={'center'}
            align={'center'}
            as={'section'}
          >
            <Heading as={'h3'} size={'lg'} mb={1}>
              Journal App
            </Heading>
            <Text textAlign={'center'}>
              JournalApp es un sitio web que te permite crear, editar y eliminar
              notas.
            </Text>
            <Stack
              as={'section'}
              spacing={4}
              direction={'row'}
              justify={'center'}
              align={'center'}
              mt={2}
            >
              <Badge>React</Badge>
              <Badge>SASS</Badge>
              <Badge>TYPESCRIPT</Badge>
              <Badge>FIREBASE</Badge>
              <Badge>REDUX</Badge>
            </Stack>
          </Flex>
          <Stack
            as={'footer'}
            justify={'space-around'}
            direction={'row'}
            align={'center'}
            mb={3}
          >
            <Button
              bgColor={'primary'}
              _hover={{
                bgColor: 'primaryDark'
              }}
              size={'md'}
            >
              Demo
            </Button>
            <Button
              variant="outline"
              _hover={{
                bgColor: 'primaryLight'
              }}
            >
              Código
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Projects
