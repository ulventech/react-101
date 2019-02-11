import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { trackClick } from '../services/Tracker/actions';

class Click extends Component {
    static propTypes = {
        Clicks: PropTypes.number.isRequired,
        trackClick: PropTypes.func.isRequired,
    }

    componentWillMount() {
        window.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click');
    }

    onClick = () => {
        this.props.trackClick();
    }

    render() {
        const { Clicks } = this.props;

        return (
            <h1>{Clicks}</h1>
        );
    }
}

const mapStateToProps = state => ({
    Clicks: state.Tracker.clicks,
});

const mapDispatchToProps = {
    trackClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(Click);
