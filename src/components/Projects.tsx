import { Center, Heading, Stack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { projectsData } from '../data/portfolio-data'
import { Project } from '../types/projects-type'
import Filter from './Filter'
import GridProjects from './GridProjects'
import Title from './Title'

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(projectsData)

  return (
    <Stack
      mb={'50'}
      mt={'5rem'}
      id={'projects'}
      as={'section'}
      maxW={'container.xl'}
     
    >
      <Title textAlign='center' title={'Proyectos'} size={'xl'} />
      {/* Filter */}
      <Filter projectsData={projectsData} setProjects={setProjects} />

      {/* Grid Projects */}
      <GridProjects projects={projects} />
    </Stack>
  )
}

export default Projects
