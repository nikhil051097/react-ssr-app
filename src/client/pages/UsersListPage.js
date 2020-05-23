import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UsersList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsersList(users) {
        return users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    render() {
        return (
            <div>Here's is a list of users
                <ul>
                    {this.renderUsersList(this.props.users)}
                </ul>

            </div>

        )

    }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export { loadData };
const mapStateToProps = (({ users }) => {
    return { users };
});

// export default connect(mapStateToProps, {
//     fetchUsers
// })(UsersList);

export default {
    component: connect(mapStateToProps, {
        fetchUsers
    })(UsersList),
    loadData
}