import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PANEL_TITLE, DIALOG } from 'constants';
import { Button } from 'antd';
import { paginationSetting } from 'utils';
import panelStyle from 'layout/main/Main.scss';
import Header from '../shared/panel/PanelHeader';
import AccountTable from './AccountListTable';

class AccountList extends Component {
    static propTypes = {
        showDialog: PropTypes.func,
        actions: PropTypes.objectOf(PropTypes.func),
        accountList: PropTypes.object
    };

    componentDidMount() {
        this.props.actions.getUserList(paginationSetting.pageSize);
    }

    render() {
        const {accountList: {list}, actions} = this.props;
        return (
            <div>
                <Header title={PANEL_TITLE.ACCOUNT}/>
                <div className={panelStyle.panel__body}>
                    <Button type="primary" className="editable-add-btn" onClick={this.props.showDialog(DIALOG.CREATE_USER)} ghost>新增账户</Button>
                    <AccountTable dataSource={list} actions={actions} showDialog={this.props.showDialog}/>
                </div>
            </div>
        );
    }
}

export default AccountList;
