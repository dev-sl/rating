import React from 'react'

export default class Header extends React.Component
{
    constructor() {
        super();

        this.structure = [
            {
                id: 0,
                title: 'First elem',
                href: '#'
            },
            {
                id: 1,
                title: 'Second elem',
                href: '#'
            },
            {
                id: 2,
                title: 'Third elem',
                href: '#'
            }
        ];
    }

    render() {
        return (
            <nav className="header">
                {this.structure.map(item =>
                    <div key={item.id} className="header__item">
                        <a href={item.href} className="header__link">{item.title}</a>
                    </div>
                )}
            </nav>
        )
    }
}