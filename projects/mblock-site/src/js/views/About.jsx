import React from 'react'
import Markdown from '../common/components/Markdown'
import mardownFile from './markdowntest.1.md'

const ContainerExampleFluid = () => (
    <Markdown source={mardownFile} />
)

export default ContainerExampleFluid
