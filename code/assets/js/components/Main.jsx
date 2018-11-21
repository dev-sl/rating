import React from 'react'
import Chronicles from "./Chronicles";

export default class Main extends React.Component
{
    render() {
        const { chronicles } = this.props;

        return (
            <main role="main" className="container">

                <div className="starter-template">
                    <h1>Chronicles</h1>
                    <Chronicles chronicles={chronicles}/>
                </div>
            </main>
        );
    }
}