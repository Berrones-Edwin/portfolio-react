import { Center, Heading, Stack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { projectsData } from '../data/portfolio-data'
import { Project } from '../types/projects-type'
import GridProjects from './GridProjects'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)

  const filterProjects = ({ filter }: { filter: string }) => {
    let data: any = []
    if (filter == 'ALL') {
      data.push(...projectsData)
      setProjects(data)
      return
    }
    projectsData.forEach((project) => {
      project.technologies.forEach((tech) => {
        tech.name.toLowerCase() === filter.toLowerCase() && data.push(project)
      })
    })
    setProjects(data)
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
        <Button onClick={() => filterProjects({ filter: 'ALL' })}>Todos</Button>
        <Button onClick={() => filterProjects({ filter: 'JavaScript' })}>
          JavaScript
        </Button>
        <Button onClick={() => filterProjects({ filter: 'TypeScript' })}>
          Typescript
        </Button>
        <Button onClick={() => filterProjects({ filter: 'React' })}>
          React
        </Button>
      </Stack>

      {/* Grid Projects */}
      <GridProjects projects={projects} />
    </Stack>
  )
}

export default Projects
