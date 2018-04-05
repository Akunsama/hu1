import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SearchForm from '../searchForm/searchForm'
import SearchTable from '../searchTable/searchTable'
import './content.css'


class content extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    pushValue(value){
        // this.state.data.push(value)
        this.setState({
            data:[...this.state.data, value]
        })
       setTimeout(() => {
        console.log(value,this.state.data)
       }, 100);
    }

    deleteValue(value){
        let arr=this.state.data.filter((item,index)=>{
            return item.key!=value
        })
        this.setState({
            data:arr
        })
        console.log("这里出现了吗",value,arr)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={1}>col-8</Col>
                    <Col span={22}>
                        <div className="mainBox">
                            <SearchForm pushValue={this.pushValue.bind(this)} />
                            <SearchTable tableData={this.state.data} deleteValue={this.deleteValue.bind(this)}/>    
                        </div>
                    </Col>
                    <Col span={1}>col-8</Col>
                </Row>
            </div>
        );
    }
}

export default content;