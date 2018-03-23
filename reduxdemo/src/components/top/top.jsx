import React, { Component } from 'react';

import { Menu, Icon } from 'antd';
import './top.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className="topStyle">
                <Menu.Item key="one">
                    菜单一
                </Menu.Item>
                <Menu.Item key="two">
                    菜单二
                </Menu.Item>
                <Menu.Item key="three">
                    菜单三
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />下拉菜单</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}



export default Top;
