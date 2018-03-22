import React, {Component} from 'react';

 class Items extends Component{
    handleDelete(){
        this.props.deleteTodo(this.props.index)
    }

    render(){
        return (
            <li>{this.props.value}<button onClick={this.handleDelete.bind(this)}>删除</button></li>
        )
    }
}

export default Items