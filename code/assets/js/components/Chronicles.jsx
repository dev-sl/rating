import React from 'react'

export default class Chronicles extends React.Component
{
    render() {
        const { chronicles } = this.props;

        return (
            <ul>
                {chronicles.map(
                    chronicle => {
                        return (
                            <li key={chronicle.id}>{chronicle.name}</li>
                        )
                    }
                )}
            </ul>
        )
    }
}