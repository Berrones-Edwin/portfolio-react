export type Project = {
  id: number
  name: string
  descriptionShort: string
  description: string
  image: string
  links: Array<Link>
  technologies: Array<Technology>
}

type Link = {
  id: number
  name: string
  url: string
}
type Technology = {
  id: number
  name: string
}
