import React from 'react'
import {
  Stack,
  Box,
  Center,
  Image,
  Flex,
  Heading,
  Badge,
  Button,
  Text
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
  return (
    <Stack
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      rounded="md"
      width={{
        base: '90%',
        md: '300px'
      }}
      as={'article'}
      p={5}
      bgColor={'#232f45'}
      color={'white'}
    >
      <Box width={'100%'}>
        <Center>
          <Image
            objectFit={'cover'}
            src={image}
            alt={name}
            title={name}
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
        <Heading as={'h3'} size={'md'} mb={1} textDecoration={'underline'}>
          {name}
        </Heading>
        <Text textAlign={'center'}>{descriptionShort}</Text>
        <Stack
          as={'section'}
          spacing={4}
          direction={'row'}
          justify={'center'}
          padding={1}
          wrap={'wrap'}
          align={'center'}
          mt={2}
          maxW={'90%'}
        >
          {technologies.map((t) => (
            <Badge
              borderRadius={'20'}
              padding={1}
              color={'black'}
              bgColor={t.name}
              key={t.id}
            >
              {t.name}
            </Badge>
          ))}
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
          as={'a'}
          href={links[0].url}
          bgColor={'primary'}
          _hover={{
            bgColor: 'primaryDark'
          }}
          size={'md'}
          target={'_blank'}
        >
          {links[0].name}
        </Button>
        <Button
          variant="outline"
          as={'a'}
          href={links[1].url}
          _hover={{
            bgColor: 'primaryDark'
          }}
        >
          {links[1].name}
        </Button>
      </Stack>
    </Stack>
  )
}

export default SingleProject