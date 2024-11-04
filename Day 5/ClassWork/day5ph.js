import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log("Mounted");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Updating", nextState);
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updated from', prevState, 'to', this.state);
    }

    componentWillUnmount() {
        console.log("Unmounted");
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
