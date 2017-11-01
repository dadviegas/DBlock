import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu;

class HeaderComponent extends PureComponent {
  onClick({ item, key, keyPath }) {
    console.log({ item, key, keyPath })

    window.location.hash = `#/${key}`
  }

  render () {
    const { pathname } = this.props.location;

    return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.onClick}>
      <Menu.Item key="1">
        <Icon type="pie-chart" />
        <span>asda sadas</span>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={<span><Icon type="right-circle-o" /><span>Main</span></span>}
      >
        <Menu.Item key="home" href='/'>Home</Menu.Item>
        <Menu.Item key="about" href='/about'>About</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub11"
        title={<span><Icon type="code" /><span>Code</span></span>}
      >
        <Menu.Item key="31">Home</Menu.Item>
        <Menu.Item key="42">About</Menu.Item>
      </SubMenu>
    </Menu>
  }
}

export default withRouter(props => <HeaderComponent {...props} />)
