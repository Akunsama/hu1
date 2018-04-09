import React, { Component } from "react";

import { Menu } from "antd";

import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      number:1
    }
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="webHeader">
        <div className="webHeader-left">
          <Menu onClick={this.handleClick} mode="horizontal">
            <Menu.Item key="xiaomi"><Link to='/'>商城</Link></Menu.Item>
            <Menu.Item key="miui"><Link to={`/ui/${this.state.number}`}>UI</Link></Menu.Item>
            <Menu.Item key="lot">loT</Menu.Item>
            <Menu.Item key="yun">云服务</Menu.Item>
            <Menu.Item key="shui">水滴</Menu.Item>
          </Menu>
        </div>
        <div className="webHeader-right">
          <Menu onClick={this.handleClick} mode="horizontal">
            <Menu.Item key="denglu">登录</Menu.Item>
            <Menu.Item key="zhuce">注册</Menu.Item>
            <Menu.Item key="xiaoxi">消息通知</Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Header;
