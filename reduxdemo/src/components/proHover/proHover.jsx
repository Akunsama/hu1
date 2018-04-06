import React, { Component } from "react";
import { connect } from "react-redux";

class proHover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classname = this.props.proIndex.show===true?"show":"";
    return (
      <div className={`proHover ${classname}`}>
        <div />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    proIndex: state.proIndex
  };
};

export default connect(mapStateToProps)(proHover);
