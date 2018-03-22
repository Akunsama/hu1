import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './content.css'

class content extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={1}>col-8</Col>
                    <Col span={22}>
                        <div className="mainBox"></div>
                    </Col>
                    <Col span={1}>col-8</Col>
                </Row>
            </div>
        );
    }
}

export default content;