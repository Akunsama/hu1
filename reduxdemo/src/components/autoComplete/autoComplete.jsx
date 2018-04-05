import React, { Component } from "react";
import { Input } from "antd";
const Search = Input.Search;

class autoComplete extends Component {
  render() {
    return (
      <div className="searchInput">
        <Search
          placeholder=""
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    );
  }
}

export default autoComplete;
