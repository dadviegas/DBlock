import React from 'react'
import Markdown from '../common/components/Markdown'
import { Layout, Breadcrumb, Icon } from 'antd'
import mardownFile from './markdowntest.md'
import MenuRouter from '../common/app/Menu'

const { Header, Content, Footer, Sider } = Layout

const CONTENT_WIDTH_COLLAPSED = 69
const CONTENT_WIDTH_NOT_COLLAPSED = 205

class Home extends React.Component {
  state = {
    collapsed: true,
    contentWidth: CONTENT_WIDTH_COLLAPSED
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed, contentWidth: collapsed ? CONTENT_WIDTH_COLLAPSED : CONTENT_WIDTH_NOT_COLLAPSED });
  }

  render() {
    return (
      <Markdown source={mardownFile} />
    );
  }
}

export default Home
