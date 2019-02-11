import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../../../services/Auth/actions';
import Button from '../../../components/Button';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    static propTypes = {
        addUser: PropTypes.func.isRequired,
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.name);
        this.setState({ name: '' });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        const { name } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="name"
                    value={name}
                    onChange={this.onChange}
                />
                <Button
                    type="submit"
                    text="Submit"
                    color="danger"
                />
            </form>
        );
    }
}

const mapDispatchToProps = {
    addUser,
};

export default connect(() => ({}), mapDispatchToProps)(AddUser);
