import React, { Component } from "react";
import { connect } from "react-redux";

class proHover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("111111111111111111111111",this.props.proIndex)
    const classname = this.props.proIndex.show===true?"show":"";
    return (
      <div className={"proHover "+ classname} onClick={console.log(this)}>
        {this.props.proIndex}
        <div />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("这里",state.proIndex)
  return {
    proIndex: state.proIndex.index
  };
};

export default connect(mapStateToProps)(proHover);
