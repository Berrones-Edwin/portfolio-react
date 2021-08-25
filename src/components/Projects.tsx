import { Center, Heading, Stack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { projectsData } from '../data/portfolio-data'
import GridProjects from './GridProjects'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)

  const filterProjects = ({ filter: string }) => {
    // projects.filter((project)=>project.)
  }
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
        <Button>Todos</Button>
        <Button>JavaScript</Button>
        <Button>Typescript</Button>
        <Button>React</Button>
      </Stack>

      {/* Grid Projects */}
      <GridProjects projects={projects} />
    </Stack>
  )
}

export default Projects
