import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu;

class HeaderComponent extends PureComponent {
  onClick({ item, key, keyPath }) {
    window.location.hash = `#${key}`
  }

  render () {
    const selectedKeys = [this.props.location.pathname]

    return <Menu key='menu' theme="dark" selectedKeys={selectedKeys} defaultSelectedKeys={['1']} mode="inline" onClick={this.onClick}>
      <SubMenu
        title={<span><Icon type="right-circle-o" /><span>Main</span></span>}
      >
        <Menu.Item key="/home">Home</Menu.Item>
        <Menu.Item key="/about">About</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub11"
        title={<span><Icon type="code" /><span>Code</span></span>}
      >
        <Menu.Item key="/code/default">Code</Menu.Item>
      </SubMenu>
    </Menu>
  }
}

export default withRouter(props => <HeaderComponent {...props} />)
