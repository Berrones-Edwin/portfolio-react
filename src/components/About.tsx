import { Stack, Heading, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <>
      <Stack
        maxW={'100%'}
        display={'flex'}
        direction={'row'}
        justify={'center'}
      >
        <Stack
          borderRadius={'10px'}
          maxW={'80%'}
          width={'80%'}
          justify={{
            base: 'column'
          }}
          bgColor={'bgColorAbout'}
        >
          <Flex
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
              <Heading as={'h3'}>Acerca de mí</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, perferendis. Atque ullam, cumque est dolor labore sint
                ipsa hic itaque obcaecati consectetur sequi dolorum cupiditate
                unde porro asperiores perferendis alias earum veritatis neque
                ratione aperiam. Nam unde cupiditate impedit voluptas atque eum
                corporis optio molestias, libero repellat, fugiat expedita
                quibusdam?
              </Text>
            </Stack>
            <Image
              borderRadius="full"
              src={'https://bit.ly/dan-abramov'}
              boxSize="200px"
            />
          </Flex>
        </Stack>
      </Stack>
      {/* </Center> */}
    </>
  )
}

export default About
