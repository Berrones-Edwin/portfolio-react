import React from 'react'
import { Stack, Button } from '@chakra-ui/react'
import { Project } from '../types/projects-type'
const FILTERBUTTONS = [
  { id: 1, name: 'Todos', filter: 'ALL', color: 'primaryDark' },
  { id: 2, name: 'JavaScript', filter: 'JavaScript', color: 'JavaScript' },
  { id: 3, name: 'TypeScript', filter: 'TypeScript', color: 'TypeScript' },
  { id: 4, name: 'React', filter: 'React', color: 'React' }
]
const Filter = ({
  projectsData,
  setProjects
}: {
  projectsData: Project[]
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}) => {
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
    <Stack
      as={'section'}
      spacing={4}
      direction={'row'}
      justify={'center'}
      align={'center'}
    >
      {FILTERBUTTONS.map((filter) => (
        <Button
          color={'black'}
          key={filter.id}
          bgColor={filter.color}
          onClick={() => filterProjects({ filter: filter.filter })}
        >
          {filter.name}
        </Button>
      ))}
    </Stack>
  )
}

export default Filter
