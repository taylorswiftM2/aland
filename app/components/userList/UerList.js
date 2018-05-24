import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PANEL_TITLE, DIALOG } from 'constants';
import { rebuildDataWithKey } from 'utils';
import { Button } from 'antd';
import panelStyle from 'layout/main/Main.scss';
import Header from '../panel/PanelHeader';
import UserTable from './UserListTable';

class UserList extends Component {
    static propTypes = {
        showDialog: PropTypes.func,
        userList: PropTypes.object,
        getUserList: PropTypes.func
    };

    componentDidMount() {
        this.props.getUserList();
    }

    render() {
        let {userList: {list}} = this.props;
        list = rebuildDataWithKey(list?.elements);
        return (
            <div>
                <Header title={PANEL_TITLE.ACCOUNT}/>
                <div className={panelStyle.panel__body}>
                    <Button type="primary" className="editable-add-btn" onClick={this.props.showDialog(DIALOG.CREATE_USER)} ghost>新增账户</Button>
                    <UserTable dataSource={list} showDialog={this.props.showDialog}/>
                </div>
            </div>
        );
    }
}

export default UserList;
