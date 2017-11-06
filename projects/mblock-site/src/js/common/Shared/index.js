import React from 'react'
import { Layout, Icon } from 'antd'
import MenuRouter from '../app/Menu'

const { Header, Content, Footer, Sider } = Layout

const CONTENT_WIDTH_COLLAPSED = 69
const CONTENT_WIDTH_NOT_COLLAPSED = 205

class Home extends React.Component {
  state = {
    collapsed: false,
    contentWidth: CONTENT_WIDTH_NOT_COLLAPSED
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed, contentWidth: collapsed ? CONTENT_WIDTH_COLLAPSED : CONTENT_WIDTH_NOT_COLLAPSED });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{ height: '100vh', position: 'fixed', left: 0 }}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" > Logo </div>
          <MenuRouter collapsed={this.state.collapsed} />
        </Sider>
        <Layout style={{ background: '#fff', padding: 10, marginLeft: this.state.contentWidth }}>

          <Content style={{ background: '#fff', margin: 8 }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            DAD Viegas ©2017 Created by David Viegas
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home

// < Header style= {{ background: '#fff', padding: 0 }}></Header>
