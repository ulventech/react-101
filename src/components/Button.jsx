import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
    static propTypes = {
        text: PropTypes.oneOfType(PropTypes.string, PropTypes.shape({})).isRequired,
        type: PropTypes.oneOf([
            'button',
            'submit',
        ]).isRequired,
        color: PropTypes.oneOf([
            'default',
            'primary',
            'danger',
        ]).isRequired,
        onClick: PropTypes.func,
    }

    static defaultProps = {
        color: 'default',
        onClick: () => {},
    }

    render() {
        const {
            text,
            type,
            onClick,
            color,
        } = this.props;

        return (
            <button
                type={type}
                onClick={onClick}
                className={`btn btn-${color}`}
            >
                {text}
            </button>
        );
    }
}

export default Button;