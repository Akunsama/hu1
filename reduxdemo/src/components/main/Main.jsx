import React, { Component } from 'react';
import Top from './../top/top'
import Contents from './../content/content'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


class Main extends Component {
  render() {
    return (
      <div>
         <Layout>
          <Header><Top /></Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content><Contents /></Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Main;