import React, {Component} from 'react';

 class Items extends Component{

    render(){
        return (
            <li>{this.props.value}</li>
        )
    }
}

export default Items