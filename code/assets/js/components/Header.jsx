import React from 'react';
import logo from '../../img/logo.svg';

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
            <div className="container">
                <header className="header">
                    <div className="header__logo">
                        <img src={logo} alt="Rating logo"/>
                    </div>
                    <nav className="header__nav">
                        {this.structure.map(item =>
                            <div key={item.id} className="header__item">
                                <a href={item.href} className="header__link">{item.title}</a>
                            </div>
                        )}
                    </nav>
                </header>
            </div>
        )
    }
}