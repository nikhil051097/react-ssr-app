import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from '../actions';
import requiredAuth from './../components/hocs/requireAuth';

class AdminsListPage extends Component {

    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdminsList(admins) {
        return admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }
    render() {
        return (
            <div>
                <h3>Protected list of Admins</h3>
                <ul>
                    {this.renderAdminsList(this.props.admins)}
                </ul>

            </div>

        )

    }
}

function loadData(store) {
    return store.dispatch(fetchAdmins());
}

export { loadData };

const mapStateToProps = (({ admins }) => {
    return { admins };
});

export default {
    component: connect(mapStateToProps, {
        fetchAdmins
    })(requiredAuth(AdminsListPage)),
    loadData
}