import React, { Component } from "react";

class App extends Component {
    state = {
        count: 1,
        cars: ["Maruti","Tata","ford"]
    }

    incCount = () => {
        this.setState({
            count: this.state.count + 1,
            cars: [...this.state.cars,"BMW"]
        })
    }

    

    render() {
        let { count ,cars} = this.state;
        return (
            <>
                <h1> Let's Lear React State</h1>
                <p>Count: {count} </p>
                <button onClick={this.incCount}>
                    Click to increment
                </button>
                <hr />
                <ul>
                    {
                        cars.map((c,index) => {
                            return (
                                <li key={index}>{c}</li>
                            )
                        })
                    }
                </ul>                
            </>
        );
    }
}

export default App;
