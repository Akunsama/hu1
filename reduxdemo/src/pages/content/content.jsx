import React, { Component } from "react";
import NavSearch from "../navSearch/navSearch";
import ProHover from "../../components/proHover/proHover"

class Content extends Component {
  render() {
    return (
      <div>
        <div className="webContent">
          <NavSearch />
          <div className="productShow">123</div>
        </div>
        <ProHover/>
      </div>
    );
  }
}

export default Content;
