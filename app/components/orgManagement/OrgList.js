import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PANEL_TITLE } from 'constants';
import { paginationSetting } from 'utils';
import panelStyle from '../../layout/main/Main.scss';
import Header from '../shared/panel/PanelHeader';
import UserListTable from './OrgListTable';

class OrgList extends Component {
    static propTypes = {
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
                <Header title={PANEL_TITLE.USER_MANAGEMENT}/>
                <div className={panelStyle.panel__body}>
                    <UserListTable dataSource={list} actions={actions}/>
                </div>
            </div>
        );
    }
}

export default OrgList;
