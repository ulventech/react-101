import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';
import User from '../components/User';

class Users extends Component {
    static propTypes = {
        Users: PropTypes.arrayOf(PropTypes.string),
    }

    static defaultProps = {
        Users: [],
    }

    render() {
        const { Users } = this.props;

        return (
            <div>
                {Users.map(userName => (
                    <User
                        key={shortid.generate()}
                        name={userName}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Users: state.Auth.users,
});

export default connect(mapStateToProps)(Users);
