import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class P extends PureComponent {
    static propTypes = {
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({}),
        ]).isRequired,
        color: PropTypes.string,
    }

    static defaultProps = {
        color: '#FFFFFF',
    }

    render() {
        const {
            text,
            color,
        } = this.props;

        return (
            <p
                style={{
                    color,
                    fontSize: 41,
                }}
            >
                {text}
            </p>
        );
    }
}

export default P;
