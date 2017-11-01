import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Markdown from '../common/components/Markdown/index.jsx'
import mardownFile from './markdowntest.1.md'

const ContainerExampleFluid = () => (
  <Container fluid>
    <Markdown source={mardownFile} />
  </Container>
)

export default ContainerExampleFluid
