import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Add extends PureComponent {
    static propTypes = {
        numbers: PropTypes.shape({
            a: PropTypes.number.isRequired,
            b: PropTypes.number.isRequired,
        }),
    }

    static defaultProps = {
        numbers: {},
    }

    add = ({ a = 10, b = 5 }) => {
        if (!a || !b) {
            return 'No numbers';
        }
        return a + b;
    }

    render() {
        const { numbers } = this.props;
        return this.add(numbers);
    }
}

export default Add;
