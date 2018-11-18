import React from 'react'
import Preloader from "./Preloader";
import Chronicles from "./Chronicles";

export default class App extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            preloaderEnbled: true,
            chronicles: null,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            fetch('/api/v1/chronicles')
                .then(response => response.json())
                .then(
                    data => {
                        this.setState({
                            preloaderEnbled: false,
                            chronicles: data,
                        })
                    }
                );
        }, 2000);

    }

    render() {
        if (!this.state.preloaderEnbled && this.state.chronicles !== null) {
            return (
                <Chronicles chronicles={this.state.chronicles}/>
            )
        }

        return (
            <Preloader/>
        );
    }
}