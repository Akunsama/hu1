import React, { Component } from "react";
import Items from "../item/item";
import { connect } from "react-redux";
import { addTodo } from "../../reducers/actions";

class Header extends Component {
  // const { dispatch } = this.props

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: [
        {
          value: "1"
        }
      ]
    };
  }

  componentDidMount() {}

  changeValue(e) {
    this.setState({
      value: e.target.value
    });
    e.preventDefault();
  }
  changeConfirm(e) {
    if (e.keyCode === 13) {
      let val = e.target.value;
      let item = {
        value: val
      };
      this.props.addTodo(item);
    }
  }

  deleteTodo(itemindex) {
    const arr = this.state.todos.filter((todo, index) => {
      return index !== itemindex;
    });
    this.setState({
      todos: arr
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="com-header">
                    <input
          type="text"
          value={this.state.value}
          onChange={this.changeValue.bind(this)}
          onKeyUp={this.changeConfirm.bind(this)}
        />
                    <ul>
                          {this.props.todos.map((todo, index) => {
            return (
              <Items
                key={index}
                value={todo.value}
                index={index}
                deleteTodo={this.deleteTodo.bind(this)}
              />
            );
          })}

        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = {
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
