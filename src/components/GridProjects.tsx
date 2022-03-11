import React from 'react'
import { Project } from '../types/projects-type'
import { Stack, Grid } from '@chakra-ui/react'
import SingleProject from './Project'

const GridProjects = ({ projects }: { projects: Array<Project> }) => {
  return (
      <Grid
        gridGap={6}
        width={'100%'}
        templateColumns="repeat(auto-fill,minmax(350px,1fr))"
        justifyContent={'center'}
        alignContent={'center'}
        padding={2}
      >
        {projects.map((project) => (
          <SingleProject
            key={project.id}
            id={project.id}
            name={project.name}
            descriptionShort={project.descriptionShort}
            description={project.description}
            image={project.image}
            links={project.links}
            technologies={project.technologies}
          />
        ))}
      </Grid>
  )
}

export default GridProjects
