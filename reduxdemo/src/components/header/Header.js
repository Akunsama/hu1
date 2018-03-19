import React, {Component} from 'react';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			value:''
		}
		this.changeValue = this.changeValue.bind(this)
		this.changeConfirm = this.changeConfirm.bind(this)
	}
	
	changeValue(e){
		this.setState({
			value:e.target.value
		})
		e.preventDefault();
	}
	
	changeConfirm(e){
		if(e.keyCode==13){
			
		}
		e.preventDefault();
	}
	
	render() {
		return(
			<div className="com-header">
			<input type="text" value={this.state.value} onChange={this.changeValue} onKeyUp={this.changeConfirm}/>
      </div>
		);
	}
}

export default Header;