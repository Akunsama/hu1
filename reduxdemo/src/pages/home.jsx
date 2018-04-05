import React, { Component } from "react";
import Headers from './header/header'
import Contents from './content/content'
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header><Headers></Headers></Header>
          <Content><Contents></Contents></Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;
