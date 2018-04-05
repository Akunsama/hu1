import React, { Component } from 'react';
import { Table } from 'antd';
const { Column } = Table;

class searchTable extends Component {

    render() {
        return (
            <div className="tableBox">
                <Table dataSource={this.props.tableData} >
                    <Column
                        title="姓名"
                        dataIndex="userName"
                        key="userName"
                    />
                    <Column
                        title="年龄"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="地址"
                        dataIndex="address"
                        key="address"
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (  
                            <span>
                                <a href="#" onClick={this.props.deleteValue.bind(this,record.key)}>点击操作</a>
                            </span>
                        )}
                    />
                </Table>            
            </div>

        );
    }
}

export default searchTable;