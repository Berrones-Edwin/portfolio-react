import { Stack, Image, Text, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import './About.css'
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
                src={'https://bit.ly/dan-abramov'}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, perferendis. Atque ullam, cumque est dolor labore sint
                ipsa hic itaque obcaecati consectetur sequi dolorum cupiditate
                unde porro asperiores perferendis alias earum veritatis neque
                ratione aperiam. Nam unde cupiditate impedit voluptas atque eum
                corporis optio molestias, libero repellat, fugiat expedita
                quibusdam?
              </Text>
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
          </Flex>
        </Stack>
      </Stack>
    </>
  )
}

export default About
