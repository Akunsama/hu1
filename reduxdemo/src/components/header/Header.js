import React, {Component} from 'react';
import Items from '../item/item'

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			value:'',
			todos:[{
				value:'1'
			}]
		}
	}
	
	changeValue(e){
		this.setState({
			value:e.target.value
		})
		e.preventDefault();
	}
	
	changeConfirm(e){
		if(e.keyCode==13){
			let val = e.target.value;
			let item = {
				value:val
			}
			this.state.todos.push(item)
			this.setState({
				todos:this.state.todos
			})
		}
		e.preventDefault();
	}
	
	render() {
		return(
			<div className="com-header">
			<input type="text" value={this.state.value} onChange={this.changeValue.bind(this)} onKeyUp={this.changeConfirm.bind(this)}/>
			<ul>
				

				{
					this.state.todos.map((todo,index)=>{
						
						return (<Items key={index} value={todo.value} />)
					})
				}
			</ul>
      </div>
		);
	}
}

export default Header;