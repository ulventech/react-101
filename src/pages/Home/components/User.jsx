import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class User extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
    }

    render() {
        const { name } = this.props;

        return (
            <p>{name}</p>
        );
    }
}

export default User;