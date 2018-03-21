import React, {Component} from 'react';
import Items from '../item/item'
import { connect } from 'react-redux'
import  addTodo  from '../../reducers/reducer'

class Header extends Component {

	// const { dispatch } = this.props

	constructor(props){
		super(props);
		this.state = {
			value:'',
			todos:[{
				value:'1'
			}]
		}
	}

	componentDidMount(){
		console.log(addTodo)
		console.log(this.props.dispatch)
	}

	changeValue(e){
		this.setState({
			value:e.target.value
		})
		e.preventDefault();
	}
	
	changeConfirm(e){
		if(e.keyCode===13){
			let val = e.target.value;
			let item = {
				value:val
			}
			this.state.todos.push(item)
			this.setState({
				todos:this.state.todos
			})

			this.props.dispatch(addTodo(this.state.todos))

			this.setState({
				value:''
			})
		}
		e.preventDefault();
	}

	deleteTodo(itemindex){
		const arr = this.state.todos.filter((todo,index)=>{
			return index !== itemindex
		})
		this.setState({
			todos:arr
		})
	}
	
	render() {
		return(
			<div className="com-header">
			<input type="text" value={this.state.value} onChange={this.changeValue.bind(this)} onKeyUp={this.changeConfirm.bind(this)}/>
			<ul>
				{
					this.state.todos.map((todo,index)=>{
						
						return (<Items key={index} value={todo.value} index={index} deleteTodo={this.deleteTodo.bind(this)}/>)
					})
				}
			</ul>
      </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	  todos: state.todos
	}
} 
const mapDispatchToProps = {
	changeConfirm: () => {
	  type: 'ADD_TODO'
	}
}  

export default connect(mapStateToProps,mapDispatchToProps)(Header);