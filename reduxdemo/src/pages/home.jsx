import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Headers from "./header/header";
import Contents from "./content/content";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

function PageMain() {
  return (
    <div>
      <Header>
        <Headers />
      </Header>
      <Content>
        <Contents />
      </Content>
      <Footer>Footer</Footer>
    </div>
  );
}

class PageUi extends Component{

  componentWillMount(){
    console.log(this.props.match.params)
  }

  render(){
    return (
      <div>
        <Header>
          <Headers />
        </Header>
        <Content>
          <div>传过来的就是这个{this.props.match.params.number}</div>
        </Content>
        <Footer>Footer</Footer>
      </div>
    );
  }
}

class Home extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={PageMain} />
            <Route path="/ui/:number" component={PageUi} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default Home;
