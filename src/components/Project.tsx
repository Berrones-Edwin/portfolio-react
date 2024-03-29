import React from 'react'
import {
  Stack,
  Box,
  Center,
  Image,
  Flex,
  Heading,
  Button,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorModeValue,
  DrawerFooter
} from '@chakra-ui/react'

import { Project } from '../types/projects-type'

const SingleProject = ({
  id,
  name,
  descriptionShort,
  description,
  image,
  links,
  technologies
}: Project) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
 

  return (
    <>
      <Stack
        as={'article'}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        width={{
          base: '100%',
          md: '300px'
        }}
        p={5}
        // #232f45'
        bgColor={useColorModeValue('bgColorLight','232f45')}
        color={useColorModeValue('black','white')}
        onClick={onOpen}
        cursor={'pointer'}
      >
        <Flex
          padding={2}
          direction={'column'}
          justify={'center'}
          align={'center'}
          as={'header'}
        >
          <Heading as={'h3'} size={'md'} mb={1} textDecoration={'underline'}>
            {name}
          </Heading>
          <Text textAlign={'center'}>{descriptionShort} </Text>
        </Flex>
        <hr />
        <Stack
          as={'footer'}
          justify={'space-around'}
          direction={'row'}
          align={'center'}
          mt={1}
        >
          <Button
            as={'a'}
            href={links[0].url}
            bgColor={'primary'}
            _hover={{
              bgColor: 'primaryDark'
            }}
            size={'md'}
            target={'_blank'}
            color={'white'}
          >
            {links[0].name}
          </Button>
          <Button
            variant="outline"
            as={'a'}
            href={links[1].url}
            target={'_blank'}
            _hover={{
              bgColor: 'primaryDark',
              color:'white'
            }}
          >
            {links[1].name}
          </Button>
        </Stack>
      </Stack>

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{name}</DrawerHeader>
          <DrawerBody>
            <Stack spacing={3}>
              <Image
                objectFit={'cover'}
                src={image}
                alt={name}
                title={name}
                height={'300px'}
                width={'300px'}
                borderRadius={'md'}
              />
              <Text>{description}</Text>
              <Center>
                <Heading size={'md'}>Tecnologías</Heading>
              </Center>
              <Stack
                as={'section'}
                spacing={4}
                direction={'row'}
                justify={'space-around'}
                padding={1}
                wrap={'wrap'}
                align={'center'}
                mt={2}
                mb={3}
                maxW={'100%'}
                height={'100px'}
              >
                {technologies.map((t) => (
                  <Button
                    size={'sm'}
                    padding={1}
                    color={'black'}
                    bgColor={t.name}
                    key={t.id}
                  >
                    {t.name}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={onClose}>Cerrar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SingleProject
