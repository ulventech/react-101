import React, { Component } from 'react';
import UsersList from './containers/Users';
import AddUser from './containers/AddUser';

class Home extends Component {
    render() {
        return (
            <div>
                <UsersList />
                <br />
                <br />
                <AddUser />
            </div>
        );
    }
}

export default Home;
