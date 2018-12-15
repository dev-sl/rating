import React from 'react'
import PropTypes from 'prop-types';

export default class Chronicles extends React.Component
{
    render() {
        const { chronicles } = this.props;

        return (
            <ul>
                {chronicles.map(
                    chronicle => <li key={chronicle.id}>{chronicle.name}</li>
                )}
            </ul>
        )
    }
}

Chronicles.propTypes = {
    chronicles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
};