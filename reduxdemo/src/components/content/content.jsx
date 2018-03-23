import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
import SearchForm from '../searchForm/searchForm'
import SearchTable from '../searchTable/searchTable'
import './content.css'


class content extends Component {


    render() {


        return (
            <div>
                <Row>
                    <Col span={1}>col-8</Col>
                    <Col span={22}>
                        <div className="mainBox">
                            <SearchForm />
                            <SearchTable />    
                        </div>
                    </Col>
                    <Col span={1}>col-8</Col>
                </Row>
            </div>
        );
    }
}

export default content;