import React from 'react'
import Preloader from "./Preloader";
import Header from "./Header";
import Main from "./Main";

export default class App extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            preloaderEnbled: true,
            chronicles: null
        };
    }

    componentDidMount() {
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
    }

    render() {
        if (this.state.preloaderEnbled) {
            return (
                <Preloader/>
            );
        }

        return (
            <div>
                <Header/>
                <Main chronicles={this.state.chronicles}/>
            </div>
        );
    }
}