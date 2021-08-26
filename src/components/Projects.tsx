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
    <Stack mt={'3'} mb={3}>
      <Center mb={2}>
        <Title title={'Proyectos'} size={'xl'} />
      </Center>
      {/* Filter */}
      <Filter projectsData={projectsData} setProjects={setProjects} />

      {/* Grid Projects */}
      <GridProjects projects={projects} />
    </Stack>
  )
}

export default Projects
